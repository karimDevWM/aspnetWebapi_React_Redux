export interface Product {
    produitId: number
    produitLibelle: string
    produitPhoto: string
    produitPrix: number
    produitDescription: string
    produitCategoryId: number
    produitTailleId: number
    produitCreatorId: number
    categoryNom: string
    creatorFirstname: string
    creatorLastname: string
    tailleLibelle: string
    stockProduitTailleQuantite: number
    stockProduitTailleQuantiteDisponible: number
}

// ? makes the property optional inside the interface