// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProductRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * el3SzmCU2p0x4RBc
   */
  productKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 235454102432001
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
      productKey: 'productKey',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
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

