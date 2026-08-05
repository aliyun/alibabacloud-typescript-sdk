// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigBucketPrefixFilterConfigValue } from "./ConfigBucketPrefixFilterConfigValue";


export class GetOssCheckTaskInfoResponseBodyConfigScanServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The primary service.
   * 
   * @example
   * oss_baselineCheck
   */
  copyFrom?: string;
  /**
   * @remarks
   * Indicates whether the service is copied.
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
   * oss_baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Content moderation.
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

export class GetOssCheckTaskInfoResponseBodyConfigUserFreezeConfig extends $dara.Model {
  /**
   * @remarks
   * The transfer directory.
   * 
   * @example
   * test
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

export class GetOssCheckTaskInfoResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The filter configuration for each bucket. The key is the bucket name, and the value is the filter configuration, which includes prefix/suffix filters and filter character lists.
   */
  bucketPrefixFilterConfig?: { [key: string]: ConfigBucketPrefixFilterConfigValue };
  /**
   * @remarks
   * The callback notification ID.
   * 
   * @example
   * 188
   */
  callbackId?: number;
  /**
   * @remarks
   * Indicates whether to deduplicate previously scanned tasks.
   * 
   * @example
   * true
   */
  distinctHistoryTasks?: boolean;
  /**
   * @remarks
   * The end time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-07-09 10:30:00
   */
  endTime?: string;
  /**
   * @remarks
   * The execution date of the scheduled task. The value is an integer in the format of a single digit, such as 1.
   * 
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @remarks
   * The expected execution time of the scheduled task. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-07-09 10:30:00
   */
  executeTime?: string;
  /**
   * @remarks
   * Indicates whether to freeze.
   * 
   * @example
   * true
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
   * false
   */
  freezeMediumRisk2?: boolean;
  /**
   * @remarks
   * The transfer path.
   * 
   * @example
   * test
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
   * The prefixes.
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
   * https://www.aliyun.com/
   */
  referer?: string;
  /**
   * @remarks
   * The scan limit quantity.
   * 
   * @example
   * 100
   */
  scanLimit?: number;
  /**
   * @remarks
   * Indicates whether to scan images without file extensions.
   * 
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @remarks
   * The file type to scan.
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
  scanServiceInfos?: GetOssCheckTaskInfoResponseBodyConfigScanServiceInfos[];
  /**
   * @remarks
   * The start time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-08-21 16:08:38
   */
  startTime?: string;
  /**
   * @remarks
   * The scheduling date.
   * 
   * @example
   * 1
   */
  taskCycle?: number;
  /**
   * @remarks
   * The user freeze configuration.
   */
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
   * @remarks
   * The storage buckets.
   * 
   * @example
   * [{\\"Bucket\\":\\"aileshijie\\",\\"Region\\":\\"cn-hangzhou\\"}]
   */
  buckets?: string;
  /**
   * @remarks
   * The configuration item.
   */
  config?: GetOssCheckTaskInfoResponseBodyConfig;
  /**
   * @remarks
   * The end time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-07-09 10:30:00
   */
  endTime?: string;
  /**
   * @remarks
   * The number of completed tasks.
   * 
   * @example
   * 56
   */
  finishNum?: number;
  /**
   * @remarks
   * Indicates whether this is a scheduled scan task.
   * 
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @remarks
   * The next execution time of the scheduled task. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-07-09 10:30:00
   */
  lastExecuteDate?: string;
  /**
   * @remarks
   * The media asset type.
   * 
   * @example
   * 1
   */
  mediaType?: number;
  /**
   * @remarks
   * The last execution time of the scheduled task. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-07-08 10:30:00
   */
  nextExecuteDate?: string;
  /**
   * @remarks
   * The total number of files in the bucket.
   * 
   * @example
   * 100
   */
  objectNum?: number;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of scan tasks.
   * 
   * @example
   * 100
   */
  searchNum?: number;
  /**
   * @remarks
   * The start time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-08-21 16:08:38
   */
  startTime?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Success
   */
  status?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxx-xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Document stock task 20240914100517757
   */
  taskName?: string;
  /**
   * @remarks
   * The task type.
   * 
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

