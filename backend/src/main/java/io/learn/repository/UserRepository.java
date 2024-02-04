package io.learn.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import io.learn.models.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long>{
	Optional<UserModel> findUserByEmail(String email);
}
