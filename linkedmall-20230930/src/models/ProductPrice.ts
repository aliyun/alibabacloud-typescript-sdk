// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductPrice extends $dara.Model {
  /**
   * @example
   * 120
   */
  fundAmountMoney?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmountMoney: 'fundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmountMoney: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

