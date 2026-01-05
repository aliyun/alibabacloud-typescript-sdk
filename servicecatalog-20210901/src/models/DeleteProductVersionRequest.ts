// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProductVersionRequest extends $dara.Model {
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
      productVersionId: 'ProductVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

