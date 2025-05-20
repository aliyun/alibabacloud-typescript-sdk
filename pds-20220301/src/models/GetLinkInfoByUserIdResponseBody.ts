// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccountLinkInfo } from "./AccountLinkInfo";


export class GetLinkInfoByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the users.
   */
  items?: AccountLinkInfo[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': AccountLinkInfo },
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

