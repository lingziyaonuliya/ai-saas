import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ERROR handle
export const handleError = (error: unknown) => {
  if(error instanceof Error) {
    console.log(error.message);
    throw new Error(`Error: ${error.message}`)
  } else if (typeof error === "string") {
    console.log(error);
    throw new Error(`Error: ${error}`)
  } else {
    console.log(error);
    throw new Error(`Unknow error: ${JSON.stringify(error)}`)
  }
}


