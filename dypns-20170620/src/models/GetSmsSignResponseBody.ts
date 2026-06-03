// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsSignResponseBodyData extends $dara.Model {
  appUrl?: string;
  auditResult?: string;
  businessLicenseCert?: string;
  businessLicenseCertId?: string;
  certType?: string;
  createDate?: number;
  defaultFlag?: boolean;
  orderId?: string;
  organizationCodeCert?: string;
  organizationCodeCertId?: string;
  smsSignName?: string;
  smsSignRemark?: string;
  smsSignSource?: string;
  status?: string;
  taxRegistrationCert?: string;
  taxRegistrationCertId?: string;
  testFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'AppUrl',
      auditResult: 'AuditResult',
      businessLicenseCert: 'BusinessLicenseCert',
      businessLicenseCertId: 'BusinessLicenseCertId',
      certType: 'CertType',
      createDate: 'CreateDate',
      defaultFlag: 'DefaultFlag',
      orderId: 'OrderId',
      organizationCodeCert: 'OrganizationCodeCert',
      organizationCodeCertId: 'OrganizationCodeCertId',
      smsSignName: 'SmsSignName',
      smsSignRemark: 'SmsSignRemark',
      smsSignSource: 'SmsSignSource',
      status: 'Status',
      taxRegistrationCert: 'TaxRegistrationCert',
      taxRegistrationCertId: 'TaxRegistrationCertId',
      testFlag: 'TestFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      auditResult: 'string',
      businessLicenseCert: 'string',
      businessLicenseCertId: 'string',
      certType: 'string',
      createDate: 'number',
      defaultFlag: 'boolean',
      orderId: 'string',
      organizationCodeCert: 'string',
      organizationCodeCertId: 'string',
      smsSignName: 'string',
      smsSignRemark: 'string',
      smsSignSource: 'string',
      status: 'string',
      taxRegistrationCert: 'string',
      taxRegistrationCertId: 'string',
      testFlag: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsSignResponseBody extends $dara.Model {
  code?: string;
  data?: GetSmsSignResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetSmsSignResponseBodyData },
      message: 'string',
      requestId: 'string',
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

