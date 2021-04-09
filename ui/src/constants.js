const prod = {
     API_URL: "https://spring-react-app-byu3swvefa-ew.a.run.app"
};
const dev = {
     API_URL: "http://localhost:8080"
};
export const config = process.env.NODE_ENV === "development" ? dev : prod;