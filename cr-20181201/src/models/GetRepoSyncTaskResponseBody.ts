// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoSyncTaskResponseBodyImageFrom extends $dara.Model {
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * master
   */
  imageTag?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-sgedpenzw80e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region.
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
   * The namespace name.
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

export class GetRepoSyncTaskResponseBodyImageTo extends $dara.Model {
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * master
   */
  imageTag?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-leqzomz5vijc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * eu-west-1
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
   * The namespace name.
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

export class GetRepoSyncTaskResponseBodyLayerTasks extends $dara.Model {
  /**
   * @remarks
   * The digest value of the artifact.
   * 
   * @example
   * sha256:36fb85fcb5e919cb60e782397a6be04201868fe7b38ef7669fc01caec1c8fc4e
   */
  artifactDigest?: string;
  /**
   * @remarks
   * The image digest value.
   * 
   * @example
   * sha256:36fb85fcb5e919cb60e782397a6be04201868fe7b38ef7669fc01caec1c8fc4e
   */
  digest?: string;
  /**
   * @remarks
   * The size.
   * 
   * @example
   * 23655489
   */
  size?: number;
  /**
   * @remarks
   * The synchronization layer task ID.
   * 
   * @example
   * rslt-074x4q20fx2d****
   */
  syncLayerTaskId?: string;
  /**
   * @remarks
   * The synchronized size.
   * 
   * @example
   * 23655489
   */
  syncedSize?: number;
  /**
   * @remarks
   * The task status.
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

export class GetRepoSyncTaskResponseBody extends $dara.Model {
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
   * Indicates whether the synchronization is cross-account.
   * 
   * @example
   * true
   */
  crossUser?: boolean;
  /**
   * @remarks
   * The source image.
   */
  imageFrom?: GetRepoSyncTaskResponseBodyImageFrom;
  /**
   * @remarks
   * The destination image.
   */
  imageTo?: GetRepoSyncTaskResponseBodyImageTo;
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
   * The list of image layer synchronization tasks.
   */
  layerTasks?: GetRepoSyncTaskResponseBodyLayerTasks[];
  /**
   * @remarks
   * The execution priority of the synchronization task. Synchronization tasks are executed in descending order of priority. Tasks with the same priority are executed in random order.
   * 
   * Valid values: 1 to 5.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The synchronization progress. Valid values:
   * 
   * - `0`: The synchronization has just started or failed.
   * 
   * - `1`: The synchronization succeeded.
   * 
   * @example
   * 1
   */
  progress?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6DEF8B0-5D45-46D6-867D-8C7FF0966B07
   */
  requestId?: string;
  /**
   * @remarks
   * The synchronization batch task ID.
   * 
   * @example
   * a9434731-95ef-4087-9cf4-369c8e90****
   */
  syncBatchTaskId?: string;
  /**
   * @remarks
   * The synchronization rule ID.
   * 
   * @example
   * crsr-cllro6ho3wne****
   */
  syncRuleId?: string;
  /**
   * @remarks
   * The synchronization task ID.
   * 
   * @example
   * rst-zxjkiv5oil6f****
   */
  syncTaskId?: string;
  /**
   * @remarks
   * Indicates whether transfer acceleration is enabled for synchronization.
   * 
   * @example
   * true
   */
  syncTransAccelerate?: boolean;
  /**
   * @remarks
   * The synchronized size, in bytes.
   * 
   * @example
   * 23655489
   */
  syncedSize?: number;
  /**
   * @remarks
   * The task failure information.
   * > When the synchronization task fails, this field returns information about the failure.
   * 
   * @example
   * NETWORK_ERROR
   */
  taskIssue?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * `PENDING`: The synchronization is pending.
   * 
   * `SYNCHRONIZING`: The synchronization is in progress.
   * 
   * `SUCCESS`: The synchronization succeeded.
   * 
   * `ERROR`: The synchronization failed.
   * 
   * `CANCELED`: The synchronization task is canceled.
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
   * @remarks
   * The trigger type of the synchronization task. Valid values:
   * 
   * `PASSIVE`: The synchronization task is automatically triggered.
   * 
   * `INITIATIVE`: The synchronization task is manually triggered.
   * 
   * @example
   * PASSIVE
   */
  taskTrigger?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      crossUser: 'CrossUser',
      imageFrom: 'ImageFrom',
      imageTo: 'ImageTo',
      isSuccess: 'IsSuccess',
      layerTasks: 'LayerTasks',
      priority: 'Priority',
      progress: 'Progress',
      requestId: 'RequestId',
      syncBatchTaskId: 'SyncBatchTaskId',
      syncRuleId: 'SyncRuleId',
      syncTaskId: 'SyncTaskId',
      syncTransAccelerate: 'SyncTransAccelerate',
      syncedSize: 'SyncedSize',
      taskIssue: 'TaskIssue',
      taskStatus: 'TaskStatus',
      taskTrigger: 'TaskTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      crossUser: 'boolean',
      imageFrom: GetRepoSyncTaskResponseBodyImageFrom,
      imageTo: GetRepoSyncTaskResponseBodyImageTo,
      isSuccess: 'boolean',
      layerTasks: { 'type': 'array', 'itemType': GetRepoSyncTaskResponseBodyLayerTasks },
      priority: 'number',
      progress: 'number',
      requestId: 'string',
      syncBatchTaskId: 'string',
      syncRuleId: 'string',
      syncTaskId: 'string',
      syncTransAccelerate: 'boolean',
      syncedSize: 'number',
      taskIssue: 'string',
      taskStatus: 'string',
      taskTrigger: 'string',
    };
  }

  validate() {
    if(this.imageFrom && typeof (this.imageFrom as any).validate === 'function') {
      (this.imageFrom as any).validate();
    }
    if(this.imageTo && typeof (this.imageTo as any).validate === 'function') {
      (this.imageTo as any).validate();
    }
    if(Array.isArray(this.layerTasks)) {
      $dara.Model.validateArray(this.layerTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

