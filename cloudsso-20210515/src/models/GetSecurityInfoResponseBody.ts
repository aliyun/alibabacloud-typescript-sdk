// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityInfoResponseBodySecurityEmail extends $dara.Model {
  /**
   * @remarks
   * The security email address of the user.
   * 
   * @example
   * Alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The verification status of the security email address. Valid values:
   * 
   * - active: Verified.
   * - pending: Pending verification.
   * 
   * @example
   * pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE42D2C4-A30A-59B7-ACEB-6D22FB44174A
   */
  requestId?: string;
  /**
   * @remarks
   * The security email information of the user.
   * 
   * > If the user has not configured a security email address, this field is not returned.
   */
  securityEmail?: GetSecurityInfoResponseBodySecurityEmail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEmail: 'SecurityEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEmail: GetSecurityInfoResponseBodySecurityEmail,
    };
  }

  validate() {
    if(this.securityEmail && typeof (this.securityEmail as any).validate === 'function') {
      (this.securityEmail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

