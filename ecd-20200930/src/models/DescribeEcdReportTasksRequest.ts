// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEcdReportTasksRequest extends $dara.Model {
  businessChannel?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 200.
   * 
   * @example
   * 20。
   */
  pageSize?: number;
  /**
   * @remarks
   * The task status.
   */
  status?: string[];
  /**
   * @remarks
   * The subtype of the report task.
   * 
   * @example
   * DESKTOP
   */
  subType?: string;
  /**
   * @remarks
   * The report task ID.
   * 
   * @example
   * ret-sfkdsjfi*****
   */
  taskId?: string;
  /**
   * @remarks
   * The report type.
   * 
   * @example
   * RESOURCE_REPORT
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
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
      businessChannel: 'string',
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

