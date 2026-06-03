// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEmailVerificationResponseBodyData extends $dara.Model {
  confirmIp?: string;
  email?: string;
  emailVerificationNo?: string;
  gmtCreate?: string;
  gmtModified?: string;
  sendIp?: string;
  tokenSendTime?: string;
  userId?: string;
  verificationStatus?: number;
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
  currentPageNum?: number;
  data?: ListEmailVerificationResponseBodyData[];
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  totalItemNum?: number;
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

