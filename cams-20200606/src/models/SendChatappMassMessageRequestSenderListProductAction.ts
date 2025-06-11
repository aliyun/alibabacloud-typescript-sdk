// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SendChatappMassMessageRequestSenderListProductActionSections } from "./SendChatappMassMessageRequestSenderListProductActionSections";


export class SendChatappMassMessageRequestSenderListProductAction extends $dara.Model {
  /**
   * @remarks
   * The products. Up to 30 products and 10 categories can be added.
   */
  sections?: SendChatappMassMessageRequestSenderListProductActionSections[];
  /**
   * @remarks
   * The retailer ID of the product.
   * 
   * @example
   * skkks999393
   */
  thumbnailProductRetailerId?: string;
  static names(): { [key: string]: string } {
    return {
      sections: 'Sections',
      thumbnailProductRetailerId: 'ThumbnailProductRetailerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sections: { 'type': 'array', 'itemType': SendChatappMassMessageRequestSenderListProductActionSections },
      thumbnailProductRetailerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sections)) {
      $dara.Model.validateArray(this.sections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

