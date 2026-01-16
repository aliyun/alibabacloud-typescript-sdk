// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatStockOssCheckTaskRequest extends $dara.Model {
  bucketPrefixFilterConfig?: string;
  /**
   * @remarks
   * OSS buckets
   * 
   * @example
   * [{\\"Bucket\\":\\"bucket01-test\\",\\"Region\\":\\"cn-beijing\\"}]
   */
  buckets?: string;
  /**
   * @remarks
   * Callback ID
   * 
   * @example
   * 1751
   */
  callbackId?: string;
  /**
   * @remarks
   * Flag for deduplicating against previously detected tasks.
   * 
   * @example
   * true
   */
  distinctHistoryTasks?: boolean;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2023-12-18 10:08:00
   */
  endTime?: string;
  /**
   * @remarks
   * Execute date of scheduled task.
   * 
   * @example
   * 1
   */
  executeDate?: number;
  /**
   * @remarks
   * Execute time of scheduled task.
   * 
   * @example
   * 01:09:30-01:19:30
   */
  executeTime?: string;
  /**
   * @remarks
   * Freeze indicator
   * 
   * @example
   * true
   */
  freeze?: boolean;
  /**
   * @remarks
   * Freeze High-Risk Images
   * 
   * @example
   * true
   */
  freezeHighRisk1?: boolean;
  /**
   * @remarks
   * Freeze High-Risk Audio and Text
   * 
   * @example
   * true
   */
  freezeHighRisk2?: boolean;
  /**
   * @remarks
   * Freeze Medium-Risk Images
   * 
   * @example
   * true
   */
  freezeMediumRisk1?: boolean;
  /**
   * @remarks
   * Freeze Medium-Risk Audio and Text
   * 
   * @example
   * true
   */
  freezeMediumRisk2?: boolean;
  /**
   * @remarks
   * Freeze Restore Path
   * 
   * @example
   * test
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
   * Indicator for scheduled task.
   * 
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @remarks
   * Media type.
   * 
   * @example
   * 1
   */
  mediaType?: number;
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
   * Prefix filters
   * 
   * @example
   * dir1,dir2
   */
  prefixFilters?: string;
  /**
   * @remarks
   * The priority of the task.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * Referer.
   * 
   * @example
   * https://www.aliyun.com
   */
  referer?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The scan limit of the task.
   * 
   * @example
   * 10
   */
  scanLimit?: number;
  /**
   * @remarks
   * Indicator for scanning files without file type.
   * 
   * @example
   * true
   */
  scanNoFileType?: boolean;
  /**
   * @remarks
   * Scan resource type.
   * 
   * @example
   * 0
   */
  scanResourceType?: string;
  /**
   * @remarks
   * The code of scan service.
   * 
   * @example
   * baselineCheck
   */
  scanService?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2023-12-17 10:08:00
   */
  startTime?: string;
  /**
   * @remarks
   * Task Cycle
   * 
   * @example
   * 0
   */
  taskCycle?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * image task 20240709101602004
   */
  taskName?: string;
  /**
   * @remarks
   * Task type.
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

