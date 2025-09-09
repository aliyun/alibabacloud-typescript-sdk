// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAcrImageRepositoriesResponseBodyRepositories extends $dara.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the image was modified.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The namespace of the repository
   * 
   * @example
   * computenest
   */
  namespace?: string;
  /**
   * @remarks
   * The image repo ID.
   * 
   * @example
   * crr-3gqhkza0wbxxxxxx
   */
  repoId?: string;
  /**
   * @remarks
   * The image repo name.
   * 
   * @example
   * wordpress
   */
  repoName?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `Private`: a private repository
   * *   `Public`: a public repository
   * 
   * @example
   * Private
   */
  repoType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      namespace: 'Namespace',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoType: 'RepoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      namespace: 'string',
      repoId: 'string',
      repoName: 'string',
      repoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAcrImageRepositoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The images.
   */
  repositories?: ListAcrImageRepositoriesResponseBodyRepositories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4A145D8-6F6C-532A-9001-9730CDA27578
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      repositories: 'Repositories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      repositories: { 'type': 'array', 'itemType': ListAcrImageRepositoriesResponseBodyRepositories },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.repositories)) {
      $dara.Model.validateArray(this.repositories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

