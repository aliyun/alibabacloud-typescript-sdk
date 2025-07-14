// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmenuItems extends $dara.Model {
  defaultSelected?: boolean;
  itemDesc?: string;
  itemType?: string;
  relatingItems?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultSelected: 'DefaultSelected',
      itemDesc: 'ItemDesc',
      itemType: 'ItemType',
      relatingItems: 'RelatingItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultSelected: 'boolean',
      itemDesc: 'string',
      itemType: 'string',
      relatingItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.relatingItems)) {
      $dara.Model.validateArray(this.relatingItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

