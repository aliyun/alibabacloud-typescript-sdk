// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModuleOrderItemListPassengerPriceList extends $dara.Model {
  /**
   * @example
   * 3.5
   */
  discount?: number;
  /**
   * @example
   * 3.5折
   */
  discountInfo?: string;
  /**
   * @example
   * 0
   */
  modifyFee?: number;
  /**
   * @example
   * 0
   */
  modifyTaxSpread?: number;
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 21300
   */
  sellPrice?: number;
  /**
   * @example
   * 19300
   */
  tax?: number;
  /**
   * @example
   * 2000
   */
  ticketPrice?: number;
  /**
   * @example
   * 0
   */
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      discount: 'discount',
      discountInfo: 'discount_info',
      modifyFee: 'modify_fee',
      modifyTaxSpread: 'modify_tax_spread',
      passengerType: 'passenger_type',
      sellPrice: 'sell_price',
      tax: 'tax',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discount: 'number',
      discountInfo: 'string',
      modifyFee: 'number',
      modifyTaxSpread: 'number',
      passengerType: 'number',
      sellPrice: 'number',
      tax: 'number',
      ticketPrice: 'number',
      upgradeFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

