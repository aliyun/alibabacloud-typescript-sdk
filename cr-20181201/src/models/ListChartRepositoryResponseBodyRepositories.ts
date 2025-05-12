// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChartRepositoryResponseBodyRepositories extends $dara.Model {
  /**
   * @remarks
   * The time when the repository was created.
   * 
   * @example
   * 1571926644000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the repository was last modified.
   * 
   * @example
   * 1571930329000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * @example
   * crcr-gpsu7b8chmxk****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * ns1
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The status of the repository. Valid values:
   * 
   * *   `NORMAL`: The repository is normal.
   * *   `DELETING`: The repository is being deleted.
   * 
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `PRIVATE`: a private repository
   * *   `PUBLIC`: a public repository
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * The ID of the resource group to which the repository belongs.
   * 
   * @example
   * rg-aek2ikd5rxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The summary about the repository.
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

