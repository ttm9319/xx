using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Entitites;

namespace Core.Specifications
{
    public class ProductsWithtypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithtypesAndBrandsSpecification()
        {
            AddInclude(x => x.ProductType);
             AddInclude(x => x.productBrand);
        }

        public ProductsWithtypesAndBrandsSpecification(int id) 
        : base(x => x.Id == id)
        {
             AddInclude(x => x.ProductType);
             AddInclude(x => x.productBrand);
        }
    }
}