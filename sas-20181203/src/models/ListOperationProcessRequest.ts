// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1635575219000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1680919232000
   */
  startTime?: number;
  /**
   * @remarks
   * The task status codes.
   */
  statusCodes?: number[];
  /**
   * @remarks
   * The task IDs.
   */
  taskIds?: string[];
  taskSources?: string[];
  /**
   * @remarks
   * The task types. Valid values:
   * 
   * *   CHECK_ALL: full check.
   * *   CHECK_POLICY: policy-based check for which check items are configured.
   * *   CHECK_SCHEDULE: scheduled check.
   * *   CHECK_ITEM: specific check item-based check.
   * *   CHECK_INSTANCE: specific check item-based check on specific instances.
   */
  taskTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      statusCodes: 'StatusCodes',
      taskIds: 'TaskIds',
      taskSources: 'TaskSources',
      taskTypes: 'TaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      startTime: 'number',
      statusCodes: { 'type': 'array', 'itemType': 'number' },
      taskIds: { 'type': 'array', 'itemType': 'string' },
      taskSources: { 'type': 'array', 'itemType': 'string' },
      taskTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusCodes)) {
      $dara.Model.validateArray(this.statusCodes);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    if(Array.isArray(this.taskSources)) {
      $dara.Model.validateArray(this.taskSources);
    }
    if(Array.isArray(this.taskTypes)) {
      $dara.Model.validateArray(this.taskTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

