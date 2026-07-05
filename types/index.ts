export interface RegisterRequest {
username: string;
password: string;
}

export interface LoginRequest {
username: string;
password: string;
}

export interface TokenResponse {
access_token: string;
token_type :string;
}

export interface UserResponse {
id: number;
username: string;
avatar: string | null;
bio: string | null;
created_at: string;
}