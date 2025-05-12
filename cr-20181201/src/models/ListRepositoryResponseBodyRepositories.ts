// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryResponseBodyRepositories extends $dara.Model {
  /**
   * @example
   * 1564153576000
   */
  createTime?: number;
  /**
   * @example
   * cri-kmsiwlxxdcv****
   */
  instanceId?: string;
  /**
   * @example
   * 1564153576000
   */
  modifiedTime?: number;
  /**
   * @example
   * MANUAL
   */
  repoBuildType?: string;
  /**
   * @example
   * crr-03cuozrsqhkw****
   */
  repoId?: string;
  /**
   * @example
   * test
   */
  repoName?: string;
  /**
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @example
   * rg-acfm4n5kzyfxxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * test OK
   */
  summary?: string;
  /**
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

