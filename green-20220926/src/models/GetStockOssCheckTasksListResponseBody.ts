// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos extends $dara.Model {
  /**
   * @example
   * baselineCheck
   */
  copyFrom?: string;
  /**
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @example
   * baselineCheck_01
   */
  serviceCode?: string;
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
  freezeRestorePath?: string;
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
  callbackId?: number;
  /**
   * @example
   * false
   */
  distinctHistoryTasks?: boolean;
  /**
   * @example
   * 2024-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @example
   * 02:00:00
   */
  executeTime?: string;
  freeze?: boolean;
  freezeHighRisk1?: boolean;
  freezeHighRisk2?: boolean;
  freezeMediumRisk1?: boolean;
  freezeMediumRisk2?: boolean;
  freezeRestorePath?: string;
  freezeType?: string;
  /**
   * @example
   * all
   */
  prefixFilterType?: string;
  prefixFilters?: string[];
  /**
   * @example
   * 1
   */
  priority?: number;
  referer?: string;
  /**
   * @example
   * 10
   */
  scanLimit?: number;
  /**
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @example
   * 0
   */
  scanResourceType?: number;
  scanService?: string[];
  scanServiceInfos?: GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos[];
  /**
   * @example
   * 2023-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @example
   * 0
   */
  taskCycle?: number;
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
   * @example
   * tmp
   */
  buckets?: string;
  config?: GetStockOssCheckTasksListResponseBodyItemsConfig;
  /**
   * @example
   * 2024-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @example
   * 2
   */
  finishNum?: number;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * 02:00:00
   */
  lastExecuteDate?: string;
  /**
   * @example
   * video
   */
  mediaType?: number;
  /**
   * @example
   * 02:00:00
   */
  nextExecuteDate?: string;
  /**
   * @example
   * 10
   */
  objectNum?: number;
  /**
   * @example
   * 10
   */
  searchNum?: number;
  /**
   * @example
   * 2023-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @example
   * 4
   */
  status?: number;
  /**
   * @example
   * P_XHDUS
   */
  taskId?: string;
  taskName?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  items?: GetStockOssCheckTasksListResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
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

