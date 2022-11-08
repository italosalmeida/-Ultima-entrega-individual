using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class Destino
    {
        [Key]
        public int Id { get; set; }

        public int cidade_destino_id { get; set; }
        public int cidade_partida_id { get; set; }

        [ForeignKey("cidade_destino_id")]
        public virtual Cidade CidadeDestino { get; set; }
        [ForeignKey("cidade_partida_id")]
        public virtual Cidade CidadePartida { get; set; }
    }
}
