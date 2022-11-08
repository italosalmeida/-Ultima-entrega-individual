using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class DestinoController : ControllerBase
    {
        public readonly ApiDbContext _context;

        public DestinoController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Destino
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Destino>>> GetDestino()
        {
            var destinos = await _context.Destino
                .Include(d => d.CidadeDestino)
                .Include(p => p.CidadePartida)
                .ToListAsync();

            return Ok(destinos);
        }
    }
}
