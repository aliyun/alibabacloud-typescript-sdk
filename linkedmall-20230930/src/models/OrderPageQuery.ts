// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderPageQuery extends $dara.Model {
  /**
   * @remarks
   * The collection of primary order IDs.
   */
  orderIdList?: string[];
  /**
   * @remarks
   * The external purchase order ID.
   * 
   * @example
   * 6692****56121
   */
  outPurchaseOrderId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The purchase order ID.
   * 
   * @example
   * 6692****5696
   */
  purchaseOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderIdList: 'orderIdList',
      outPurchaseOrderId: 'outPurchaseOrderId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      purchaseOrderId: 'purchaseOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIdList: { 'type': 'array', 'itemType': 'string' },
      outPurchaseOrderId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      purchaseOrderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderIdList)) {
      $dara.Model.validateArray(this.orderIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

