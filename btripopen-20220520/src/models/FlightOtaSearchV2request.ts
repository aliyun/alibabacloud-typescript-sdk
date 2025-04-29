// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchV2RequestSearchJourneys } from "./FlightOtaSearchV2requestSearchJourneys";


export class FlightOtaSearchV2Request extends $dara.Model {
  cabinTypeList?: number[];
  /**
   * @example
   * true
   */
  directOnly?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cheshi
   */
  isvName?: string;
  /**
   * @example
   * true
   */
  needShareFlight?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneys?: FlightOtaSearchV2RequestSearchJourneys[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  searchMode?: number;
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
      cabinTypeList: 'cabin_type_list',
      directOnly: 'direct_only',
      isvName: 'isv_name',
      needShareFlight: 'need_share_flight',
      searchJourneys: 'search_journeys',
      searchMode: 'search_mode',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinTypeList: { 'type': 'array', 'itemType': 'number' },
      directOnly: 'boolean',
      isvName: 'string',
      needShareFlight: 'boolean',
      searchJourneys: { 'type': 'array', 'itemType': FlightOtaSearchV2RequestSearchJourneys },
      searchMode: 'number',
      tripType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cabinTypeList)) {
      $dara.Model.validateArray(this.cabinTypeList);
    }
    if(Array.isArray(this.searchJourneys)) {
      $dara.Model.validateArray(this.searchJourneys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

