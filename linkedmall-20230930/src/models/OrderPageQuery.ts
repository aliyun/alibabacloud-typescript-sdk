// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderPageQuery extends $dara.Model {
  orderIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 6692****5696
   */
  purchaseOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderIdList: 'orderIdList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      purchaseOrderId: 'purchaseOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIdList: { 'type': 'array', 'itemType': 'string' },
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

