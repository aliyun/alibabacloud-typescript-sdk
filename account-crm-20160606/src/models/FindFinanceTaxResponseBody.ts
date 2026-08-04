// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindFinanceTaxResponseBodyFinanceVersion extends $dara.Model {
  financeTaxCertificateImgName?: string;
  financeTaxCertificateImgUrl?: string;
  secondFinanceTax?: string;
  secondFinanceTaxCertificateImgName?: string;
  secondFinanceTaxCertificateImgUrl?: string;
  tax?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      financeTaxCertificateImgName: 'FinanceTaxCertificateImgName',
      financeTaxCertificateImgUrl: 'FinanceTaxCertificateImgUrl',
      secondFinanceTax: 'SecondFinanceTax',
      secondFinanceTaxCertificateImgName: 'SecondFinanceTaxCertificateImgName',
      secondFinanceTaxCertificateImgUrl: 'SecondFinanceTaxCertificateImgUrl',
      tax: 'Tax',
      version: 'Version',
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
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindFinanceTaxResponseBody extends $dara.Model {
  code?: string;
  financeVersion?: FindFinanceTaxResponseBodyFinanceVersion;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      financeVersion: 'FinanceVersion',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      financeVersion: FindFinanceTaxResponseBodyFinanceVersion,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.financeVersion && typeof (this.financeVersion as any).validate === 'function') {
      (this.financeVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

