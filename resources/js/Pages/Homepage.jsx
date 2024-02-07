import { Head } from "@inertiajs/react";
import React from "react";
import Hero from "@/Components/Hero";

function Homepage(props) {
    return (
        <>
            <Head title={props.title} />
                <Hero />
        </>
    );
}

export default Homepage;
