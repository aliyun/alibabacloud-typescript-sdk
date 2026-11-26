// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskExecDetailResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The task batch.
   * 
   * @example
   * 1
   */
  batchVersion?: number;
  /**
   * @remarks
   * The custom business information.
   * 
   * @example
   * 123
   */
  bizData?: string;
  /**
   * @remarks
   * The number of outbound calls.
   * 
   * @example
   * 1
   */
  callCount?: number;
  /**
   * @remarks
   * The ID of the campaign associated with the outbound call.
   * 
   * @example
   * 123456
   */
  caseId?: number;
  /**
   * @remarks
   * The number import time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1632289999000
   */
  createTime?: number;
  /**
   * @remarks
   * The result of the last outbound call.
   * 
   * @example
   * Not connected
   */
  lastCallResult?: string;
  /**
   * @remarks
   * The outbound call number.
   * 
   * @example
   * 150****0000
   */
  phoneNum?: string;
  /**
   * @remarks
   * The execution status. Valid values:
   * 
   * - **1**: Pending.
   * - **2**: Calling.
   * - **3**: Completed.
   * - **4**: Terminated.
   * - **5**: Pending recall.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The execution status description.
   * 
   * @example
   * 1
   */
  statusDesc?: number;
  static names(): { [key: string]: string } {
    return {
      batchVersion: 'BatchVersion',
      bizData: 'BizData',
      callCount: 'CallCount',
      caseId: 'CaseId',
      createTime: 'CreateTime',
      lastCallResult: 'LastCallResult',
      phoneNum: 'PhoneNum',
      status: 'Status',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchVersion: 'number',
      bizData: 'string',
      callCount: 'number',
      caseId: 'number',
      createTime: 'number',
      lastCallResult: 'string',
      phoneNum: 'string',
      status: 'number',
      statusDesc: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Indicates whether a next page exists.
   * 
   * @example
   * true
   */
  hasNextPage?: boolean;
  /**
   * @remarks
   * The execution list of outbound call numbers.
   */
  list?: GetAiOutboundTaskExecDetailResponseBodyDataList[];
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 199
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasNextPage: 'HasNextPage',
      list: 'List',
      pageSize: 'PageSize',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasNextPage: 'boolean',
      list: { 'type': 'array', 'itemType': GetAiOutboundTaskExecDetailResponseBodyDataList },
      pageSize: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiOutboundTaskExecDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The task execution list.
   */
  data?: GetAiOutboundTaskExecDetailResponseBodyData;
  /**
   * @remarks
   * The status message.
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
   * Indicates whether the API operation was called successfully. Valid values:
   * - **true**: Successful.
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
      data: GetAiOutboundTaskExecDetailResponseBodyData,
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

