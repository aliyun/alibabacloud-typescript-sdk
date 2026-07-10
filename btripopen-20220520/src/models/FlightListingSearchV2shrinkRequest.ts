// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightListingSearchV2ShrinkRequest extends $dara.Model {
  airlineCode?: string;
  cabinTypeListShrink?: string;
  directOnly?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  isvName?: string;
  needMultiClassPrice?: boolean;
  needQueryServiceFee?: boolean;
  needShareFlight?: boolean;
  needYCBestPrice?: boolean;
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
  /**
   * @remarks
   * This parameter is required.
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

