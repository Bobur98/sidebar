import React from 'react';
import { useRouteError } from 'react-router-dom';
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      Error Page
      <i>{error.statusText || error.message}</i>
    </div>
  );
}
