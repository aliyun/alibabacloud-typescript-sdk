// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoCabinClassInfo extends $dara.Model {
  cabinClass?: string;
  className?: string;
  /**
   * @remarks
   * inner_cabin_class
   * 
   * @example
   * 1
   */
  innerCabinClass?: number;
  quantity?: string;
  static names(): { [key: string]: string } {
    return {
      cabinClass: 'cabin_class',
      className: 'class_name',
      innerCabinClass: 'inner_cabin_class',
      quantity: 'quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClass: 'string',
      className: 'string',
      innerCabinClass: 'number',
      quantity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

