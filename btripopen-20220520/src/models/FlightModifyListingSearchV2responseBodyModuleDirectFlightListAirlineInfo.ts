// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListAirlineInfo extends $dara.Model {
  airlineChineseName?: string;
  airlineChineseShortName?: string;
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @example
   * //gw.alicdn.com/tfs/TB12fJAFHr1gK0jSZR0XXbP8XXa-450-450.png_80x80.jpg
   */
  airlineIcon?: string;
  /**
   * @example
   * false
   */
  cheapFlight?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineChineseName: 'airline_chinese_name',
      airlineChineseShortName: 'airline_chinese_short_name',
      airlineCode: 'airline_code',
      airlineIcon: 'airline_icon',
      cheapFlight: 'cheap_flight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineChineseName: 'string',
      airlineChineseShortName: 'string',
      airlineCode: 'string',
      airlineIcon: 'string',
      cheapFlight: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

