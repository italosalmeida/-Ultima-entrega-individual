using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class Cidade
    {
        [Key]
        public int Id { get; set; }
        public string nome { get; set; }
        public int pais_id { get; set; }

        [ForeignKey("pais_id")]
        public Pais Pais { get; set; }
    }
}
