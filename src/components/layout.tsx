import { Layout, Menu } from "antd";
import dayjs from "dayjs";
import { useState, type CSSProperties, type ReactNode } from "react";
import { useNavigate } from "react-router";

const { Header, Footer, Content } = Layout;

const headerStyle: CSSProperties = {
  textAlign: "center",
  alignItems: "center",
  display: "flex",
  color: "#fff",
  height: 64,
  padding: 0,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: "100%",
  backgroundColor: "#fafafa",
};

const footerStyle: CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
};

export default function LayoutWrapper({
  children,
}: Readonly<{ children: ReactNode }>) {
  const navigate = useNavigate();

  const [selectedKeys, setSelectedKeys] = useState([
    globalThis.location.pathname,
  ]);
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Menu
          selectedKeys={selectedKeys}
          mode="horizontal"
          theme="dark"
          style={{ flex: 1 }}
          items={[
            { key: "/", label: "Home" },
            { key: "/products", label: "Products" },
          ]}
          onClick={({ key, keyPath }) => {
            setSelectedKeys(keyPath);
            navigate(key);
          }}
        />
      </Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>Copyright &copy; {dayjs().year()}</Footer>
    </Layout>
  );
}
