// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProvisionedProductRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the product instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pp-bp1ddg1n2a****
   */
  provisionedProductId?: string;
  static names(): { [key: string]: string } {
    return {
      provisionedProductId: 'ProvisionedProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provisionedProductId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

