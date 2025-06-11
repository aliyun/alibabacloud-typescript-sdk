// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SendChatappMessageRequestProductActionSections } from "./SendChatappMessageRequestProductActionSections";


export class SendChatappMessageRequestProductAction extends $dara.Model {
  /**
   * @remarks
   * The products. Up to 30 products and 10 categories can be added.
   */
  sections?: SendChatappMessageRequestProductActionSections[];
  /**
   * @remarks
   * The retailer ID of the product.
   * 
   * @example
   * S238SK
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
      sections: { 'type': 'array', 'itemType': SendChatappMessageRequestProductActionSections },
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

