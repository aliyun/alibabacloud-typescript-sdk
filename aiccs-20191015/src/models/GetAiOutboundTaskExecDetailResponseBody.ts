// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskExecDetailResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Job batch.
   * 
   * @example
   * 1
   */
  batchVersion?: number;
  /**
   * @remarks
   * Custom business information
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
   * The activity ID associated with this outbound call.
   * 
   * @example
   * 123456
   */
  caseId?: number;
  /**
   * @remarks
   * Number import time. UNIX timestamp format, unit: milliseconds.
   * 
   * @example
   * 1632289999000
   */
  createTime?: number;
  /**
   * @remarks
   * Result of the last outbound call.
   * 
   * @example
   * 未接通
   */
  lastCallResult?: string;
  /**
   * @remarks
   * Outbound phone number.
   * 
   * @example
   * 150****0000
   */
  phoneNum?: string;
  /**
   * @remarks
   * Execution status. Valid values:
   * 
   * - **1**: Pending call.
   * - **2**: Calling.
   * - **3**: Completed.
   * - **4**: Stopped.
   * - **5**: Pending retry.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Execution status description.
   * 
   * @example
   * 待呼叫
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
   * Current page number.
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
   * List of outbound call executions.
   */
  list?: GetAiOutboundTaskExecDetailResponseBodyDataList[];
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of jobs.
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
   * List of task executions.
   */
  data?: GetAiOutboundTaskExecDetailResponseBodyData;
  /**
   * @remarks
   * Status code description.
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
   * Indicates whether the API was invoked successfully.
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

