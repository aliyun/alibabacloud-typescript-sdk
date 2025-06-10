// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoSyncTaskResponseBodySyncTasksImageFrom extends $dara.Model {
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v0.1
   */
  imageTag?: string;
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
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
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
   * The namespace to which the repository belongs.
   * 
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

