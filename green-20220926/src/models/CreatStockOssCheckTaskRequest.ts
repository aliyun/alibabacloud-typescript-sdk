// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatStockOssCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The filter configuration for each bucket. The value can be parsed as a JSON map. The key is the bucket name, and the value is the filter configuration, which includes prefix/suffix filters and a list of filter strings.
   * 
   * @example
   * "{\\"test-bucket1\\":{\\"prefixFilterType\\":\\"include\\",\\"prefixFilters\\":[\\"test1\\"]},\\"test-bucket2\\":{\\"prefixFilterType\\":\\"exclude\\",\\"prefixFilters\\":[\\"test2\\"]}}"
   */
  bucketPrefixFilterConfig?: string;
  /**
   * @remarks
   * The storage buckets.
   * 
   * @example
   * [{\\"Bucket\\":\\"bucket01-test\\",\\"Region\\":\\"cn-beijing\\"}]
   */
  buckets?: string;
  /**
   * @remarks
   * The notification callback ID.
   * 
   * @example
   * 1751
   */
  callbackId?: string;
  /**
   * @remarks
   * Specifies whether to deduplicate against historically scanned tasks.
   * 
   * @example
   * true
   */
  distinctHistoryTasks?: boolean;
  /**
   * @remarks
   * The task end time. Format: `YYYY-MM-DD HH:mm:ss`.
   * 
   * @example
   * 2023-12-18 10:08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The execution date of the scheduled task. The value is in integer format.
   * 
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @remarks
   * The expected execution time of the scheduled task. Format: `HH:mm:ss-HH:mm:ss`.
   * 
   * @example
   * 01:09:30-01:19:30
   */
  executeTime?: string;
  /**
   * @remarks
   * Specifies whether to freeze files.
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
   * true
   */
  freezeMediumRisk2?: boolean;
  /**
   * @remarks
   * The path to which frozen files are transferred.
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
   * Specifies whether the task is a scheduled scan task.
   * 
   * @example
   * false
   */
  isInc?: boolean;
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
   * The prefix filter type.
   * 
   * @example
   * all
   */
  prefixFilterType?: string;
  /**
   * @remarks
   * The prefixes.
   * 
   * @example
   * dir1,dir2
   */
  prefixFilters?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * Referer。
   * 
   * @example
   * https://www.aliyun.com
   */
  referer?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
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
   * Specifies whether to scan images without file extensions.
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
  scanResourceType?: string;
  /**
   * @remarks
   * The scan service code.
   * 
   * @example
   * baselineCheck
   */
  scanService?: string;
  /**
   * @remarks
   * The task start time. Format: `YYYY-MM-DD HH:mm:ss`.
   * 
   * @example
   * 2023-12-17 10:08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The scheduling cycle.
   * 
   * @example
   * 0
   */
  taskCycle?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 图片任务 20240709101602004
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
      bucketPrefixFilterConfig: 'BucketPrefixFilterConfig',
      buckets: 'Buckets',
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
      isInc: 'IsInc',
      mediaType: 'MediaType',
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
      priority: 'Priority',
      referer: 'Referer',
      regionId: 'RegionId',
      scanLimit: 'ScanLimit',
      scanNoFileType: 'ScanNoFileType',
      scanResourceType: 'ScanResourceType',
      scanService: 'ScanService',
      startTime: 'StartTime',
      taskCycle: 'TaskCycle',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketPrefixFilterConfig: 'string',
      buckets: 'string',
      callbackId: 'string',
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
      isInc: 'boolean',
      mediaType: 'number',
      prefixFilterType: 'string',
      prefixFilters: 'string',
      priority: 'number',
      referer: 'string',
      regionId: 'string',
      scanLimit: 'number',
      scanNoFileType: 'boolean',
      scanResourceType: 'string',
      scanService: 'string',
      startTime: 'string',
      taskCycle: 'number',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

