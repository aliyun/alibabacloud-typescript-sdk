// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightPayOrderV2ResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 51000
   */
  price?: number;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

