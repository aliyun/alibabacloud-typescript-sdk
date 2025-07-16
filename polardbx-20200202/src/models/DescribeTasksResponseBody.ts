// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2021-10-20T19:40:00Z
   */
  beginTime?: string;
  /**
   * @example
   * DBName
   */
  DBName?: string;
  /**
   * @example
   * 2021-10-20T20:00:00Z
   */
  finishTime?: string;
  /**
   * @example
   * 80
   */
  progress?: string;
  /**
   * @example
   * ProgressInfo
   */
  progressInfo?: string;
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  scaleOutToken?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * multi_scale_out
   */
  taskAction?: string;
  /**
   * @example
   * TaskErrorCode
   */
  taskErrorCode?: string;
  /**
   * @example
   * TaskErrorMessage
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 20089398
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      DBName: 'DBName',
      finishTime: 'FinishTime',
      progress: 'Progress',
      progressInfo: 'ProgressInfo',
      scaleOutToken: 'ScaleOutToken',
      status: 'Status',
      taskAction: 'TaskAction',
      taskErrorCode: 'TaskErrorCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      DBName: 'string',
      finishTime: 'string',
      progress: 'string',
      progressInfo: 'string',
      scaleOutToken: 'string',
      status: 'string',
      taskAction: 'string',
      taskErrorCode: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $dara.Model {
  items?: DescribeTasksResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @example
   * D6045D78-C119-5A17-9DEA-0F810394E008
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeTasksResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

