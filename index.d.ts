
declare module '@kentaylorappdev/get-pinned-repos' {
  type RepoInfo = {
    repo: string;
    description: string;
    languages: string;
  };

  type PinnedRepos = RepoInfo[];

  export function getPinnedRepos(username: string): Promise<PinnedRepos>;
}

