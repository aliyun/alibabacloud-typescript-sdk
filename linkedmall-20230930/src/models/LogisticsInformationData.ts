// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogisticsInformationData extends $dara.Model {
  /**
   * @example
   * 1
   */
  logisticsStatus?: string;
  /**
   * @example
   * 1713407100321
   */
  modifiedTime?: string;
  /**
   * @example
   * 6696070566****8593
   */
  orderId?: string;
  /**
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @example
   * 233111
   */
  outerPurchaseOrderId?: string;
  /**
   * @example
   * PID22000009
   */
  purchaserId?: string;
  /**
   * @example
   * SF
   */
  trackingCompanyCode?: string;
  trackingCompanyName?: string;
  /**
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

