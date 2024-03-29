export type LocationType = {
  id: string;
  address: string
}

export type BannersType = Array<{
  id: string;
  url: string;
}>;

export type CategoriesType = Array<{
  id: string;
  url: string;
  name: string;
}>;

export type CardType = Array<{
  id: string;
  imgUrl: string;
  name: string;
  price: string;
}>

export type ResponseType = {
  success: boolean;
  data: {
    location: LocationType;
    banners: BannersType;
    categories: CategoriesType;
    freshes: CardType;
  };
};
