// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGitRepositoriesResponseBodyGitRepos extends $dara.Model {
  /**
   * @example
   * Test secret parameter for vulnerability testing - 1757298077.453695
   */
  description?: string;
  /**
   * @example
   * aliyun/repo
   */
  fullName?: string;
  /**
   * @example
   * https://github.com/alibaba/fastjson
   */
  htmlUrl?: string;
  /**
   * @example
   * False
   */
  isPrivate?: boolean;
  /**
   * @example
   * 22351123
   */
  repoId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fullName: 'FullName',
      htmlUrl: 'HtmlUrl',
      isPrivate: 'IsPrivate',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fullName: 'string',
      htmlUrl: 'string',
      isPrivate: 'boolean',
      repoId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGitRepositoriesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  gitRepos?: ListGitRepositoriesResponseBodyGitRepos[];
  /**
   * @example
   * DBA6E6C8-F75D-41DE-AFF5-1FA03F551CA3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      gitRepos: 'GitRepos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      gitRepos: { 'type': 'array', 'itemType': ListGitRepositoriesResponseBodyGitRepos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gitRepos)) {
      $dara.Model.validateArray(this.gitRepos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

