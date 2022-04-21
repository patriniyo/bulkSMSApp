package com.example.BulkSMS.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5000")
@RestController
@RequestMapping(path = "api/v1/customer")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> getCustomers(){
        return customerService.getCustomers();
    }
    @GetMapping(path = "{birthDay}")
    public List<Customer> getCustomerByBirthDay(@PathVariable("birthDay") String birthDay){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyy-MM-dd");
        LocalDate birthDayConverted = LocalDate.parse(birthDay, formatter);
        System.out.println(birthDayConverted);
        return customerService.getCustomerByBirthDay(birthDayConverted);

    }

    @PostMapping
    public void registerNewCustomer(@RequestBody Customer customer){
        System.out.println(customer);
        customerService.addNewCustomer(customer);
    }
}
