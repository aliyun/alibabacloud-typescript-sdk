// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1221031972475999
   */
  euid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 503041545
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      euid: 'euid',
      productName: 'productName',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      euid: 'string',
      productName: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

