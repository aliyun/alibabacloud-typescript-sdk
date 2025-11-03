// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEcdReportTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: 200.
   * 
   * @example
   * 20。
   */
  pageSize?: number;
  /**
   * @remarks
   * The task status.
   * 
   * Valid values:
   * 
   * *   INIT: initializing
   * *   FAILED
   * *   RUNNING
   * *   EXPIRED
   * *   FINISHED
   */
  status?: string[];
  /**
   * @remarks
   * The sub-type of the report export task.
   * 
   * Valid value:
   * 
   * *   DESKTOP: cloud computer
   * 
   * @example
   * DESKTOP
   */
  subType?: string;
  /**
   * @remarks
   * The ID of the report export task.
   * 
   * @example
   * ret-sfkdsjfi*****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the report.
   * 
   * Valid value:
   * 
   * *   RESOURCE_REPORT
   * 
   * @example
   * RESOURCE_REPORT
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      subType: 'SubType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
      subType: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

