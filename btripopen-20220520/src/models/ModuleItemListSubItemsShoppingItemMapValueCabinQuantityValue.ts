// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleItemListSubItemsShoppingItemMapValueCabinQuantityValue extends $dara.Model {
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
  /**
   * @example
   * 经济舱
   */
  cabinClassName?: string;
  /**
   * @example
   * 舱位等级描述
   */
  cabinClassMemo?: string;
  /**
   * @example
   * 国内特殊说明
   */
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
  /**
   * @example
   * 儿童舱位类型
   */
  childCabinType?: number;
  /**
   * @example
   * 婴儿基准舱位
   */
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

