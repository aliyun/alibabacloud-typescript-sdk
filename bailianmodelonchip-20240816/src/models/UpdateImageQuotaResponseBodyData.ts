// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageQuotaResponseBodyData extends $dara.Model {
  /**
   * @example
   * FlUHDd8ol1yRmA92
   */
  orderId?: string;
  /**
   * @example
   * 2oImhCz4f8XCviiM
   */
  productKey?: string;
  productName?: string;
  /**
   * @example
   * 520539530998273
   */
  tenantId?: string;
  /**
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'orderId',
      productKey: 'productKey',
      productName: 'productName',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

