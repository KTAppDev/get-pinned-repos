
declare module '@kentaylorappdev/get-pinned-repos' {
  type RepoInfo_v2 = {
    repo: string;
    description: string;
    languages: string;
    stars: number;
  };
  type RepoInfo_v1 = {
    repo: string;
  };
  type PinnedRepos_v2 = RepoInfo_v2[];
  type PinnedRepos_v1 = RepoInfo_v1[];

  export function getPinnedRepos_v2(username: string): Promise<PinnedRepos_v2>;
  export function getPinnedRepos(username: string): Promise<PinnedRepos_v1>;
}

