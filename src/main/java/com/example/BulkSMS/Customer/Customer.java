package com.example.BulkSMS.Customer;

import javax.persistence.*;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Table
public class Customer {
    @Id
    @SequenceGenerator(
            name = "customer_sequence",
            sequenceName = "customer_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.AUTO,
            generator = "customer_sequence"
    )
    private Long id;
    private String firstName;
    private String lastName;
    private LocalDate birthDay;
    @Transient
    private LocalDate today;
    @Transient
    private Integer age;
    public Customer() {
    }
    public Customer(Long id, String firstName, String lastName, LocalDate birthDay) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
    }

    public Customer(String firstName, String lastName, LocalDate birthDay) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public void setBirthDay(LocalDate birthDay) {
        this.birthDay = birthDay;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public LocalDate getBirthDay() {
        return birthDay;
    }
    public DayOfWeek getToday() {
       return LocalDate.now().getDayOfWeek();
    }
    public Integer getAge() {
        return Period.between(this.birthDay, LocalDate.now()).getYears();
    }
    public Long getId() {
        return id;
    }
}
