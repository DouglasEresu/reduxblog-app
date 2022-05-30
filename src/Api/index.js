const API_URL = process.env.REACT_APP_API_URL
const TOKEN = localStorage.getItem('access_token');


class Api {
    static async get(url) {
        return fetch(`${API_URL}${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        })
    }
    static async post(url, data) {
        return fetch(`${API_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify(data)
        })
    }
    static async put(url, data) {
        return fetch(`${API_URL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify(data)
        })
    }
    static async delete(url) {
        return fetch(`${API_URL}${url}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        })
    }

    // authentication
    static async authLogin(data) {
        return fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    static async authRegister(data) {
        return fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    
    
}

export default Api