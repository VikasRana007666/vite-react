import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import Layout from "../components/Layout";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <Layout>
          <h2 className="text-red-500 text-center">This page doesn't exist!</h2>
        </Layout>
      );
    }

    if (error.status === 401) {
      return (
        <Layout>
          <h2 className="text-red-500 text-center">
            You aren't authorized to see this
          </h2>
        </Layout>
      );
    }

    if (error.status === 503) {
      return (
        <Layout>
          <h2 className="text-red-500 text-center">
            Looks like our API is down
          </h2>
        </Layout>
      );
    }

    if (error.status === 418) {
      return (
        <Layout>
          <h2 className="text-red-500 text-center">🫖</h2>
        </Layout>
      );
    }
  }

  return (
    <Layout>
      <h2 className="text-red-500 text-center">Something went wrong</h2>
    </Layout>
  );
}
