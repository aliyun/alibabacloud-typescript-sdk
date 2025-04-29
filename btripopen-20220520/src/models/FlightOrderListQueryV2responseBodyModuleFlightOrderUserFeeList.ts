// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModuleFlightOrderUserFeeList extends $dara.Model {
  buildFee?: number;
  corpPayAmount?: number;
  oilFee?: number;
  personPayAmount?: number;
  ticketPrice?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      buildFee: 'build_fee',
      corpPayAmount: 'corp_pay_amount',
      oilFee: 'oil_fee',
      personPayAmount: 'person_pay_amount',
      ticketPrice: 'ticket_price',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildFee: 'number',
      corpPayAmount: 'number',
      oilFee: 'number',
      personPayAmount: 'number',
      ticketPrice: 'number',
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

