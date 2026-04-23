// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTransferInListResponseBodyDataTransferInInfo extends $dara.Model {
  domainName?: string;
  email?: string;
  expirationDate?: string;
  expirationDateLong?: number;
  instanceId?: string;
  modificationDate?: string;
  modificationDateLong?: number;
  needMailCheck?: boolean;
  progressBarType?: number;
  resultCode?: string;
  resultDate?: string;
  resultDateLong?: number;
  resultMsg?: string;
  simpleTransferInStatus?: string;
  status?: number;
  submissionDate?: string;
  submissionDateLong?: number;
  transferAuthorizationCodeSubmissionDate?: string;
  transferAuthorizationCodeSubmissionDateLong?: number;
  userId?: string;
  whoisMailStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      email: 'Email',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      instanceId: 'InstanceId',
      modificationDate: 'ModificationDate',
      modificationDateLong: 'ModificationDateLong',
      needMailCheck: 'NeedMailCheck',
      progressBarType: 'ProgressBarType',
      resultCode: 'ResultCode',
      resultDate: 'ResultDate',
      resultDateLong: 'ResultDateLong',
      resultMsg: 'ResultMsg',
      simpleTransferInStatus: 'SimpleTransferInStatus',
      status: 'Status',
      submissionDate: 'SubmissionDate',
      submissionDateLong: 'SubmissionDateLong',
      transferAuthorizationCodeSubmissionDate: 'TransferAuthorizationCodeSubmissionDate',
      transferAuthorizationCodeSubmissionDateLong: 'TransferAuthorizationCodeSubmissionDateLong',
      userId: 'UserId',
      whoisMailStatus: 'WhoisMailStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      email: 'string',
      expirationDate: 'string',
      expirationDateLong: 'number',
      instanceId: 'string',
      modificationDate: 'string',
      modificationDateLong: 'number',
      needMailCheck: 'boolean',
      progressBarType: 'number',
      resultCode: 'string',
      resultDate: 'string',
      resultDateLong: 'number',
      resultMsg: 'string',
      simpleTransferInStatus: 'string',
      status: 'number',
      submissionDate: 'string',
      submissionDateLong: 'number',
      transferAuthorizationCodeSubmissionDate: 'string',
      transferAuthorizationCodeSubmissionDateLong: 'number',
      userId: 'string',
      whoisMailStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInListResponseBodyData extends $dara.Model {
  transferInInfo?: QueryTransferInListResponseBodyDataTransferInInfo[];
  static names(): { [key: string]: string } {
    return {
      transferInInfo: 'TransferInInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferInInfo: { 'type': 'array', 'itemType': QueryTransferInListResponseBodyDataTransferInInfo },
    };
  }

  validate() {
    if(Array.isArray(this.transferInInfo)) {
      $dara.Model.validateArray(this.transferInInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferInListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryTransferInListResponseBodyData;
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  /**
   * @example
   * 40
   */
  totalItemNum?: number;
  /**
   * @example
   * 2
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryTransferInListResponseBodyData,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
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

