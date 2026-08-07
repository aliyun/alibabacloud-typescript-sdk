// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableCheckProductRequest extends $dara.Model {
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

