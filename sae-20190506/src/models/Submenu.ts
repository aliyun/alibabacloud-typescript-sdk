// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmenuItems } from "./SubmenuItems";


export class Submenu extends $dara.Model {
  items?: SubmenuItems[];
  submenuDesc?: string;
  submenuType?: string;
  submenus?: Submenu[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      submenuDesc: 'SubmenuDesc',
      submenuType: 'SubmenuType',
      submenus: 'Submenus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': SubmenuItems },
      submenuDesc: 'string',
      submenuType: 'string',
      submenus: { 'type': 'array', 'itemType': Submenu },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(Array.isArray(this.submenus)) {
      $dara.Model.validateArray(this.submenus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

