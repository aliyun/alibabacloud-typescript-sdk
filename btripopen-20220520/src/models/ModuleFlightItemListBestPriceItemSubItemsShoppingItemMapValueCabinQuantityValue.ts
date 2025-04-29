// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValueCabinQuantityValue extends $dara.Model {
  /**
   * @example
   * R
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  cabinClassName?: string;
  cabinClassMemo?: string;
  specification?: string;
  /**
   * @example
   * A
   */
  quantity?: string;
  linkCabins?: string[];
  /**
   * @example
   * false
   */
  reshopChangeCabin?: boolean;
  childCabinType?: number;
  infantBasicCabin?: string;
  /**
   * @example
   * 2
   */
  innerCabinClass?: number;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      cabinClassMemo: 'cabin_class_memo',
      specification: 'specification',
      quantity: 'quantity',
      linkCabins: 'link_cabins',
      reshopChangeCabin: 'reshop_change_cabin',
      childCabinType: 'child_cabin_type',
      infantBasicCabin: 'infant_basic_cabin',
      innerCabinClass: 'inner_cabin_class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      cabinClassMemo: 'string',
      specification: 'string',
      quantity: 'string',
      linkCabins: { 'type': 'array', 'itemType': 'string' },
      reshopChangeCabin: 'boolean',
      childCabinType: 'number',
      infantBasicCabin: 'string',
      innerCabinClass: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.linkCabins)) {
      $dara.Model.validateArray(this.linkCabins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

