// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatStockOssCheckTaskRequest extends $dara.Model {
  /**
   * @example
   * [{\\"Bucket\\":\\"bucket01-test\\",\\"Region\\":\\"cn-beijing\\"}]
   */
  buckets?: string;
  /**
   * @example
   * 1751
   */
  callbackId?: string;
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
   * 1
   */
  executeDate?: number;
  /**
   * @example
   * 01:09:30-01:19:30
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
  referer?: string;
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
   * 0
   */
  scanResourceType?: string;
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
  /**
   * @example
   * 0
   */
  taskCycle?: number;
  taskName?: string;
  /**
   * @example
   * batch
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
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

