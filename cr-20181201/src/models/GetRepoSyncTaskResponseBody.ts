// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRepoSyncTaskResponseBodyImageFrom } from "./GetRepoSyncTaskResponseBodyImageFrom";
import { GetRepoSyncTaskResponseBodyImageTo } from "./GetRepoSyncTaskResponseBodyImageTo";
import { GetRepoSyncTaskResponseBodyLayerTasks } from "./GetRepoSyncTaskResponseBodyLayerTasks";


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
   * Indicates whether the synchronization task is performed across Alibaba Cloud accounts.
   * 
   * @example
   * true
   */
  crossUser?: boolean;
  /**
   * @remarks
   * The source address of the image.
   */
  imageFrom?: GetRepoSyncTaskResponseBodyImageFrom;
  /**
   * @remarks
   * The destination address of the image.
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
   * The synchronization tasks for the image layer.
   */
  layerTasks?: GetRepoSyncTaskResponseBodyLayerTasks[];
  /**
   * @remarks
   * The synchronization progress. Valid values:
   * 
   * *   `0`: The synchronization starts or failed.
   * *   `1`: The synchronization is successful.
   * 
   * @example
   * 1
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A6DEF8B0-5D45-46D6-867D-8C7FF0966B07
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the synchronization task in which multiple images are synchronized at a time.
   * 
   * @example
   * a9434731-95ef-4087-9cf4-369c8e90****
   */
  syncBatchTaskId?: string;
  /**
   * @remarks
   * The ID of the synchronization rule.
   * 
   * @example
   * crsr-cllro6ho3wne****
   */
  syncRuleId?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * rst-zxjkiv5oil6f****
   */
  syncTaskId?: string;
  /**
   * @remarks
   * Indicates whether transfer acceleration is enabled in the synchronization process.
   * 
   * @example
   * true
   */
  syncTransAccelerate?: boolean;
  /**
   * @remarks
   * The size of the image layer that is synchronized. Unit: bytes.
   * 
   * @example
   * 23655489
   */
  syncedSize?: number;
  /**
   * @remarks
   * The error message that is returned if the synchronization task fails.
   * 
   * >  The system uses this parameter to return an error message if the synchronization task fails.
   * 
   * Valid values:
   * 
   * *   OSS_POLICY_UNAUTHORIZED: Container Registry is not granted permissions to use Object Storage Service (OSS).
   * *   TAG_CONFLICT: The destination repository contains an image that has the same tag as the source image, and image tag immutability is enabled for the destination repository.
   * *   UNSUPPORTED_FORMAT: The manifest and config formats of the image to be synchronized are not supported.
   * *   INTERNAL_ERROR: The synchronization task failed due to internal issues on the server.
   * *   NETWORK_ERROR: The synchronization task failed due to unstable network connection.
   * *   DATA_LENGTH_EXCEEDED: The manifest or config of the image is oversized.
   * 
   * @example
   * NETWORK_ERROR
   */
  taskIssue?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
   * @remarks
   * The policy that is used to trigger the synchronization task.
   * 
   * @example
   * null
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

