// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketListPriceInfo extends $dara.Model {
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
   * 26900
   */
  sellPrice?: number;
  /**
   * @example
   * 24900
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
      modifyFee: 'modify_fee',
      modifyTaxSpread: 'modify_tax_spread',
      sellPrice: 'sell_price',
      tax: 'tax',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyFee: 'number',
      modifyTaxSpread: 'number',
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

