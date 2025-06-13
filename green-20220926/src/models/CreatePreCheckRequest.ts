// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePreCheckRequest extends $dara.Model {
  /**
   * @example
   * [{\\"Bucket\\":\\"bucket01-test\\",\\"Region\\":\\"cn-beijing\\"}]
   */
  buckets?: string;
  /**
   * @example
   * true
   */
  distinctHistoryTasks?: boolean;
  /**
   * @example
   * 2023-12-18 10:08:00
   */
  endTime?: string;
  /**
   * @example
   * false
   */
  isInc?: boolean;
  /**
   * @example
   * 1
   */
  mediaType?: number;
  /**
   * @example
   * all
   */
  prefixFilterType?: string;
  /**
   * @example
   * dir1,dir2
   */
  prefixFilters?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
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
   * baselineCheck
   */
  scanService?: string;
  /**
   * @example
   * 2023-12-17 10:08:00
   */
  startTime?: string;
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

