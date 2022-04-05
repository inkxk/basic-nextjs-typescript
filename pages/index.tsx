import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { Data } from "../models/youtubes";

type Props = {
    data: Data;
};

export default function index({ data }: Props) {
    const { youtubes } = data;
    return (
        <div>
            <h1>code mobile</h1>
            <ul>
                {youtubes.map((item) => (
                    <li key={item.id}>
                        <div>{item.title}</div>
                        <span style={{ color: "gray" }}>{item.subtitle}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const url =
        "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods";
    const res = await fetch(url);
    const result = await res.json();
    const data: Data = result;
    return {
        props: {
            data,
        },
    };
};
