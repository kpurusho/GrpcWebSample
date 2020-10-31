using System.Threading.Tasks;
using Lotresult;
using Grpc.Core;
using App.Query;
using System.Linq;

namespace Server.Services
{
    public class LotResultService : LotService.LotServiceBase
    {
        public override Task<LotResponse> GetLot(LotRequest request, ServerCallContext context)
        {
            var lot = new Query().GetLot();
            var lotResponse = new LotResponse { Id = lot.Id, Name = lot.Name };
            lotResponse.WaferIds.AddRange(lot.Wafers.Select(w => w.Id));
            return Task.FromResult(lotResponse);
        }
        public override Task<WaferResponse> GetWafer(WaferRequest request, ServerCallContext context)
        {
            var wafer = new Query().GetWafer(request.Id);
            var waferResponse = new WaferResponse { Id = wafer.Id, Name = wafer.Name };
            waferResponse.DefectIds.AddRange(wafer.Defects.Select(d => d.Id));
            return Task.FromResult(waferResponse);
        }
        public override Task<DefectsResponse> GetDefects(DefectsRequest request, ServerCallContext context)
        {
            var wafer = new Query().GetWafer(request.WaferId);
            var defsResponse = new DefectsResponse();
            foreach (var def in wafer.Defects)
                defsResponse.Defects.Add(CreateDefect(def));
            return Task.FromResult(defsResponse);
        }

        public override Task<Lotresult.Defect> GetDefect(DefectRequest request, ServerCallContext context)
        {
            var def = new Query().GetDefect(request.WaferId, request.Id);
            var defResponse = CreateDefect(def);
            return Task.FromResult(defResponse);
        }

        private static Lotresult.Defect CreateDefect(App.Data.Defect def)
        {
            return new Lotresult.Defect
            { Id = def.Id, X = def.X, Y = def.Y, Classcode = def.Classcode, Roughcode = def.Roughcode };
        }

    }
}
