// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVerificationInfoResponseBodySecurityEmailDevice extends $dara.Model {
  /**
   * @remarks
   * The security email address.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The status of the security email address. Valid values:
   * - active: Activated.
   * - pending: Pending activation.
   * 
   * @example
   * active
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

export class GetVerificationInfoResponseBodySecurityPhoneDevice extends $dara.Model {
  /**
   * @remarks
   * The area code.
   * 
   * @example
   * 86
   */
  areaCode?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 13900001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The status of the secure phone. Valid values:
   * - active: Activated.
   * - pending: Pending activation.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      areaCode: 'AreaCode',
      phoneNumber: 'PhoneNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaCode: 'string',
      phoneNumber: 'string',
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

export class GetVerificationInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B182C041-8C64-5F2F-A07B-FC67FAF89CF9
   */
  requestId?: string;
  /**
   * @remarks
   * The security email address information.
   */
  securityEmailDevice?: GetVerificationInfoResponseBodySecurityEmailDevice;
  /**
   * @remarks
   * The secure phone information.
   */
  securityPhoneDevice?: GetVerificationInfoResponseBodySecurityPhoneDevice;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEmailDevice: 'SecurityEmailDevice',
      securityPhoneDevice: 'SecurityPhoneDevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEmailDevice: GetVerificationInfoResponseBodySecurityEmailDevice,
      securityPhoneDevice: GetVerificationInfoResponseBodySecurityPhoneDevice,
    };
  }

  validate() {
    if(this.securityEmailDevice && typeof (this.securityEmailDevice as any).validate === 'function') {
      (this.securityEmailDevice as any).validate();
    }
    if(this.securityPhoneDevice && typeof (this.securityPhoneDevice as any).validate === 'function') {
      (this.securityPhoneDevice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

