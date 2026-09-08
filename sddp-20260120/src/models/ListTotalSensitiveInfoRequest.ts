// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTotalSensitiveInfoRequest extends $dara.Model {
  /**
   * @example
   * 43
   */
  countType?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * RDS,POLARDB,PolarDBX2
   */
  productCodeList?: string;
  /**
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      countType: 'CountType',
      lang: 'Lang',
      productCode: 'ProductCode',
      productCodeList: 'ProductCodeList',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countType: 'number',
      lang: 'string',
      productCode: 'string',
      productCodeList: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

