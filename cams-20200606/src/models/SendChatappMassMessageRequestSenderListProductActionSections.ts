// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SendChatappMassMessageRequestSenderListProductActionSectionsProductItems } from "./SendChatappMassMessageRequestSenderListProductActionSectionsProductItems";


export class SendChatappMassMessageRequestSenderListProductActionSections extends $dara.Model {
  /**
   * @remarks
   * The products.
   */
  productItems?: SendChatappMassMessageRequestSenderListProductActionSectionsProductItems[];
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * abcd
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
      productItems: { 'type': 'array', 'itemType': SendChatappMassMessageRequestSenderListProductActionSectionsProductItems },
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

