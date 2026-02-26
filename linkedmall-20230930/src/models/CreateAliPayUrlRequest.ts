// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAliPayUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  shopId?: string;
  static names(): { [key: string]: string } {
    return {
      shopId: 'shopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shopId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

