// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightListingSearchShrinkRequest extends $dara.Model {
  /**
   * @example
   * 10001
   */
  btripUserId?: string;
  /**
   * @example
   * ZHANGSAN
   */
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  cabinType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  isvName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  outWheelSearch?: boolean;
  /**
   * @example
   * 60b412-cc05-4d10-b570-
   */
  queryRecordId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneysShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  searchMode?: number;
  searchPassengerListShrink?: string;
  /**
   * @example
   * 9960b412-cc05-4d10-b570-93372d816807
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
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

