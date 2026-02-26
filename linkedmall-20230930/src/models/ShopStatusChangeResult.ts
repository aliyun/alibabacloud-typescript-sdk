// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShopStatusChangeResult extends $dara.Model {
  /**
   * @example
   * true
   */
  operate?: boolean;
  static names(): { [key: string]: string } {
    return {
      operate: 'operate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

