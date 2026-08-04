// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateFinanceTaxRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  financeTax?: string;
  financeTaxCertificateImgName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  HId?: number;
  secondFinanceTax?: string;
  secondFinanceTaxCertificateImgName?: string;
  secondFinanceTaxCertificateImgUrl?: string;
  financeTaxCertificateImgUrl?: string;
  static names(): { [key: string]: string } {
    return {
      financeTax: 'FinanceTax',
      financeTaxCertificateImgName: 'FinanceTaxCertificateImgName',
      HId: 'HId',
      secondFinanceTax: 'SecondFinanceTax',
      secondFinanceTaxCertificateImgName: 'SecondFinanceTaxCertificateImgName',
      secondFinanceTaxCertificateImgUrl: 'SecondFinanceTaxCertificateImgUrl',
      financeTaxCertificateImgUrl: 'financeTaxCertificateImgUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      financeTax: 'string',
      financeTaxCertificateImgName: 'string',
      HId: 'number',
      secondFinanceTax: 'string',
      secondFinanceTaxCertificateImgName: 'string',
      secondFinanceTaxCertificateImgUrl: 'string',
      financeTaxCertificateImgUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

