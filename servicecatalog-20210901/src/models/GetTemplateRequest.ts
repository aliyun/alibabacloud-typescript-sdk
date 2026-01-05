// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the product.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * The ID of the product version.
   * 
   * This parameter is required.
   * 
   * @example
   * pv-bp15e79d26****
   */
  productVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
      productVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

