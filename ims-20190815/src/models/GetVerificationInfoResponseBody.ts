// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVerificationInfoResponseBodySecurityEmailDevice extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The status of the email. Valid values:
   * 
   * *   active: The email is activated.
   * *   pending: The email is pending for activation.
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
   * The international dialing code.
   * 
   * @example
   * 86
   */
  areaCode?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 13900001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The status of the mobile phone. Valid values:
   * 
   * *   active: The mobile phone is activated.
   * *   pending: The mobile phone is pending for activation.
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
   * The information about the email.
   */
  securityEmailDevice?: GetVerificationInfoResponseBodySecurityEmailDevice;
  /**
   * @remarks
   * The information about the mobile phone.
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

