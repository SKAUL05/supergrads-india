package dev.gcp.visitcount;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VisitCountController {

    @CrossOrigin(origins = "*")
    @GetMapping("/count")
    public String count() {
        return "2";
    }

}