import { ClipLoader } from "react-spinners";

type Props = {};

const LoadingIndicator = (props: Props) => {
  return (
    <>
      <div>
        <ClipLoader
          loading={true}
          size={90}
          aria-label="Loading Spinner"
          data-testid="loader"
          color="pink"
        />
      </div>
    </>
  );
};

export default LoadingIndicator;
