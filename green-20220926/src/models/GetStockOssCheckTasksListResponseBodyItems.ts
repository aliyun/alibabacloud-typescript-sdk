// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStockOssCheckTasksListResponseBodyItemsConfig } from "./GetStockOssCheckTasksListResponseBodyItemsConfig";


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

