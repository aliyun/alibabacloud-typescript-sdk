// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiResponseContractItems } from "./HttpApiResponseContractItems";


export class HttpApiResponseContract extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  items?: HttpApiResponseContractItems[];
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      items: { 'type': 'array', 'itemType': HttpApiResponseContractItems },
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

