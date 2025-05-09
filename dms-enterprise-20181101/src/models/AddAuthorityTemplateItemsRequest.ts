// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddAuthorityTemplateItemsRequestItems } from "./AddAuthorityTemplateItemsRequestItems";


export class AddAuthorityTemplateItemsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  items?: AddAuthorityTemplateItemsRequestItems[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  templateId?: number;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      templateId: 'TemplateId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': AddAuthorityTemplateItemsRequestItems },
      templateId: 'number',
      tid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

