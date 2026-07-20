// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOtaSearchV2ShrinkRequest extends $dara.Model {
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
   * true
   */
  needShareFlight?: boolean;
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
      cabinTypeListShrink: 'cabin_type_list',
      directOnly: 'direct_only',
      isvName: 'isv_name',
      needShareFlight: 'need_share_flight',
      searchJourneysShrink: 'search_journeys',
      searchMode: 'search_mode',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinTypeListShrink: 'string',
      directOnly: 'boolean',
      isvName: 'string',
      needShareFlight: 'boolean',
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

