// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaSearchRequestSearchJourneys } from "./IntlFlightOtaSearchRequestSearchJourneys";
import { IntlFlightOtaSearchRequestSearchPassengerList } from "./IntlFlightOtaSearchRequestSearchPassengerList";


export class IntlFlightOtaSearchRequest extends $dara.Model {
  /**
   * @example
   * 10023
   */
  btripUserId?: string;
  buyerName?: string;
  /**
   * @example
   * 0
   */
  cabinType?: number;
  /**
   * @example
   * open12igetbis4o07v10B1TlOWcM00
   */
  isvName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneys?: IntlFlightOtaSearchRequestSearchJourneys[];
  searchPassengerList?: IntlFlightOtaSearchRequestSearchPassengerList[];
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
      searchJourneys: 'search_journeys',
      searchPassengerList: 'search_passenger_list',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      cabinType: 'number',
      isvName: 'string',
      searchJourneys: { 'type': 'array', 'itemType': IntlFlightOtaSearchRequestSearchJourneys },
      searchPassengerList: { 'type': 'array', 'itemType': IntlFlightOtaSearchRequestSearchPassengerList },
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

