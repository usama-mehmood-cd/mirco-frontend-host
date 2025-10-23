declare module "remote_app/Button" {
  const Button: React.FC<{
    text: string;
    onClick?: () => void;
  }>;
  export default Button;
}

declare module "remote_app/Header" {
  const Header: React.FC;
  export default Header;
}

declare module "remote_app/Products" {
  const Products: React.FC;
  export default Products;
}

declare module "remote_app/utils" {
  export function capitalize(str: string): string;
}
