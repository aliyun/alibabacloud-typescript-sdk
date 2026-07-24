// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePreCheckRequest extends $dara.Model {
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
   * The OSS buckets.
   * 
   * @example
   * [{\\"Bucket\\":\\"bucket01-test\\",\\"Region\\":\\"cn-beijing\\"}]
   */
  buckets?: string;
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
   * The task end time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-12-18 10:08:00
   */
  endTime?: string;
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
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The maximum number of items to scan.
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
   * The scan service code.
   * 
   * @example
   * baselineCheck
   */
  scanService?: string;
  /**
   * @remarks
   * The task start time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-12-17 10:08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 图片任务 20240709101602004
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketPrefixFilterConfig: 'BucketPrefixFilterConfig',
      buckets: 'Buckets',
      distinctHistoryTasks: 'DistinctHistoryTasks',
      endTime: 'EndTime',
      isInc: 'IsInc',
      mediaType: 'MediaType',
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
      priority: 'Priority',
      regionId: 'RegionId',
      scanLimit: 'ScanLimit',
      scanNoFileType: 'ScanNoFileType',
      scanService: 'ScanService',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketPrefixFilterConfig: 'string',
      buckets: 'string',
      distinctHistoryTasks: 'boolean',
      endTime: 'string',
      isInc: 'boolean',
      mediaType: 'number',
      prefixFilterType: 'string',
      prefixFilters: 'string',
      priority: 'number',
      regionId: 'string',
      scanLimit: 'number',
      scanNoFileType: 'boolean',
      scanService: 'string',
      startTime: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

