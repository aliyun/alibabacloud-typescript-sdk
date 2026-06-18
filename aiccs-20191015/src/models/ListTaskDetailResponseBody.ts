// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskDetailResponseBodyDataRecord extends $dara.Model {
  /**
   * @remarks
   * Called number.
   * 
   * @example
   * 186****0000
   */
  called?: string;
  /**
   * @remarks
   * Calling number.
   * 
   * @example
   * 136****0000
   */
  caller?: string;
  /**
   * @remarks
   * Hang-up direction. Valid values:
   * 
   * - **User**.
   * - **Machine**.
   * 
   * @example
   * 用户
   */
  direction?: string;
  /**
   * @remarks
   * Call duration. Unit: seconds.
   * 
   * @example
   * 30
   */
  duration?: number;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 2021-05-20 00:03:00
   */
  endTime?: string;
  /**
   * @remarks
   * Record ID.
   * 
   * @example
   * 12****
   */
  id?: number;
  /**
   * @remarks
   * Current retry count.
   * 
   * @example
   * 1
   */
  retryCurTimes?: number;
  /**
   * @remarks
   * Retry Count.
   * 
   * @example
   * 1
   */
  retryTimes?: number;
  /**
   * @remarks
   * Start Time.
   * 
   * @example
   * 2021-05-20 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * Detail status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * Call status code.
   * 
   * @example
   * 200100
   */
  statusCode?: string;
  /**
   * @remarks
   * Call status code description.
   * 
   * @example
   * 呼叫成功
   */
  statusCodeDesc?: string;
  /**
   * @remarks
   * Intent tags.
   * 
   * @example
   * 肯定
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
   * Number of items per page.
   * 
   * @example
   * 20
   */
  pageNo?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * List of job information.
   */
  record?: ListTaskDetailResponseBodyDataRecord[];
  /**
   * @remarks
   * Total number of jobs.
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
   * The request status code. A return value of OK indicates that the request succeeded.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Detailed job information.
   */
  data?: ListTaskDetailResponseBodyData;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API invocation succeeded. Valid values:
   * - **true**: Succeeded.
   * - **false**: Failed.
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

