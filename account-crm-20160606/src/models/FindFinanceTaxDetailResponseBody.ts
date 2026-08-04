// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindFinanceTaxDetailResponseBodyFinance extends $dara.Model {
  financeTaxCertificateImgName?: string;
  tax?: string;
  financeTaxCertificateImgUrl?: string;
  secondFinanceTax?: string;
  secondFinanceTaxCertificateImgName?: string;
  secondFinanceTaxCertificateImgUrl?: string;
  static names(): { [key: string]: string } {
    return {
      financeTaxCertificateImgName: 'FinanceTaxCertificateImgName',
      tax: 'Tax',
      financeTaxCertificateImgUrl: 'financeTaxCertificateImgUrl',
      secondFinanceTax: 'secondFinanceTax',
      secondFinanceTaxCertificateImgName: 'secondFinanceTaxCertificateImgName',
      secondFinanceTaxCertificateImgUrl: 'secondFinanceTaxCertificateImgUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      financeTaxCertificateImgName: 'string',
      tax: 'string',
      financeTaxCertificateImgUrl: 'string',
      secondFinanceTax: 'string',
      secondFinanceTaxCertificateImgName: 'string',
      secondFinanceTaxCertificateImgUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindFinanceTaxDetailResponseBody extends $dara.Model {
  code?: string;
  finance?: FindFinanceTaxDetailResponseBodyFinance;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      finance: 'Finance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      finance: FindFinanceTaxDetailResponseBodyFinance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.finance && typeof (this.finance as any).validate === 'function') {
      (this.finance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

