// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos } from "./GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos";


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
      freezeType: 'FreezeType',
      prefixFilterType: 'PrefixFilterType',
      prefixFilters: 'PrefixFilters',
      priority: 'Priority',
      scanLimit: 'ScanLimit',
      scanNoFileType: 'ScanNoFileType',
      scanResourceType: 'ScanResourceType',
      scanService: 'ScanService',
      scanServiceInfos: 'ScanServiceInfos',
      startTime: 'StartTime',
      taskCycle: 'TaskCycle',
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
      freezeType: 'string',
      prefixFilterType: 'string',
      prefixFilters: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      scanLimit: 'number',
      scanNoFileType: 'boolean',
      scanResourceType: 'number',
      scanService: { 'type': 'array', 'itemType': 'string' },
      scanServiceInfos: { 'type': 'array', 'itemType': GetStockOssCheckTasksListResponseBodyItemsConfigScanServiceInfos },
      startTime: 'string',
      taskCycle: 'number',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

