// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigBucketPrefixFilterConfigValue } from "./ConfigBucketPrefixFilterConfigValue";


export class GetOssCheckTaskInfoResponseBodyConfigScanServiceInfos extends $dara.Model {
  /**
   * @example
   * oss_baselineCheck
   */
  copyFrom?: string;
  /**
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @example
   * oss_baselineCheck
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

export class GetOssCheckTaskInfoResponseBodyConfigUserFreezeConfig extends $dara.Model {
  /**
   * @example
   * test
   */
  freezeRestorePath?: string;
  /**
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

export class GetOssCheckTaskInfoResponseBodyConfig extends $dara.Model {
  bucketPrefixFilterConfig?: { [key: string]: ConfigBucketPrefixFilterConfigValue };
  /**
   * @example
   * 188
   */
  callbackId?: number;
  /**
   * @example
   * true
   */
  distinctHistoryTasks?: boolean;
  /**
   * @example
   * 2025-07-09 10:30:00
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @example
   * 2025-07-09 10:30:00
   */
  executeTime?: string;
  /**
   * @example
   * true
   */
  freeze?: boolean;
  /**
   * @example
   * true
   */
  freezeHighRisk1?: boolean;
  /**
   * @example
   * true
   */
  freezeHighRisk2?: boolean;
  /**
   * @example
   * true
   */
  freezeMediumRisk1?: boolean;
  /**
   * @example
   * false
   */
  freezeMediumRisk2?: boolean;
  /**
   * @example
   * test
   */
  freezeRestorePath?: string;
  /**
   * @example
   * ACL
   */
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
  /**
   * @remarks
   * Referer。
   * 
   * @example
   * https://www.aliyun.com/
   */
  referer?: string;
  /**
   * @example
   * 100
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
  scanServiceInfos?: GetOssCheckTaskInfoResponseBodyConfigScanServiceInfos[];
  /**
   * @example
   * 2023-08-21 16:08:38
   */
  startTime?: string;
  /**
   * @example
   * 1
   */
  taskCycle?: number;
  userFreezeConfig?: GetOssCheckTaskInfoResponseBodyConfigUserFreezeConfig;
  static names(): { [key: string]: string } {
    return {
      bucketPrefixFilterConfig: 'BucketPrefixFilterConfig',
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
      bucketPrefixFilterConfig: { 'type': 'map', 'keyType': 'string', 'valueType': ConfigBucketPrefixFilterConfigValue },
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
      scanServiceInfos: { 'type': 'array', 'itemType': GetOssCheckTaskInfoResponseBodyConfigScanServiceInfos },
      startTime: 'string',
      taskCycle: 'number',
      userFreezeConfig: GetOssCheckTaskInfoResponseBodyConfigUserFreezeConfig,
    };
  }

  validate() {
    if(this.bucketPrefixFilterConfig) {
      $dara.Model.validateMap(this.bucketPrefixFilterConfig);
    }
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

export class GetOssCheckTaskInfoResponseBody extends $dara.Model {
  /**
   * @example
   * [{\\"Bucket\\":\\"aileshijie\\",\\"Region\\":\\"cn-hangzhou\\"}]
   */
  buckets?: string;
  config?: GetOssCheckTaskInfoResponseBodyConfig;
  /**
   * @example
   * 2025-07-09 10:30:00
   */
  endTime?: string;
  /**
   * @example
   * 56
   */
  finishNum?: number;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * 2025-07-09 10:30:00
   */
  lastExecuteDate?: string;
  /**
   * @example
   * 1
   */
  mediaType?: number;
  /**
   * @example
   * 2025-07-08 10:30:00
   */
  nextExecuteDate?: string;
  /**
   * @example
   * 100
   */
  objectNum?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  searchNum?: number;
  /**
   * @example
   * 2023-08-21 16:08:38
   */
  startTime?: string;
  /**
   * @example
   * Success
   */
  status?: number;
  /**
   * @example
   * xxxx-xxx
   */
  taskId?: string;
  taskName?: string;
  /**
   * @example
   * increment
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
      requestId: 'RequestId',
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
      config: GetOssCheckTaskInfoResponseBodyConfig,
      endTime: 'string',
      finishNum: 'number',
      isInc: 'boolean',
      lastExecuteDate: 'string',
      mediaType: 'number',
      nextExecuteDate: 'string',
      objectNum: 'number',
      requestId: 'string',
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

