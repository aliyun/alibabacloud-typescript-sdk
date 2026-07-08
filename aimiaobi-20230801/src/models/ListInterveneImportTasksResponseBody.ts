// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterveneImportTasksResponseBodyDataStatusList extends $dara.Model {
  /**
   * @remarks
   * Task message
   * 
   * @example
   * Success
   */
  msg?: string;
  /**
   * @remarks
   * Completion percentage
   * 
   * @example
   * 5
   */
  percentage?: number;
  /**
   * @remarks
   * Task status
   * 
   * @example
   * Success
   */
  status?: number;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 4854
   */
  taskId?: string;
  /**
   * @remarks
   * Task name
   * 
   * @example
   * 12344454
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      percentage: 'Percentage',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      percentage: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneImportTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Status code returned by the intervention service
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Task status information
   */
  statusList?: ListInterveneImportTasksResponseBodyDataStatusList[];
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 0
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': ListInterveneImportTasksResponseBodyDataStatusList },
      totalSize: 'number',
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

export class ListInterveneImportTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: ListInterveneImportTasksResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded: true for success, false for failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInterveneImportTasksResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

