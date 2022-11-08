using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class Pais
    {
        [Key]
        public int Id { get; set; }
        public string nome { get; set; }

        public ICollection<Cidade> cidades { get; set; }
    }
}
