import "../styles/globals.css";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const [url,setUrl]=useState();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //console.log(url);
    const handleStart = () => {
      setUrl(router.pathname);
      url !== router.pathname ? setIsLoading(true) : setIsLoading(false); 
    };
    const handleComplete=()=>{
      setIsLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <>
      <Loading loading={isLoading} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
