// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketCreateOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  contactShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  distributorOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderProductShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  totalDistributionPriceShrink?: string;
  travelersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      contactShrink: 'Contact',
      distributorOrderId: 'DistributorOrderId',
      orderProductShrink: 'OrderProduct',
      quantity: 'Quantity',
      totalDistributionPriceShrink: 'TotalDistributionPrice',
      travelersShrink: 'Travelers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      contactShrink: 'string',
      distributorOrderId: 'string',
      orderProductShrink: 'string',
      quantity: 'number',
      totalDistributionPriceShrink: 'string',
      travelersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

