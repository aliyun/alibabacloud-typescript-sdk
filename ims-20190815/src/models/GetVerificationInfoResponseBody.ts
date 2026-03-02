// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVerificationInfoResponseBodySecurityEmailDevice extends $dara.Model {
  email?: string;
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
  areaCode?: string;
  phoneNumber?: string;
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
  requestId?: string;
  securityEmailDevice?: GetVerificationInfoResponseBodySecurityEmailDevice;
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

