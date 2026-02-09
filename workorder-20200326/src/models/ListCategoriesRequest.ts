// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoriesRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

