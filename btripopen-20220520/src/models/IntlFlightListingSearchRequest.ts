// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightListingSearchRequestSearchJourneys } from "./IntlFlightListingSearchRequestSearchJourneys";
import { IntlFlightListingSearchRequestSearchPassengerList } from "./IntlFlightListingSearchRequestSearchPassengerList";


export class IntlFlightListingSearchRequest extends $dara.Model {
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
  searchJourneys?: IntlFlightListingSearchRequestSearchJourneys[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  searchMode?: number;
  searchPassengerList?: IntlFlightListingSearchRequestSearchPassengerList[];
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
      searchJourneys: 'search_journeys',
      searchMode: 'search_mode',
      searchPassengerList: 'search_passenger_list',
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
      searchJourneys: { 'type': 'array', 'itemType': IntlFlightListingSearchRequestSearchJourneys },
      searchMode: 'number',
      searchPassengerList: { 'type': 'array', 'itemType': IntlFlightListingSearchRequestSearchPassengerList },
      token: 'string',
      tripType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchJourneys)) {
      $dara.Model.validateArray(this.searchJourneys);
    }
    if(Array.isArray(this.searchPassengerList)) {
      $dara.Model.validateArray(this.searchPassengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

