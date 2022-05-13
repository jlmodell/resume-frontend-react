import React, { ReactNode } from "react";
import {
  useTheme,
  Container,
  Row,
  Col,
  Switch,
  Text,
  Grid,
} from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "Jeff Modell - Resume (NextJS w/ TypeScript)",
}: Props) => {
  const darkMode = useDarkMode(false);
  const { type, isDark } = useTheme();

  return (
    <Container as="div" responsive>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Row as="nav">
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
            |{" "}
            <Link href="/resume">
              <a>Resume</a>
            </Link>{" "}
            |{" "}
            <Link href="/components">
              <a>Components</a>
            </Link>{" "}
            |{" "}
            <a href="https://fiber.odellmay.com/api/resume">
              Resume API Endpoint
            </a>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Text style={{ marginRight: "1rem" }}>
              The current theme is:
              <Text as="span" weight="semibold" style={{ marginLeft: "1rem" }}>
                {type}
              </Text>
            </Text>
            <Switch
              checked={darkMode.value}
              onChange={() => darkMode.toggle()}
              bordered
              color="success"
            />
          </Row>
        </Grid>
      </Grid.Container>

      <Container as="main">{children}</Container>

      <  as="footer">
        <Text as="span">&copy; {new Date().getFullYear()} Jeff Modell</Text>
        <ul style={{ display: "flex" }}>
          <li style={{ marginRight: "1rem" }}>
            <a href="https://github.com/jlmodell/" target="_blank">
              github
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank">
              linkedin
            </a>
          </li>
        </ul>
      </>
    </Container>
  );
};

export default Layout;
