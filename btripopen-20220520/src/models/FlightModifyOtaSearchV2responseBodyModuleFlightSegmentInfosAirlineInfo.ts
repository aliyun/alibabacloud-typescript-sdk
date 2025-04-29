// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosAirlineInfo extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  airlineChineseName?: string;
  airlineChineseShortName?: string;
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
      airlineCode: 'airline_code',
      airlineChineseName: 'airline_chinese_name',
      airlineChineseShortName: 'airline_chinese_short_name',
      airlineIcon: 'airline_icon',
      cheapFlight: 'cheap_flight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineChineseName: 'string',
      airlineChineseShortName: 'string',
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

