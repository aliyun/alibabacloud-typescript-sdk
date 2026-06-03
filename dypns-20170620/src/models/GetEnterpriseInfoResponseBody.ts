// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnterpriseInfoResponseBodyData extends $dara.Model {
  auditDesc?: string;
  auditTime?: string;
  businessLicenseAddress?: string;
  businessLicensePicture?: string;
  enterpriseId?: number;
  enterpriseName?: string;
  legalPersonCertNumber?: string;
  legalPersonCertPicture?: string;
  legalPersonName?: string;
  managerCertNumber?: string;
  managerCertPicture?: string;
  managerContactNumber?: string;
  managerName?: string;
  numberApplicationLetterPicture?: string;
  orderId?: number;
  organizationCode?: string;
  remark?: string;
  status?: number;
  undertakingPicture?: string;
  static names(): { [key: string]: string } {
    return {
      auditDesc: 'AuditDesc',
      auditTime: 'AuditTime',
      businessLicenseAddress: 'BusinessLicenseAddress',
      businessLicensePicture: 'BusinessLicensePicture',
      enterpriseId: 'EnterpriseId',
      enterpriseName: 'EnterpriseName',
      legalPersonCertNumber: 'LegalPersonCertNumber',
      legalPersonCertPicture: 'LegalPersonCertPicture',
      legalPersonName: 'LegalPersonName',
      managerCertNumber: 'ManagerCertNumber',
      managerCertPicture: 'ManagerCertPicture',
      managerContactNumber: 'ManagerContactNumber',
      managerName: 'ManagerName',
      numberApplicationLetterPicture: 'NumberApplicationLetterPicture',
      orderId: 'OrderId',
      organizationCode: 'OrganizationCode',
      remark: 'Remark',
      status: 'Status',
      undertakingPicture: 'UndertakingPicture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditDesc: 'string',
      auditTime: 'string',
      businessLicenseAddress: 'string',
      businessLicensePicture: 'string',
      enterpriseId: 'number',
      enterpriseName: 'string',
      legalPersonCertNumber: 'string',
      legalPersonCertPicture: 'string',
      legalPersonName: 'string',
      managerCertNumber: 'string',
      managerCertPicture: 'string',
      managerContactNumber: 'string',
      managerName: 'string',
      numberApplicationLetterPicture: 'string',
      orderId: 'number',
      organizationCode: 'string',
      remark: 'string',
      status: 'number',
      undertakingPicture: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseInfoResponseBody extends $dara.Model {
  code?: string;
  data?: GetEnterpriseInfoResponseBodyData;
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
      data: GetEnterpriseInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
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

