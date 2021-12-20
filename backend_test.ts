const BASE_URL = "https://webentwicklungbe.herokuapp.com"

class Api {
    static async login(email: string, password: string): Promise<boolean> {
        const loginUrl = '${BASE_URL}/login';

        const response = await fetch(loginUrl,{
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email,password}),
        });
        return response.status === 200;
    }

    static async getExpenses(): Promise<any>{
        const expenseUrl = '${BASE_URL}/expenses';

        const response = await fetch(expenseUrl,{
            credentials: "include",
        })
        return response.json();
    }
}

export default Api;