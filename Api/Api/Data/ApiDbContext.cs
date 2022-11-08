using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {

        }

        public DbSet<Pais> Pais { get; set; }
        public DbSet<Cidade> Cidade { get; set; }
        public DbSet<Destino> Destino { get; set; }
    }    
}
