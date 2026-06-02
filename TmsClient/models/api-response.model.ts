import { Temporal } from "@js-temporal/polyfill";

export type ApiResponse<T> =
| { status: "loading" }
| { status: "success"; data: T; fetchedAt: Temporal.Instant }
| { status: "error"; message: string; statusCode: number }
| { status: "failed"; message: string; statusCode: number };

export function renderResponse<T>(
    response: ApiResponse<T>,
    formatter:(data: T) => string,
): string {
    switch (response.status) {
    case "loading":
      return `${response.status}`;
    case "success":
      return `${response.status}`;
    case "error":
      return `${response.status}`;
    case "failed":
      return `${response.status}`;
    default: {
      const _check: never = response;
      throw new Error(`Unhandled status: ${JSON.stringify(_check)}`);
    }
}
}
