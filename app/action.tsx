"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
    const reponse = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);
    const data = await reponse.json();
    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))//Sending a batch of cards instead of a page of cards to fix the infinite stagger issue
};//This is the new nextjs server action which eliminates the need of a middleware