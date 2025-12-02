// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos extends $dara.Model {
  /**
   * @remarks
   * Primary service.
   * 
   * @example
   * baselineCheck
   */
  copyFrom?: string;
  /**
   * @remarks
   * Whether to copy.
   * 
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * baselineCheck_01
   */
  serviceCode?: string;
  /**
   * @remarks
   * Service name.
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
   * Storage path for transfer
   * 
   * @example
   * /backup
   */
  freezeRestorePath?: string;
  /**
   * @remarks
   * Freeze type
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
   * Callback notification ID
   * 
   * @example
   * 3942
   */
  callbackId?: number;
  /**
   * @remarks
   * Whether to deduplicate historical detected tasks.
   * 
   * @example
   * false
   */
  distinctHistoryTasks?: boolean;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 2024-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @remarks
   * Scheduled task execution date.
   * 
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @remarks
   * Scheduled task expected execution time.
   * 
   * @example
   * 02:00:00
   */
  executeTime?: string;
  /**
   * @remarks
   * Whether to freeze
   * 
   * @example
   * false
   */
  freeze?: boolean;
  /**
   * @remarks
   * Freeze high-risk images
   * 
   * @example
   * true
   */
  freezeHighRisk1?: boolean;
  /**
   * @remarks
   * Freeze high-risk audio and text
   * 
   * @example
   * true
   */
  freezeHighRisk2?: boolean;
  /**
   * @remarks
   * Freeze medium-risk images
   * 
   * @example
   * true
   */
  freezeMediumRisk1?: boolean;
  /**
   * @remarks
   * Freeze medium-risk audio and text
   * 
   * @example
   * true
   */
  freezeMediumRisk2?: boolean;
  /**
   * @remarks
   * Storage path for transfer
   * 
   * @example
   * /backup
   */
  freezeRestorePath?: string;
  /**
   * @remarks
   * Freeze type
   * 
   * @example
   * ACL
   */
  freezeType?: string;
  /**
   * @remarks
   * Prefix filter type.
   * 
   * @example
   * all
   */
  prefixFilterType?: string;
  /**
   * @remarks
   * Prefixes.
   */
  prefixFilters?: string[];
  /**
   * @remarks
   * Priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * Referer
   * 
   * @example
   * *
   */
  referer?: string;
  /**
   * @remarks
   * Scan limit quantity.
   * 
   * @example
   * 10
   */
  scanLimit?: number;
  /**
   * @remarks
   * Whether to scan images without file extensions.
   * 
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @remarks
   * Scanned file type.
   * 
   * @example
   * 0
   */
  scanResourceType?: number;
  /**
   * @remarks
   * Scan service code
   */
  scanService?: string[];
  /**
   * @remarks
   * Scan service information
   */
  scanServiceInfos?: GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos[];
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 2023-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @remarks
   * Scheduling date.
   * 
   * @example
   * 0
   */
  taskCycle?: number;
  /**
   * @remarks
   * Manual freeze configuration
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
   * Storage space.
   * 
   * @example
   * tmp
   */
  buckets?: string;
  /**
   * @remarks
   * Configuration items.
   */
  config?: GetStockOssCheckTasksListResponseBodyItemsConfig;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 2024-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @remarks
   * Number of completed tasks.
   * 
   * @example
   * 2
   */
  finishNum?: number;
  /**
   * @remarks
   * Whether it is a scheduled scan task
   * 
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @remarks
   * Next execution time of the scheduled task
   * 
   * @example
   * 02:00:00
   */
  lastExecuteDate?: string;
  /**
   * @remarks
   * Media type.
   * 
   * @example
   * video
   */
  mediaType?: number;
  /**
   * @remarks
   * Last execution time of the scheduled task
   * 
   * @example
   * 02:00:00
   */
  nextExecuteDate?: string;
  /**
   * @remarks
   * Total number of files in the bucket
   * 
   * @example
   * 10
   */
  objectNum?: number;
  /**
   * @remarks
   * Number of scan tasks.
   * 
   * @example
   * 10
   */
  searchNum?: number;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 2023-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @remarks
   * Task status.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * P_XHDUS
   */
  taskId?: string;
  /**
   * @remarks
   * Task name.
   * 
   * @example
   * 图片定时任务20231205135716797
   */
  taskName?: string;
  /**
   * @remarks
   * Task type
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Data of the current page.
   */
  items?: GetStockOssCheckTasksListResponseBodyItems[];
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Backend-assigned ID used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
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

