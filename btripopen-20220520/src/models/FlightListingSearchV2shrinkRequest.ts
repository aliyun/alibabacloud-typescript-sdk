// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightListingSearchV2ShrinkRequest extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  cabinTypeListShrink?: string;
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
  searchJourneysShrink?: string;
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
      cabinTypeListShrink: 'cabin_type_list',
      directOnly: 'direct_only',
      isvName: 'isv_name',
      needMultiClassPrice: 'need_multi_class_price',
      needQueryServiceFee: 'need_query_service_fee',
      needShareFlight: 'need_share_flight',
      needYCBestPrice: 'need_y_c_best_price',
      searchJourneysShrink: 'search_journeys',
      searchMode: 'search_mode',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      cabinTypeListShrink: 'string',
      directOnly: 'boolean',
      isvName: 'string',
      needMultiClassPrice: 'boolean',
      needQueryServiceFee: 'boolean',
      needShareFlight: 'boolean',
      needYCBestPrice: 'boolean',
      searchJourneysShrink: 'string',
      searchMode: 'number',
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

