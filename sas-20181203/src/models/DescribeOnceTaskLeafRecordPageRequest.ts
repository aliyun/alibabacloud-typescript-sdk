// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnceTaskLeafRecordPageRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end timestamp of the sub-task.
   * 
   * @example
   * 1668064495000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether extension information is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  relateInfo?: boolean;
  /**
   * @remarks
   * The source of the request.
   * 
   * @example
   * console_batch
   */
  source?: string;
  /**
   * @remarks
   * The start timestamp of the sub-task.
   * 
   * @example
   * 1648438617000
   */
  startTime?: number;
  /**
   * @remarks
   * The status information.
   */
  statusList?: string[];
  /**
   * @remarks
   * The ID of the sub-task.
   * 
   * @example
   * 1471d8ebb96795b41ede090b9758****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the sub-task. Valid values:
   * 
   * *   **IMAGE_SCAN**: image scan task
   * *   **IMAGE_REGISTRY_PULL**: image asset synchronization task
   * 
   * This parameter is required.
   * 
   * @example
   * CLIENT_PROBLEM_CHECK
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      relateInfo: 'RelateInfo',
      source: 'Source',
      startTime: 'StartTime',
      statusList: 'StatusList',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      relateInfo: 'boolean',
      source: 'string',
      startTime: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

