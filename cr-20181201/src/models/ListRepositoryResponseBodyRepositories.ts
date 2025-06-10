// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryResponseBodyRepositories extends $dara.Model {
  /**
   * @remarks
   * The time when the repository was created.
   * 
   * @example
   * 1564153576000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Container Registry instance to which the repository belongs.
   * 
   * @example
   * cri-kmsiwlxxdcv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the repository was last modified.
   * 
   * @example
   * 1564153576000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The type of the repository building. Valid values:
   * 
   * *   `AUTO`: The repository is automatically built.
   * *   `MANUAL`: The repository is manually built.
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
   * crr-03cuozrsqhkw****
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
   * The name of the namespace to which the repository belongs.
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
   * *   `PUBLIC`
   * *   `PRIVATE`
   * 
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @remarks
   * The ID of the resource group to which the repository belongs.
   * 
   * @example
   * rg-acfm4n5kzyfxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The summary of the repository.
   * 
   * @example
   * test OK
   */
  summary?: string;
  /**
   * @remarks
   * Indicates whether the feature of image tag immutability is enabled for the repository.
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

