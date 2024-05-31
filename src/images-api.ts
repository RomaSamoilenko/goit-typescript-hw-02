import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ImageData } from "./tipes";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const fetchImagesWithTopic = async (
  topic: string = "",
  page: number | null
): Promise<ImageData> => {
  const ACCESS_KEY: string = "zOoPv1CIH5Ednf3Oj9z9CBkKKW3v9ktwu9Ld2P1fGbs";

  const option = {
    params: {
      client_id: ACCESS_KEY,
      query: topic,
      orientation: "landscape",
      page: page,
      per_page: 12,
    },
  };

  try {
    const response: AxiosResponse<ImageData> = await instance.get(
      "/search/photos/",
      option
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch images from Unsplash API");
  }
};