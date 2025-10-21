import { User, Monitor, ShoppingBag, Watch } from "react-feather";

export const MAX_TITLE_CHARACTERS = 30;
export const MAX_DESCRIPTION_CHARACTERS = 50;

export const CATEGORY_INFOS_MAPPING = {
  electronics: {
    icon: <Monitor stroke="#1A73E8" />,
    bgColor: "#E6F0FF",
  },
  "men's clothing": {
    icon: <User stroke="#5A3EE0" />,
    bgColor: "#EDE7FF",
  },
  "women's clothing": {
    icon: <ShoppingBag stroke="#E63963" />,
    bgColor: "#FFE6EC",
  },
  jewelery: {
    icon: <Watch stroke="#C49B00" />,
    bgColor: "#FFF6D9",
  },
};
