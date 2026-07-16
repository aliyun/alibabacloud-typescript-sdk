// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModulePriceMapValue extends $dara.Model {
  /**
   * @example
   * 10000
   */
  price?: number;
  /**
   * @example
   * MU1234
   */
  serviceNo?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
      serviceNo: 'service_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'number',
      serviceNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

