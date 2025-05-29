// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProductQuotaPageRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 2oImhCz4f8XCviiM
   */
  productKey?: string;
  productName?: string;
  /**
   * @example
   * 2025-04-01 00:00:00
   */
  purchaseTimeEnd?: string;
  /**
   * @example
   * 2025-03-01 00:00:00
   */
  purchaseTimeStart?: string;
  /**
   * @example
   * 1
   */
  purchaseType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 628103740287873
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
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      productKey: 'productKey',
      productName: 'productName',
      purchaseTimeEnd: 'purchaseTimeEnd',
      purchaseTimeStart: 'purchaseTimeStart',
      purchaseType: 'purchaseType',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      productKey: 'string',
      productName: 'string',
      purchaseTimeEnd: 'string',
      purchaseTimeStart: 'string',
      purchaseType: 'number',
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

