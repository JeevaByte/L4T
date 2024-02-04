package io.learn.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.learn.models.UserModel;
import io.learn.repository.UserRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class HomeController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/")
	public List<UserModel> getUsers(){
		return userRepository.findAll();
	}
	
	@PostMapping("/register")
	public void addUser(@RequestBody UserModel user) {
		userRepository.save(user);
	}
	
	@GetMapping("/login/{email}")
	public Optional<UserModel> getUserData(@PathVariable String email) {
		return userRepository.findUserByEmail(email);
	}
	
}
