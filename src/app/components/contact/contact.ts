// import { Component } from '@angular/core';
// import { Navbar } from '../navbar/navbar';
// import { Footer } from '../footer/footer';

// @Component({
//   selector: 'app-contact',
//   imports: [Navbar,Footer],
//   templateUrl: './contact.html',
//   styleUrl: './contact.scss',
// })
// export class Contact {

// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 

import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  // Assuming a standalone component structure:
  standalone: true,
  imports: [Navbar,Footer, ReactiveFormsModule] 
})

export class Contact implements OnInit {
    contactForm!: FormGroup;
    isSubmitting = false;
    successMessage = '';
    errorMessage = '';
    
    // **CRITICAL:** Ensure this URL matches your running Node.js backend route
    private apiServerUrl = '/api/contact'; 

    constructor(
        private fb: FormBuilder,
        private http: HttpClient // Inject HttpClient here
    ) { }

    ngOnInit(): void {
        // Initialize the form with controls and validation
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required]
        });
    }

    onSubmit() {
        // Prevent submission if invalid or already submitting
        if (this.contactForm.invalid || this.isSubmitting) {
            this.contactForm.markAllAsTouched();
            return;
        }

        this.isSubmitting = true;
        this.successMessage = '';
        this.errorMessage = '';

        // Send data to the backend API
        this.http.post(this.apiServerUrl, this.contactForm.value).subscribe({
            next: (response: any) => {
                this.successMessage = 'Thank you! Your message has been sent successfully.';
                this.contactForm.reset(); // Clear form fields
            },
            error: (err) => {
                console.error('API Error:', err);
                this.errorMessage = 'Failed to send message. Please check the server connection.';
            },
            complete: () => {
                this.isSubmitting = false;
            }
        });
    }
}
