// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoSyncTaskResponseBodyLayerTasks extends $dara.Model {
  /**
   * @remarks
   * The digest of the artifact.
   * 
   * @example
   * sha256:36fb85fcb5e919cb60e782397a6be04201868fe7b38ef7669fc01caec1c8fc4e
   */
  artifactDigest?: string;
  /**
   * @remarks
   * The digest of the image layer.
   * 
   * @example
   * sha256:36fb85fcb5e919cb60e782397a6be04201868fe7b38ef7669fc01caec1c8fc4e
   */
  digest?: string;
  /**
   * @remarks
   * The size of synchronized image layers.
   * 
   * @example
   * 23655489
   */
  size?: number;
  /**
   * @remarks
   * The ID of the synchronization task for the image layer.
   * 
   * @example
   * rslt-074x4q20fx2d****
   */
  syncLayerTaskId?: string;
  /**
   * @remarks
   * The size of the image layer that is synchronized.
   * 
   * @example
   * 23655489
   */
  syncedSize?: number;
  /**
   * @remarks
   * The status of the synchronization task. Valid values:
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      artifactDigest: 'ArtifactDigest',
      digest: 'Digest',
      size: 'Size',
      syncLayerTaskId: 'SyncLayerTaskId',
      syncedSize: 'SyncedSize',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactDigest: 'string',
      digest: 'string',
      size: 'number',
      syncLayerTaskId: 'string',
      syncedSize: 'number',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

