FROM openjdk:11
VOLUME /tmp
ADD visitcount/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
