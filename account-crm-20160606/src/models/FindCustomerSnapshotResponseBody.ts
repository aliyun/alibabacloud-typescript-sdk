// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindCustomerSnapshotResponseBodyCustomerSnapshotAccountInfoSnapshotModel extends $dara.Model {
  address?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  address6?: string;
  cityId?: string;
  cityName?: string;
  postCode?: string;
  provinceId?: string;
  provinceName?: string;
  trueName?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      address2: 'Address2',
      address3: 'Address3',
      address4: 'Address4',
      address5: 'Address5',
      address6: 'Address6',
      cityId: 'CityId',
      cityName: 'CityName',
      postCode: 'PostCode',
      provinceId: 'ProvinceId',
      provinceName: 'ProvinceName',
      trueName: 'TrueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      address2: 'string',
      address3: 'string',
      address4: 'string',
      address5: 'string',
      address6: 'string',
      cityId: 'string',
      cityName: 'string',
      postCode: 'string',
      provinceId: 'string',
      provinceName: 'string',
      trueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomerSnapshotResponseBodyCustomerSnapshotAccountTaxSnapshotModel extends $dara.Model {
  financeTaxCertificateImgName?: string;
  financeTaxCertificateImgUrl?: string;
  secondFinanceTax?: string;
  secondFinanceTaxCertificateImgName?: string;
  secondFinanceTaxCertificateImgUrl?: string;
  tax?: string;
  static names(): { [key: string]: string } {
    return {
      financeTaxCertificateImgName: 'FinanceTaxCertificateImgName',
      financeTaxCertificateImgUrl: 'FinanceTaxCertificateImgUrl',
      secondFinanceTax: 'SecondFinanceTax',
      secondFinanceTaxCertificateImgName: 'SecondFinanceTaxCertificateImgName',
      secondFinanceTaxCertificateImgUrl: 'SecondFinanceTaxCertificateImgUrl',
      tax: 'Tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      financeTaxCertificateImgName: 'string',
      financeTaxCertificateImgUrl: 'string',
      secondFinanceTax: 'string',
      secondFinanceTaxCertificateImgName: 'string',
      secondFinanceTaxCertificateImgUrl: 'string',
      tax: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomerSnapshotResponseBodyCustomerSnapshot extends $dara.Model {
  accountInfoSnapshotModel?: FindCustomerSnapshotResponseBodyCustomerSnapshotAccountInfoSnapshotModel;
  accountTaxSnapshotModel?: FindCustomerSnapshotResponseBodyCustomerSnapshotAccountTaxSnapshotModel;
  gmtCreate?: string;
  id?: number;
  infoType?: string;
  kpId?: number;
  static names(): { [key: string]: string } {
    return {
      accountInfoSnapshotModel: 'AccountInfoSnapshotModel',
      accountTaxSnapshotModel: 'AccountTaxSnapshotModel',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      infoType: 'InfoType',
      kpId: 'KpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfoSnapshotModel: FindCustomerSnapshotResponseBodyCustomerSnapshotAccountInfoSnapshotModel,
      accountTaxSnapshotModel: FindCustomerSnapshotResponseBodyCustomerSnapshotAccountTaxSnapshotModel,
      gmtCreate: 'string',
      id: 'number',
      infoType: 'string',
      kpId: 'number',
    };
  }

  validate() {
    if(this.accountInfoSnapshotModel && typeof (this.accountInfoSnapshotModel as any).validate === 'function') {
      (this.accountInfoSnapshotModel as any).validate();
    }
    if(this.accountTaxSnapshotModel && typeof (this.accountTaxSnapshotModel as any).validate === 'function') {
      (this.accountTaxSnapshotModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomerSnapshotResponseBody extends $dara.Model {
  code?: string;
  customerSnapshot?: FindCustomerSnapshotResponseBodyCustomerSnapshot;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customerSnapshot: 'CustomerSnapshot',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customerSnapshot: FindCustomerSnapshotResponseBodyCustomerSnapshot,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.customerSnapshot && typeof (this.customerSnapshot as any).validate === 'function') {
      (this.customerSnapshot as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

