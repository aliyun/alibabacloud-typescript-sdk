// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMailAddressByParamResponseBodyDataMailAddress extends $dara.Model {
  /**
   * @remarks
   * Sending address
   * 
   * @example
   * sender@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * Account status, frozen: 1, normal: 0.
   * 
   * @example
   * 0
   */
  accountStatus?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * Daily quota limit
   * 
   * @example
   * 10000
   */
  dailyCount?: string;
  /**
   * @remarks
   * Daily quota
   * 
   * @example
   * 100
   */
  dailyReqCount?: string;
  /**
   * @remarks
   * Domain status, 0 indicates normal, 1 indicates abnormal.
   * 
   * @example
   * 0
   */
  domainStatus?: string;
  /**
   * @remarks
   * Sending address ID
   * 
   * @example
   * 12122
   */
  mailAddressId?: string;
  /**
   * @remarks
   * Monthly quota limit
   * 
   * @example
   * 300000
   */
  monthCount?: string;
  /**
   * @remarks
   * Monthly quota
   * 
   * @example
   * 20000
   */
  monthReqCount?: string;
  /**
   * @remarks
   * Reply address
   * 
   * @example
   * test@example.com
   */
  replyAddress?: string;
  /**
   * @remarks
   * Reply address status
   * 
   * @example
   * 0
   */
  replyStatus?: string;
  /**
   * @remarks
   * Sending address type. Values:
   * 
   * - batch: bulk email
   * - trigger: triggered email
   * 
   * @example
   * batch
   */
  sendtype?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      createTime: 'CreateTime',
      dailyCount: 'DailyCount',
      dailyReqCount: 'DailyReqCount',
      domainStatus: 'DomainStatus',
      mailAddressId: 'MailAddressId',
      monthCount: 'MonthCount',
      monthReqCount: 'MonthReqCount',
      replyAddress: 'ReplyAddress',
      replyStatus: 'ReplyStatus',
      sendtype: 'Sendtype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountStatus: 'string',
      createTime: 'string',
      dailyCount: 'string',
      dailyReqCount: 'string',
      domainStatus: 'string',
      mailAddressId: 'string',
      monthCount: 'string',
      monthReqCount: 'string',
      replyAddress: 'string',
      replyStatus: 'string',
      sendtype: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMailAddressByParamResponseBodyData extends $dara.Model {
  mailAddress?: QueryMailAddressByParamResponseBodyDataMailAddress[];
  static names(): { [key: string]: string } {
    return {
      mailAddress: 'mailAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailAddress: { 'type': 'array', 'itemType': QueryMailAddressByParamResponseBodyDataMailAddress },
    };
  }

  validate() {
    if(Array.isArray(this.mailAddress)) {
      $dara.Model.validateArray(this.mailAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMailAddressByParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * Request ID
   * 
   * @example
   * 95A7D497-F8DD-4834-B81E-C1783236E55F
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * List of sending addresses
   */
  data?: QueryMailAddressByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryMailAddressByParamResponseBodyData,
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

