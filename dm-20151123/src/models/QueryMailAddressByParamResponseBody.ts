// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMailAddressByParamResponseBodyDataMailAddress extends $dara.Model {
  accountName?: string;
  accountStatus?: string;
  configSetId?: string;
  configSetName?: string;
  createTime?: string;
  dailyCount?: string;
  dailyReqCount?: string;
  domainStatus?: string;
  mailAddressId?: string;
  monthCount?: string;
  monthReqCount?: string;
  replyAddress?: string;
  replyStatus?: string;
  sendtype?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      configSetId: 'ConfigSetId',
      configSetName: 'ConfigSetName',
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
      configSetId: 'string',
      configSetName: 'string',
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
   * The current page number.
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
   * 95A7D497-F8DD-4834-B81E-C1783236E55F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
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

