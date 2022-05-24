export const listadoProdutos=[
	{	id:1,
		category:"electricas",
		content:"",
		description:"AMOLADORA 500W",		
        img:"https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW831_10.jpg",		
        img2:"https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW831_10.jpg",
		name:"AMOLADORA",
		price:73000,
		stock:100
	},
	{	id:2,
		category:"electricas",
		content:"",
		description:"SIERRA 650W",		
		img:"https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW300_1L.jpg",		
        img2:"https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW300_1L.jpg",
		name:"SIERRA",
		price:58000,
		stock:100
	},
		{ id:3,
		category:"electricas",
		content:"",
		description:"TALADRO 710W",		
		img:"https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW505_1.jpg",		
        img2:"https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW505_1.jpg",
		name:"TALADRO",
		price:22000,
		stock:100
	}
		
]

/* Promesa para obtener productos (todos o los de su categoría) */
export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? listadoProdutos.filter(prod => prod.category === categoryId) : listadoProdutos)
        }, 1000)
    })
}

/* Promesa para obtener el producto por el Id */
export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(listadoProdutos.find(prod => prod.id === parseInt(id)))
        }, 1000)
    })
}