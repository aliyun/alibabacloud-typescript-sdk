// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnceTaskLeafRecordPageRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The timestamp of the end time.
   * 
   * @example
   * 1668064495000
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to associate extended information.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  relateInfo?: boolean;
  /**
   * @remarks
   * The request source.
   * 
   * @example
   * console_batch
   */
  source?: string;
  /**
   * @remarks
   * The timestamp of the start time.
   * 
   * @example
   * 1648438617000
   */
  startTime?: number;
  /**
   * @remarks
   * The list of statuses.
   */
  statusList?: string[];
  /**
   * @remarks
   * The ID of the task to retrieve.
   * 
   * @example
   * 1471d8ebb96795b41ede090b9758****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **IMAGE_SCAN**: image scanning
   * - **IMAGE_REGISTRY_PULL**: image asset synchronization.
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

