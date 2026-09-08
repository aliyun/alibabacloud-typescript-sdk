// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataMaskingColumnCountRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 5
   */
  productIds?: string;
  /**
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

