// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEcdReportTasksRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20。
   */
  pageSize?: number;
  status?: string[];
  /**
   * @example
   * DESKTOP
   */
  subType?: string;
  /**
   * @example
   * ret-sfkdsjfi*****
   */
  taskId?: string;
  /**
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

