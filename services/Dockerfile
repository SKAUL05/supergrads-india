FROM openjdk:11
VOLUME /tmp
ADD services/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
