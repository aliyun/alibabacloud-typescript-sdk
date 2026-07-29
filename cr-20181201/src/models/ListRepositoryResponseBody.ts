// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryResponseBodyRepositories extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1564153576000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-kmsiwlxxdcv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1564153576000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The repository build type. Valid values:
   * 
   * - `AUTO`: Automatically triggered build.
   * 
   * - `MANUAL`: Manually triggered build.
   * 
   * @example
   * MANUAL
   */
  repoBuildType?: string;
  /**
   * @remarks
   * The repository ID.
   * 
   * @example
   * crr-03cuozrsqhkw****
   */
  repoId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The repository namespace.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The repository status.
   * 
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @remarks
   * The repository type. Valid values:
   * 
   * - `PUBLIC`: Public.
   * 
   * - `PRIVATE`: Private.
   * 
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm4n5kzyfxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The summary information.
   * 
   * @example
   * test OK
   */
  summary?: string;
  /**
   * @remarks
   * The image tag immutability.
   * 
   * @example
   * true
   */
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      repoBuildType: 'RepoBuildType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      modifiedTime: 'number',
      repoBuildType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      resourceGroupId: 'string',
      summary: 'string',
      tagImmutability: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryResponseBody extends $dara.Model {
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
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  maxResults?: number;
  nextToken?: string;
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
  repositories?: ListRepositoryResponseBodyRepositories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5241C090-DA69-4B0F-8E3F-2F24FDE1110E
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
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
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repositories: { 'type': 'array', 'itemType': ListRepositoryResponseBodyRepositories },
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

