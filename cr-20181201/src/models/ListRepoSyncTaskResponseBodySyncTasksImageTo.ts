// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoSyncTaskResponseBodySyncTasksImageTo extends $dara.Model {
  /**
   * @example
   * v0.1
   */
  imageTag?: string;
  /**
   * @example
   * cri-k77rd2eo9zttneqo
   */
  instanceId?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
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
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

