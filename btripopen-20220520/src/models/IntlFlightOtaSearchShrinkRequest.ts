// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOtaSearchShrinkRequest extends $dara.Model {
  btripUserId?: string;
  buyerName?: string;
  cabinType?: number;
  isvName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneysShrink?: string;
  searchPassengerListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      cabinType: 'cabin_type',
      isvName: 'isv_name',
      searchJourneysShrink: 'search_journeys',
      searchPassengerListShrink: 'search_passenger_list',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      cabinType: 'number',
      isvName: 'string',
      searchJourneysShrink: 'string',
      searchPassengerListShrink: 'string',
      tripType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

