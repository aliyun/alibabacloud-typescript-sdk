// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTotalSensitiveInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The statistics scenario. Valid values:
   * 
   * - 41: overview.
   * - 42: data catalog statistics by product.
   * - 43: region and template summary by product.
   * 
   * @example
   * 43
   */
  countType?: number;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The code of the cloud service. Column encryption supports RDS, POLARDB, and PolarDBX2. If you also specify ProductId, the two values must correspond to each other.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * Multiple product codes separated by commas (,). This parameter is used when CountType is set to 43 and ProductCode is not specified. The results are merged by region and template.
   * 
   * @example
   * RDS,POLARDB,PolarDBX2
   */
  productCodeList?: string;
  /**
   * @remarks
   * The ID of the data classification template. You can obtain this value from Items[].Id in the response of the ListTemplates operation. The value must be consistent with the selected sensitivity level and detection model.
   * 
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

