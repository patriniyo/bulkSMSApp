package com.example.BulkSMS.Customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository <Customer,Long> {
    List<Customer> findCustomerByBirthDay(LocalDate birthDay);
}

