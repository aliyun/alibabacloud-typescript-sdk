// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList extends $dara.Model {
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * 100
   */
  upgradeFee?: number;
  /**
   * @example
   * 100
   */
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      ticketPrice: 'ticket_price',
      upgradeFee: 'upgrade_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
      ticketPrice: 'number',
      upgradeFee: 'number',
      upgradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

