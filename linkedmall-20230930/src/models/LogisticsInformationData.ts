// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogisticsInformationData extends $dara.Model {
  /**
   * @remarks
   * The logistics status. A value of 2 indicates that the order is shipped and awaits the buyer\\"s confirmation of receipt.
   * 
   * @example
   * 1
   */
  logisticsStatus?: string;
  /**
   * @remarks
   * The time when the information was last updated, in yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 1713407100321
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 6696070566****8593
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the order line.
   * 
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @remarks
   * The external ID of the purchase order, provided upon creation.
   * 
   * @example
   * 233111
   */
  outerPurchaseOrderId?: string;
  /**
   * @remarks
   * The ID of the purchaser.
   * 
   * @example
   * PID22000009
   */
  purchaserId?: string;
  /**
   * @remarks
   * The code of the logistics company.
   * 
   * @example
   * SF
   */
  trackingCompanyCode?: string;
  /**
   * @remarks
   * The name of the logistics company.
   * 
   * @example
   * 顺丰快递
   */
  trackingCompanyName?: string;
  /**
   * @remarks
   * The tracking number.
   * 
   * @example
   * SF198913131
   */
  trackingNumber?: string;
  static names(): { [key: string]: string } {
    return {
      logisticsStatus: 'logisticsStatus',
      modifiedTime: 'modifiedTime',
      orderId: 'orderId',
      orderLineId: 'orderLineId',
      outerPurchaseOrderId: 'outerPurchaseOrderId',
      purchaserId: 'purchaserId',
      trackingCompanyCode: 'trackingCompanyCode',
      trackingCompanyName: 'trackingCompanyName',
      trackingNumber: 'trackingNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsStatus: 'string',
      modifiedTime: 'string',
      orderId: 'string',
      orderLineId: 'string',
      outerPurchaseOrderId: 'string',
      purchaserId: 'string',
      trackingCompanyCode: 'string',
      trackingCompanyName: 'string',
      trackingNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

