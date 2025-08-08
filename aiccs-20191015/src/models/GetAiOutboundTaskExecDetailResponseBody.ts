// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskExecDetailResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 1
   */
  batchVersion?: number;
  /**
   * @example
   * 123
   */
  bizData?: string;
  /**
   * @example
   * 1
   */
  callCount?: number;
  /**
   * @example
   * 123456
   */
  caseId?: number;
  /**
   * @example
   * 1632289999000
   */
  createTime?: number;
  /**
   * @example
   * 未接通
   */
  lastCallResult?: string;
  /**
   * @example
   * 150****0000
   */
  phoneNum?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * true
   */
  hasNextPage?: boolean;
  list?: GetAiOutboundTaskExecDetailResponseBodyDataList[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetAiOutboundTaskExecDetailResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
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

