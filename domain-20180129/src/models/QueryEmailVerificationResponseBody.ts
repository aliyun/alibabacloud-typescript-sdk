// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEmailVerificationResponseBody extends $dara.Model {
  /**
   * @example
   * 42.*.*.31
   */
  confirmIp?: string;
  /**
   * @example
   * abc@aliyun.com
   */
  email?: string;
  /**
   * @example
   * 72b36ba0572e423bbb3f19640896****
   */
  emailVerificationNo?: string;
  /**
   * @example
   * 2019-02-19 16:38:07
   */
  gmtCreate?: string;
  /**
   * @example
   * 2019-02-19 16:40:38
   */
  gmtModified?: string;
  /**
   * @example
   * FC4F7D02-8A83-4E37-B935-2D48A1B8423E
   */
  requestId?: string;
  /**
   * @example
   * 42.*.*.115
   */
  sendIp?: string;
  /**
   * @example
   * 2019-02-19 16:38:07
   */
  tokenSendTime?: string;
  /**
   * @example
   * 140692647406****
   */
  userId?: string;
  /**
   * @example
   * 1
   */
  verificationStatus?: number;
  /**
   * @example
   * 2019-02-19 16:40:38
   */
  verificationTime?: string;
  static names(): { [key: string]: string } {
    return {
      confirmIp: 'ConfirmIp',
      email: 'Email',
      emailVerificationNo: 'EmailVerificationNo',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      requestId: 'RequestId',
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
      requestId: 'string',
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

