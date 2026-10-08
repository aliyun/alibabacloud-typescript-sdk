// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResendEmailVerificationResponseBodyFailList extends $dara.Model {
  /**
   * @remarks
   * Return code.
   * 
   * @example
   * SendTokenQuotaExceeded
   */
  code?: string;
  /**
   * @remarks
   * Verified mailbox.
   * 
   * @example
   * test1@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * The maximum number of attempts allowed to send the email verification link is exceeded.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationResponseBodySuccessList extends $dara.Model {
  /**
   * @remarks
   * Return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Verified mailbox.
   * 
   * @example
   * test2@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * Success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      email: 'Email',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      email: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendEmailVerificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of failed verification email sends.
   */
  failList?: ResendEmailVerificationResponseBodyFailList[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0EA54E99-DB48-4CE3-A099-6ED8E451B8AC
   */
  requestId?: string;
  /**
   * @remarks
   * List of successfully sent verification emails.
   */
  successList?: ResendEmailVerificationResponseBodySuccessList[];
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: { 'type': 'array', 'itemType': ResendEmailVerificationResponseBodyFailList },
      requestId: 'string',
      successList: { 'type': 'array', 'itemType': ResendEmailVerificationResponseBodySuccessList },
    };
  }

  validate() {
    if(Array.isArray(this.failList)) {
      $dara.Model.validateArray(this.failList);
    }
    if(Array.isArray(this.successList)) {
      $dara.Model.validateArray(this.successList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

