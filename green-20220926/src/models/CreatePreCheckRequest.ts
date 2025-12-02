// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePreCheckRequest extends $dara.Model {
  /**
   * @remarks
   * Buckets.
   * 
   * @example
   * [{\\"Bucket\\":\\"bucket01-test\\",\\"Region\\":\\"cn-beijing\\"}]
   */
  buckets?: string;
  /**
   * @remarks
   * Whether to deduplicate historical detected tasks.
   * 
   * @example
   * true
   */
  distinctHistoryTasks?: boolean;
  /**
   * @remarks
   * Task end time.
   * 
   * @example
   * 2023-12-18 10:08:00
   */
  endTime?: string;
  /**
   * @remarks
   * Whether it is a scheduled scan task.
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
   * Prefixes.
   * 
   * @example
   * dir1,dir2
   */
  prefixFilters?: string;
  /**
   * @remarks
   * Priority.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Scan limit count.
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
   * Scan service code.
   * 
   * @example
   * baselineCheck
   */
  scanService?: string;
  /**
   * @remarks
   * Task start time.
   * 
   * @example
   * 2023-12-17 10:08:00
   */
  startTime?: string;
  /**
   * @remarks
   * Task name.
   * 
   * @example
   * 图片任务 20240709101602004
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
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

