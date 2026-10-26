// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataMaskingColumnCountRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response description. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of cloud product type identifiers. Separate multiple values with commas (,). For column encryption scenarios, the values correspond to 5 (ApsaraDB RDS), 8 (PolarDB), and 27 (PolarDB-X).
   * 
   * @example
   * 5
   */
  productIds?: string;
  /**
   * @remarks
   * The data classification template ID. You can obtain the ID from the Items[].Id parameter in the ListTemplates response. The ID must be consistent with the selected sensitivity level and detection model.
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

