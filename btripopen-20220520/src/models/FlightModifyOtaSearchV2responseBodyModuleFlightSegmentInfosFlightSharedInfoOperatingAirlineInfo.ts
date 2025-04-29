// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightSharedInfoOperatingAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineChineseName?: string;
  airlineChineseShortName?: string;
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

