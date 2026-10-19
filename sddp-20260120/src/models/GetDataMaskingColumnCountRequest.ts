// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataMaskingColumnCountRequest extends $dara.Model {
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
   * The list of cloud product type identifiers. Separate multiple values with commas (,). Valid values for column encryption scenarios: 5 (ApsaraDB RDS), 8 (PolarDB), and 27 (PolarDB-X 2.0).
   * 
   * @example
   * 5
   */
  productIds?: string;
  /**
   * @remarks
   * The ID of the data classification template. You can obtain this value from Items[].Id returned by the ListTemplates operation. This value must be consistent with the selected sensitivity level and detection model.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      productIds: 'ProductIds',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      productIds: 'string',
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

