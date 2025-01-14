import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (

    <div className="container">
      <h1>Thank You, {state.fName}!</h1>
      {state && (
        <>
          <p>You're now registered for {state.course}</p>
          <p>We'll email to <strong>{state.email}</strong> for any updates.</p>
        </>
      )}
    </div>
  );
}
