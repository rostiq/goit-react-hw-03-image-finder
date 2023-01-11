import React from 'react';
import { ThreeDots } from  'react-loader-spinner';

const Loader = () => {

    return (
        <ThreeDots
        height="80" 
        width="80" 
        radius="9"
        color="violet"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
            display: "flex",
            justifyContent: "center"
        }}
        visible={true}
        />
    );

};

export default Loader;

