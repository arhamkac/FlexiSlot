package com.flexislot.repository;

import com.flexislot.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface ContactRepository extends JpaRepository<Contact, Long> {}