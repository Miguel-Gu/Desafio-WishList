using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using wishList_webAPI.Contexts;
using wishList_webAPI.Domains;
using wishList_webAPI.Interfaces;

namespace wishList_webAPI.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {
        //Instâcia da context que nos permitira usar o EF e os seus métodos.
        WishListContext WishList = new WishListContext();

        //Cadastrar
        public void Cadastrar(Desejo novoDesejo)
        {
            //Adicionando lista
            WishList.Desejos.Add(novoDesejo);


            //Salvando alterações
            WishList.SaveChanges();
        }

        public List<Desejo> ListarDesejos()
        {
            //listando os desejos.
            return WishList.Desejos.ToList();
        }
    }
}
