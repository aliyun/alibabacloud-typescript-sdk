// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightListingSearchV2RequestSearchJourneys } from "./FlightListingSearchV2requestSearchJourneys";


export class FlightListingSearchV2Request extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
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
   * false
   */
  needMultiClassPrice?: boolean;
  /**
   * @example
   * true
   */
  needQueryServiceFee?: boolean;
  /**
   * @example
   * true
   */
  needShareFlight?: boolean;
  /**
   * @example
   * false
   */
  needYCBestPrice?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneys?: FlightListingSearchV2RequestSearchJourneys[];
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
      airlineCode: 'airline_code',
      cabinTypeList: 'cabin_type_list',
      directOnly: 'direct_only',
      isvName: 'isv_name',
      needMultiClassPrice: 'need_multi_class_price',
      needQueryServiceFee: 'need_query_service_fee',
      needShareFlight: 'need_share_flight',
      needYCBestPrice: 'need_y_c_best_price',
      searchJourneys: 'search_journeys',
      searchMode: 'search_mode',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      cabinTypeList: { 'type': 'array', 'itemType': 'number' },
      directOnly: 'boolean',
      isvName: 'string',
      needMultiClassPrice: 'boolean',
      needQueryServiceFee: 'boolean',
      needShareFlight: 'boolean',
      needYCBestPrice: 'boolean',
      searchJourneys: { 'type': 'array', 'itemType': FlightListingSearchV2RequestSearchJourneys },
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

