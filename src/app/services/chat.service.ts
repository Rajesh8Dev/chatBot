import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'YOUR_CHATBOT_API_URL';
  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    const body = { message: message };
    return this.http.post<any>(this.apiUrl, body);

  }
  
}


