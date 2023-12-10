import { Octokit } from "octokit";

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const token = "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";

export interface User {
  avatar_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  bio: string | null;
  followers: number;
  following: number;
}

async function getUser(username: string): Promise<User> {
  const octokit = new Octokit({
    auth: token,
  });

  const response = await octokit.request("GET /users/{username}", {
    username: username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  console.log({ response });

  return response.data;
}

export { getUser };
