// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterveneImportTasksResponseBodyDataStatusList extends $dara.Model {
  /**
   * @example
   * Success
   */
  msg?: string;
  /**
   * @example
   * 5
   */
  percentage?: number;
  /**
   * @example
   * Success
   */
  status?: number;
  /**
   * @example
   * 4854
   */
  taskId?: string;
  /**
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
  code?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  statusList?: ListInterveneImportTasksResponseBodyDataStatusList[];
  /**
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
   * @example
   * DataNotExists
   */
  code?: string;
  data?: ListInterveneImportTasksResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
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

