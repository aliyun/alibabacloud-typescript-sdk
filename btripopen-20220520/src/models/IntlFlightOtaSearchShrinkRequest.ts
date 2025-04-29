// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOtaSearchShrinkRequest extends $dara.Model {
  /**
   * @example
   * 10023
   */
  btripUserId?: string;
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
   * @example
   * false
   */
  directOnly?: boolean;
  /**
   * @example
   * open12igetbis4o07v10B1TlOWcM00
   */
  isvName?: string;
  language?: string;
  /**
   * @example
   * true
   */
  needShareFlight?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneysShrink?: string;
  searchPassengerListShrink?: string;
  /**
   * @example
   * TEST
   */
  supplierCode?: string;
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
      directOnly: 'direct_only',
      isvName: 'isv_name',
      language: 'language',
      needShareFlight: 'need_share_flight',
      searchJourneysShrink: 'search_journeys',
      searchPassengerListShrink: 'search_passenger_list',
      supplierCode: 'supplier_code',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      cabinType: 'number',
      directOnly: 'boolean',
      isvName: 'string',
      language: 'string',
      needShareFlight: 'boolean',
      searchJourneysShrink: 'string',
      searchPassengerListShrink: 'string',
      supplierCode: 'string',
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

