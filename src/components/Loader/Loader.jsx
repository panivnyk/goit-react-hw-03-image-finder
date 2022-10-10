import { Blocks } from 'react-loader-spinner';
// import { } from 'services/Common.styled';

export const Loader = () => {
  return (
    <div>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};
