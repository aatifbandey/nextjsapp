import React from "react";
import App, {Container} from "next/app";
import '../styles/globals.scss'

const MyApp =(props)=> {
	const {Component, pageProps, store} = props;
	
	return (
		<Container>
			<Component {...pageProps}/>
		</Container>
		
  );  
}

MyApp.getInitialProps= async ({Component, ctx})=> {

	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
	return {pageProps};
}

export default MyApp;