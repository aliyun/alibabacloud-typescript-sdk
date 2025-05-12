// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRepoSyncTaskResponseBodySyncTasksImageFrom } from "./ListRepoSyncTaskResponseBodySyncTasksImageFrom";
import { ListRepoSyncTaskResponseBodySyncTasksImageTo } from "./ListRepoSyncTaskResponseBodySyncTasksImageTo";


export class ListRepoSyncTaskResponseBodySyncTasks extends $dara.Model {
  /**
   * @example
   * 1572839126000
   */
  createTime?: number;
  /**
   * @example
   * true
   */
  crossUser?: boolean;
  /**
   * @remarks
   * Indicates whether a custom synchronization link is used.
   * 
   * @example
   * true
   */
  customLink?: boolean;
  imageFrom?: ListRepoSyncTaskResponseBodySyncTasksImageFrom;
  imageTo?: ListRepoSyncTaskResponseBodySyncTasksImageTo;
  /**
   * @example
   * 1572839133000
   */
  modifedTime?: number;
  /**
   * @example
   * 15DEEB56-9271-4FDD-AC4D-C3A5CC2C****
   */
  syncBatchTaskId?: string;
  /**
   * @example
   * crsr-7lph66uloi6h****
   */
  syncRuleId?: string;
  /**
   * @example
   * rst-4kfd7fk6pohk****
   */
  syncTaskId?: string;
  /**
   * @example
   * true
   */
  syncTransAccelerate?: boolean;
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
   * The status of the synchronization task.
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
   * @example
   * PASSIVE
   */
  taskTrigger?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossUser: 'CrossUser',
      customLink: 'CustomLink',
      imageFrom: 'ImageFrom',
      imageTo: 'ImageTo',
      modifedTime: 'ModifedTime',
      syncBatchTaskId: 'SyncBatchTaskId',
      syncRuleId: 'SyncRuleId',
      syncTaskId: 'SyncTaskId',
      syncTransAccelerate: 'SyncTransAccelerate',
      taskIssue: 'TaskIssue',
      taskStatus: 'TaskStatus',
      taskTrigger: 'TaskTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      crossUser: 'boolean',
      customLink: 'boolean',
      imageFrom: ListRepoSyncTaskResponseBodySyncTasksImageFrom,
      imageTo: ListRepoSyncTaskResponseBodySyncTasksImageTo,
      modifedTime: 'number',
      syncBatchTaskId: 'string',
      syncRuleId: 'string',
      syncTaskId: 'string',
      syncTransAccelerate: 'boolean',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

