// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityRegistrationByCustomerResponseBodyData extends $dara.Model {
  accountType?: number;
  applicationId?: number;
  applyStatus?: string;
  auditCode?: string;
  customerId?: number;
  docBackPic?: string;
  docFrontPic?: string;
  docNum?: string;
  docType?: string;
  email?: string;
  fullName?: string;
  registeredAddress?: string;
  registeredCountry?: string;
  registeredNum?: string;
  tel?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      applicationId: 'ApplicationId',
      applyStatus: 'ApplyStatus',
      auditCode: 'AuditCode',
      customerId: 'CustomerId',
      docBackPic: 'DocBackPic',
      docFrontPic: 'DocFrontPic',
      docNum: 'DocNum',
      docType: 'DocType',
      email: 'Email',
      fullName: 'FullName',
      registeredAddress: 'RegisteredAddress',
      registeredCountry: 'RegisteredCountry',
      registeredNum: 'RegisteredNum',
      tel: 'Tel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'number',
      applicationId: 'number',
      applyStatus: 'string',
      auditCode: 'string',
      customerId: 'number',
      docBackPic: 'string',
      docFrontPic: 'string',
      docNum: 'string',
      docType: 'string',
      email: 'string',
      fullName: 'string',
      registeredAddress: 'string',
      registeredCountry: 'string',
      registeredNum: 'string',
      tel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityRegistrationByCustomerResponseBody extends $dara.Model {
  code?: string;
  data?: GetIdentityRegistrationByCustomerResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetIdentityRegistrationByCustomerResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

