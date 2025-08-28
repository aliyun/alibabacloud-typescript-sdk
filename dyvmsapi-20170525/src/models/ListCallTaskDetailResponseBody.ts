// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallTaskDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 1300000****
   */
  calledNum?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 0571000****
   */
  caller?: string;
  /**
   * @remarks
   * The call duration. Unit: seconds.
   * 
   * @example
   * 200
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **SUCCESS**: The task was successful.
   * *   **FAIL**: The task failed.
   * *   **INIT**: The task was not started.
   * 
   * @example
   * FAIL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      calledNum: 'CalledNum',
      caller: 'Caller',
      duration: 'Duration',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNum: 'string',
      caller: 'string',
      duration: 'number',
      id: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/112502.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The information about the task.
   */
  data?: ListCallTaskDetailResponseBodyData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D692AC3D-CBA8-417F-BEB9-5B73718922D4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of called numbers.
   * 
   * @example
   * 1000
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCallTaskDetailResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

