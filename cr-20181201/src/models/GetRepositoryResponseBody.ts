// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The creation time, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1570759546000
   */
  createTime?: number;
  /**
   * @remarks
   * The detailed information.
   * 
   * @example
   * test
   */
  detail?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
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
   * The last modification time, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1570759546100
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The repository build type. Valid values:
   * 
   * - `MANUAL`: manually triggered build.
   * 
   * - `AUTO`: automatically triggered build.
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
   * crr-l5eoubonp0l****
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
   * The namespace name.
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
   * - `PUBLIC`: public repository.
   * 
   * - `PRIVATE`: private repository.
   * 
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 915E6734-3E50-4640-8DBA-126D2D94DE29
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The summary information.
   * 
   * @example
   * Automatically created repository
   */
  summary?: string;
  /**
   * @remarks
   * The image tag immutability setting. Valid values:
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      detail: 'Detail',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      repoBuildType: 'RepoBuildType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      detail: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      repoBuildType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      requestId: 'string',
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

