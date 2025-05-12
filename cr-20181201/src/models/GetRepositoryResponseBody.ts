// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepositoryResponseBody extends $dara.Model {
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
   * The time when the repository was created.
   * 
   * @example
   * 1570759546000
   */
  createTime?: number;
  /**
   * @remarks
   * The details of the repository.
   * 
   * @example
   * test
   */
  detail?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The time when the repository was last modified.
   * 
   * @example
   * 1570759546100
   */
  modifiedTime?: number;
  /**
   * @remarks
   * Indicates how the repository was created. Valid values:
   * 
   * *   `MANUAL`: The repository was manually created.
   * *   `AUTO`: The repository was automatically created.
   * 
   * @example
   * MANUAL
   */
  repoBuildType?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * @example
   * crr-l5eoubonp0l****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The status of the repository.
   * 
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `PUBLIC`: public repository.
   * *   `PRIVATE`: private repository.
   * 
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 915E6734-3E50-4640-8DBA-126D2D94DE29
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The summary of the repository.
   * 
   * @example
   * Automatically created repository
   */
  summary?: string;
  /**
   * @remarks
   * Indicates whether the feature of image tag immutability is enabled. Valid values:
   * 
   * *   `true`: The feature of image tag immutability is enabled.
   * *   `false`: The feature of image tag immutability is disabled.
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

