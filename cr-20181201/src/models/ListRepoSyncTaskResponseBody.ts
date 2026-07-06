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
   * The ID of the instance.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * The repository namespace.
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

export class ListRepoSyncTaskResponseBodySyncTasksImageTo extends $dara.Model {
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
   * The ID of the instance.
   * 
   * @example
   * cri-k77rd2eo9zttneqo
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shenzhen
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
   * The repository namespace.
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

export class ListRepoSyncTaskResponseBodySyncTasks extends $dara.Model {
  /**
   * @remarks
   * The creation time of the task.
   * 
   * @example
   * 1572839126000
   */
  createTime?: number;
  /**
   * @remarks
   * Whether the image is synchronized across accounts. Valid values:
   * 
   * - `true`: The image is synchronized across accounts.
   * 
   * - `false`: The image is synchronized within the same account.
   * 
   * Default value: `false`
   * 
   * @example
   * true
   */
  crossUser?: boolean;
  /**
   * @remarks
   * Whether a custom sync link is used.
   * 
   * @example
   * true
   */
  customLink?: boolean;
  /**
   * @remarks
   * The source image.
   */
  imageFrom?: ListRepoSyncTaskResponseBodySyncTasksImageFrom;
  /**
   * @remarks
   * The destination image.
   */
  imageTo?: ListRepoSyncTaskResponseBodySyncTasksImageTo;
  /**
   * @remarks
   * The ID of the custom sync link.
   */
  linkId?: string;
  /**
   * @remarks
   * This parameter is deprecated due to a typo. Use `ModifiedTime` instead.
   * 
   * @example
   * 1572839133000
   * 
   * @deprecated
   */
  modifedTime?: number;
  /**
   * @remarks
   * The modification time of the task.
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The ID of the batch sync task. This ID is the same as the sync record ID (`SyncRecordId`).
   * 
   * > If an image matches multiple sync rules, multiple sync tasks are generated. These tasks share the same `SyncBatchTaskId`.
   * 
   * @example
   * 9d8ac4f6-8138-4c15-a2e3-60624ad3****
   */
  syncBatchTaskId?: string;
  /**
   * @remarks
   * The ID of the sync rule.
   * 
   * @example
   * crsr-7lph66uloi6h****
   */
  syncRuleId?: string;
  /**
   * @remarks
   * The ID of the sync task.
   * 
   * @example
   * rst-4kfd7fk6pohk****
   */
  syncTaskId?: string;
  /**
   * @remarks
   * Whether transfer acceleration is enabled for the sync task.
   * 
   * @example
   * true
   */
  syncTransAccelerate?: boolean;
  /**
   * @remarks
   * The task failure information.
   * 
   * > If the sync task fails, this field returns details about the failure.
   * 
   * @example
   * NETWORK_ERROR
   */
  taskIssue?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * ERROR
   */
  taskStatus?: string;
  /**
   * @remarks
   * The trigger policy. Valid values:
   * 
   * - `PASSIVE`: The sync task is automatically triggered.
   * 
   * - `INITIATIVE`: The sync task is manually triggered.
   * 
   * Default value: `PASSIVE`
   * 
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
      linkId: 'LinkId',
      modifedTime: 'ModifedTime',
      modifiedTime: 'ModifiedTime',
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
      linkId: 'string',
      modifedTime: 'number',
      modifiedTime: 'number',
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

export class ListRepoSyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Whether the request was successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7640819A-FB5B-4E25-A227-97717F62****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of sync tasks.
   */
  syncTasks?: ListRepoSyncTaskResponseBodySyncTasks[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      syncTasks: 'SyncTasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      syncTasks: { 'type': 'array', 'itemType': ListRepoSyncTaskResponseBodySyncTasks },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.syncTasks)) {
      $dara.Model.validateArray(this.syncTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

