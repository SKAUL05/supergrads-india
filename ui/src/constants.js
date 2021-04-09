const prod = {
     API_URL: process.env.REACT_APP_API_URL || "http://localhost:8080"
};
const dev = {
     API_URL: "http://localhost:8080"
};
export const config = process.env.NODE_ENV === "development" ? dev : prod;