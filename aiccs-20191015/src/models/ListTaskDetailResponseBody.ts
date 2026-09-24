// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskDetailResponseBodyDataRecord extends $dara.Model {
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 186****0000
   */
  called?: string;
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 136****0000
   */
  caller?: string;
  /**
   * @remarks
   * The hangup direction. Valid values:
   * 
   * - **User**.
   * - **Robot**.
   * 
   * @example
   * User
   */
  direction?: string;
  /**
   * @remarks
   * The call duration. Unit: seconds.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @remarks
   * The end time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2021-05-20 00:03:00
   */
  endTime?: string;
  /**
   * @remarks
   * The detail ID.
   * 
   * @example
   * 12****
   */
  id?: number;
  /**
   * @remarks
   * The current retry count.
   * 
   * @example
   * 1
   */
  retryCurTimes?: number;
  /**
   * @remarks
   * The total number of retries.
   * 
   * @example
   * 1
   */
  retryTimes?: number;
  /**
   * @remarks
   * The start time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2021-05-20 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The detail status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The call status code.
   * 
   * @example
   * 200100
   */
  statusCode?: string;
  /**
   * @remarks
   * The description of the call status code.
   * 
   * @example
   * Call succeeded
   */
  statusCodeDesc?: string;
  /**
   * @remarks
   * The intent label.
   * 
   * @example
   * Affirmative
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      caller: 'Caller',
      direction: 'Direction',
      duration: 'Duration',
      endTime: 'EndTime',
      id: 'Id',
      retryCurTimes: 'RetryCurTimes',
      retryTimes: 'RetryTimes',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      statusCodeDesc: 'StatusCodeDesc',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      caller: 'string',
      direction: 'string',
      duration: 'number',
      endTime: 'string',
      id: 'number',
      retryCurTimes: 'number',
      retryTimes: 'number',
      startTime: 'string',
      status: 'string',
      statusCode: 'string',
      statusCodeDesc: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageNo?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of task records.
   */
  record?: ListTaskDetailResponseBodyDataRecord[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      record: 'Record',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      record: { 'type': 'array', 'itemType': ListTaskDetailResponseBodyDataRecord },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The task details.
   */
  data?: ListTaskDetailResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTaskDetailResponseBodyData,
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

