// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightListingSearchShrinkRequest extends $dara.Model {
  btripUserId?: string;
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cabinType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  isvName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outWheelSearch?: boolean;
  queryRecordId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneysShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchMode?: number;
  searchPassengerListShrink?: string;
  token?: string;
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
      outWheelSearch: 'out_wheel_search',
      queryRecordId: 'query_record_id',
      searchJourneysShrink: 'search_journeys',
      searchMode: 'search_mode',
      searchPassengerListShrink: 'search_passenger_list',
      token: 'token',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      cabinType: 'number',
      isvName: 'string',
      outWheelSearch: 'boolean',
      queryRecordId: 'string',
      searchJourneysShrink: 'string',
      searchMode: 'number',
      searchPassengerListShrink: 'string',
      token: 'string',
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

