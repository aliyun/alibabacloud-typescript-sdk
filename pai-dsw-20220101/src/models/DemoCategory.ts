// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DemoCategory extends $dara.Model {
  /**
   * @example
   * sdk
   */
  categoryCode?: string;
  /**
   * @example
   * SDK Usage
   */
  categoryName?: string;
  /**
   * @example
   * 12
   */
  order?: number;
  subCategories?: DemoCategory[];
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'CategoryCode',
      categoryName: 'CategoryName',
      order: 'Order',
      subCategories: 'SubCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      categoryName: 'string',
      order: 'number',
      subCategories: { 'type': 'array', 'itemType': DemoCategory },
    };
  }

  validate() {
    if(Array.isArray(this.subCategories)) {
      $dara.Model.validateArray(this.subCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

