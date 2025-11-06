// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEmailVerificationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 127.0.0.1
   */
  confirmIp?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 00000a21fd374da99d9c95b48500000
   */
  emailVerificationNo?: string;
  /**
   * @example
   * 2017-12-25 03:38:46
   */
  gmtCreate?: string;
  /**
   * @example
   * 2017-12-25 03:41:11
   */
  gmtModified?: string;
  /**
   * @example
   * 127.0.0.1
   */
  sendIp?: string;
  /**
   * @example
   * 2017-12-25 03:38:46
   */
  tokenSendTime?: string;
  /**
   * @example
   * 0000
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  verificationStatus?: number;
  /**
   * @example
   * 2017-12-25 03:41:11
   */
  verificationTime?: string;
  static names(): { [key: string]: string } {
    return {
      confirmIp: 'ConfirmIp',
      email: 'Email',
      emailVerificationNo: 'EmailVerificationNo',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      sendIp: 'SendIp',
      tokenSendTime: 'TokenSendTime',
      userId: 'UserId',
      verificationStatus: 'VerificationStatus',
      verificationTime: 'VerificationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmIp: 'string',
      email: 'string',
      emailVerificationNo: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      sendIp: 'string',
      tokenSendTime: 'string',
      userId: 'string',
      verificationStatus: 'number',
      verificationTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmailVerificationResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: ListEmailVerificationResponseBodyData[];
  /**
   * @example
   * false
   */
  nextPage?: boolean;
  /**
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * 78C60CC3-FF0A-44E2-989A-DDE0597791C3
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalItemNum?: number;
  /**
   * @example
   * 1
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
      data: { 'type': 'array', 'itemType': ListEmailVerificationResponseBodyData },
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
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

