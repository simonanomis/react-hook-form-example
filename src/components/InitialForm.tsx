import React, {useState} from 'react';
import Header from "./Header";
import {useForm} from "react-hook-form";
import './Header.css'

export function InitialForm() {
    const {register, handleSubmit } = useForm();
    const [data, setData] = useState("")
    return (
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <Header />
            <input {...register("firstName")} placeholder="First Name"/>
            <input {...register("lastName")} placeholder="Last Name"/>
            <select {...register("category")}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
            </select>
            <textarea {...register("aboutYou")} placeholder="About You"/>
            <p>{data}</p>
            <input type="submit"/>
        </form>
    );
}