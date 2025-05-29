// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProductResponseBodyData extends $dara.Model {
  /**
   * @example
   * el3SzmCU2p0x4RBc
   */
  productKey?: string;
  /**
   * @example
   * btripOpen
   */
  productName?: string;
  /**
   * @example
   * 355806813982786
   */
  tenantId?: string;
  /**
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'productKey',
      productName: 'productName',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
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

