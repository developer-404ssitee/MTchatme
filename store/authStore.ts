import { authApi, usersApi } from '@/lib/api'
import type { LoginRequest, RegisterRequest, UserResponse } from '@/types'
import { create } from 'zustand'

interface AuthState {
    user: UserResponse | null
    isloading: boolean
    error: string | null

    login: (data: LoginRequest) => Promise<void>
    Register: (data: RegisterRequest) => Promise<void>
    logout: () => void
    fetchMe: () => Promise<void>
    clearError: () => void
    setUser: (user: UserResponse) => void
}



