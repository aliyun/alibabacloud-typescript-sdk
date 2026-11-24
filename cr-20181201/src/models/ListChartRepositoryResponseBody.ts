// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChartRepositoryResponseBodyRepositories extends $dara.Model {
  /**
   * @remarks
   * The time when the repository was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1571926644000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the repository was last modified. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1571930329000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The repository ID.
   * 
   * @example
   * crcr-gpsu7b8chmxk****
   */
  repoId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the repository.
   * 
   * @example
   * ns1
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The status of the repository. Valid values:
   * 
   * - `NORMAL`: Normal.
   * 
   * - `DELETING`: The repository is being deleted.
   * 
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * - `PRIVATE`: a private repository.
   * - `PUBLIC`: a public repository.
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2ikd5rxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The summary of the repository.
   * 
   * @example
   * test
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      modifiedTime: 'number',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      resourceGroupId: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of repositories.
   */
  repositories?: ListChartRepositoryResponseBodyRepositories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AB62FB8-6873-4032-8515-4578D27523B7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repositories: 'Repositories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      repositories: { 'type': 'array', 'itemType': ListChartRepositoryResponseBodyRepositories },
      requestId: 'string',
      totalCount: 'string',
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

