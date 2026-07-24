// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The primary service.
   * 
   * @example
   * baselineCheck
   */
  copyFrom?: string;
  /**
   * @remarks
   * Indicates whether the service is a copy.
   * 
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * baselineCheck_01
   */
  serviceCode?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * 通用基线检测
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      copyFrom: 'CopyFrom',
      isCopy: 'IsCopy',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyFrom: 'string',
      isCopy: 'boolean',
      serviceCode: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponseBodyItemsConfigUserFreezeConfig extends $dara.Model {
  /**
   * @remarks
   * The transfer path.
   * 
   * @example
   * /backup
   */
  freezeRestorePath?: string;
  /**
   * @remarks
   * The freeze type.
   * 
   * @example
   * ACL
   */
  freezeType?: string;
  static names(): { [key: string]: string } {
    return {
      freezeRestorePath: 'FreezeRestorePath',
      freezeType: 'FreezeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freezeRestorePath: 'string',
      freezeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponseBodyItemsConfig extends $dara.Model {
  /**
   * @remarks
   * The callback notification ID.
   * 
   * @example
   * 3942
   */
  callbackId?: number;
  /**
   * @remarks
   * Specifies whether to deduplicate historically scanned tasks.
   * 
   * @example
   * false
   */
  distinctHistoryTasks?: boolean;
  /**
   * @remarks
   * The end time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @remarks
   * The execution date of the scheduled task.
   * 
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @remarks
   * The expected execution time of the scheduled task. Format: HH:mm:ss.
   * 
   * @example
   * 02:00:00
   */
  executeTime?: string;
  /**
   * @remarks
   * Specifies whether to freeze files.
   * 
   * @example
   * false
   */
  freeze?: boolean;
  /**
   * @remarks
   * Specifies whether to freeze high-risk images.
   * 
   * @example
   * true
   */
  freezeHighRisk1?: boolean;
  /**
   * @remarks
   * Specifies whether to freeze high-risk audio and text.
   * 
   * @example
   * true
   */
  freezeHighRisk2?: boolean;
  /**
   * @remarks
   * Specifies whether to freeze medium-risk images.
   * 
   * @example
   * true
   */
  freezeMediumRisk1?: boolean;
  /**
   * @remarks
   * Specifies whether to freeze medium-risk audio and text.
   * 
   * @example
   * true
   */
  freezeMediumRisk2?: boolean;
  /**
   * @remarks
   * The transfer path.
   * 
   * @example
   * /backup
   */
  freezeRestorePath?: string;
  /**
   * @remarks
   * The freeze type.
   * 
   * @example
   * ACL
   */
  freezeType?: string;
  /**
   * @remarks
   * The prefix filter type.
   * 
   * @example
   * all
   */
  prefixFilterType?: string;
  /**
   * @remarks
   * The prefix.
   */
  prefixFilters?: string[];
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * Referer。
   * 
   * @example
   * *
   */
  referer?: string;
  /**
   * @remarks
   * The maximum number of files to scan.
   * 
   * @example
   * 10
   */
  scanLimit?: number;
  /**
   * @remarks
   * Specifies whether to scan images without file name extensions.
   * 
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @remarks
   * The type of files to scan.
   * 
   * @example
   * 0
   */
  scanResourceType?: number;
  /**
   * @remarks
   * The scan service code.
   */
  scanService?: string[];
  /**
   * @remarks
   * The scan service information.
   */
  scanServiceInfos?: GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos[];
  /**
   * @remarks
   * The start time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @remarks
   * The scheduling date.
   * 
   * @example
   * 0
   */
  taskCycle?: number;
  /**
   * @remarks
   * The manual freeze configuration.
   */
  userFreezeConfig?: GetStockOssCheckTasksListResponseBodyItemsConfigUserFreezeConfig;
  static names(): { [key: string]: string } {
    return {
      callbackId: 'CallbackId',
      distinctHistoryTasks: 'DistinctHistoryTasks',
      endTime: 'EndTime',
      executeDate: 'ExecuteDate',
      executeTime: 'ExecuteTime',
      freeze: 'Freeze',
      freezeHighRisk1: 'FreezeHighRisk1',
      freezeHighRisk2: 'FreezeHighRisk2',
      freezeMediumRisk1: 'FreezeMediumRisk1',
      freezeMediumRisk2: 'FreezeMediumRisk2',
      freezeRestorePath: 'FreezeRestorePath',
      freezeType: 'FreezeType',
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
      priority: 'Priority',
      referer: 'Referer',
      scanLimit: 'ScanLimit',
      scanNoFileType: 'ScanNoFileType',
      scanResourceType: 'ScanResourceType',
      scanService: 'ScanService',
      scanServiceInfos: 'ScanServiceInfos',
      startTime: 'StartTime',
      taskCycle: 'TaskCycle',
      userFreezeConfig: 'UserFreezeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackId: 'number',
      distinctHistoryTasks: 'boolean',
      endTime: 'string',
      executeDate: 'number',
      executeTime: 'string',
      freeze: 'boolean',
      freezeHighRisk1: 'boolean',
      freezeHighRisk2: 'boolean',
      freezeMediumRisk1: 'boolean',
      freezeMediumRisk2: 'boolean',
      freezeRestorePath: 'string',
      freezeType: 'string',
      prefixFilterType: 'string',
      prefixFilters: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      referer: 'string',
      scanLimit: 'number',
      scanNoFileType: 'boolean',
      scanResourceType: 'number',
      scanService: { 'type': 'array', 'itemType': 'string' },
      scanServiceInfos: { 'type': 'array', 'itemType': GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos },
      startTime: 'string',
      taskCycle: 'number',
      userFreezeConfig: GetStockOssCheckTasksListResponseBodyItemsConfigUserFreezeConfig,
    };
  }

  validate() {
    if(Array.isArray(this.prefixFilters)) {
      $dara.Model.validateArray(this.prefixFilters);
    }
    if(Array.isArray(this.scanService)) {
      $dara.Model.validateArray(this.scanService);
    }
    if(Array.isArray(this.scanServiceInfos)) {
      $dara.Model.validateArray(this.scanServiceInfos);
    }
    if(this.userFreezeConfig && typeof (this.userFreezeConfig as any).validate === 'function') {
      (this.userFreezeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * tmp
   */
  buckets?: string;
  /**
   * @remarks
   * The configuration item.
   */
  config?: GetStockOssCheckTasksListResponseBodyItemsConfig;
  /**
   * @remarks
   * The end time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @remarks
   * The number of completed tasks.
   * 
   * @example
   * 2
   */
  finishNum?: number;
  /**
   * @remarks
   * Indicates whether the task is a scheduled scan task.
   * 
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @remarks
   * The next execution time of the scheduled task. Format: HH:mm:ss.
   * 
   * @example
   * 02:00:00
   */
  lastExecuteDate?: string;
  /**
   * @remarks
   * The media asset type.
   * 
   * @example
   * video
   */
  mediaType?: number;
  /**
   * @remarks
   * The last execution time of the scheduled task. Format: HH:mm:ss.
   * 
   * @example
   * 02:00:00
   */
  nextExecuteDate?: string;
  /**
   * @remarks
   * The total number of files in the bucket.
   * 
   * @example
   * 10
   */
  objectNum?: number;
  /**
   * @remarks
   * The number of scan tasks.
   * 
   * @example
   * 10
   */
  searchNum?: number;
  /**
   * @remarks
   * The start time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * P_XHDUS
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 图片定时任务20231205135716797
   */
  taskName?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      config: 'Config',
      endTime: 'EndTime',
      finishNum: 'FinishNum',
      isInc: 'IsInc',
      lastExecuteDate: 'LastExecuteDate',
      mediaType: 'MediaType',
      nextExecuteDate: 'NextExecuteDate',
      objectNum: 'ObjectNum',
      searchNum: 'SearchNum',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      config: GetStockOssCheckTasksListResponseBodyItemsConfig,
      endTime: 'string',
      finishNum: 'number',
      isInc: 'boolean',
      lastExecuteDate: 'string',
      mediaType: 'number',
      nextExecuteDate: 'string',
      objectNum: 'number',
      searchNum: 'number',
      startTime: 'string',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStockOssCheckTasksListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data on the current page.
   */
  items?: GetStockOssCheckTasksListResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': GetStockOssCheckTasksListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

