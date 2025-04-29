// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleGroupItemSubItemsShoppingItemMapValueSearchPrice } from "./ModuleGroupItemSubItemsShoppingItemMapValueSearchPrice";


export class ModuleGroupItemSubItemsShoppingItemMapValue extends $dara.Model {
  searchPrice?: ModuleGroupItemSubItemsShoppingItemMapValueSearchPrice;
  static names(): { [key: string]: string } {
    return {
      searchPrice: 'search_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchPrice: ModuleGroupItemSubItemsShoppingItemMapValueSearchPrice,
    };
  }

  validate() {
    if(this.searchPrice && typeof (this.searchPrice as any).validate === 'function') {
      (this.searchPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

