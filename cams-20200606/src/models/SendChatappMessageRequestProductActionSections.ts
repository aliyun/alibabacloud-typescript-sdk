// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SendChatappMessageRequestProductActionSectionsProductItems } from "./SendChatappMessageRequestProductActionSectionsProductItems";


export class SendChatappMessageRequestProductActionSections extends $dara.Model {
  /**
   * @remarks
   * The products.
   */
  productItems?: SendChatappMessageRequestProductActionSectionsProductItems[];
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * Test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      productItems: 'ProductItems',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productItems: { 'type': 'array', 'itemType': SendChatappMessageRequestProductActionSectionsProductItems },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productItems)) {
      $dara.Model.validateArray(this.productItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

