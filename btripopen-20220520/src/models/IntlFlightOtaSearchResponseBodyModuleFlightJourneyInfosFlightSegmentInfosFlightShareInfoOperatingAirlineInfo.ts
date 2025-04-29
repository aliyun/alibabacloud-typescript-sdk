// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  airlineChineseName?: string;
  airlineChineseShortName?: string;
  /**
   * @example
   * DR
   */
  airlineCode?: string;
  /**
   * @example
   * https://gw.alicdn.com/tfs/TB1gSXBFUT1gK0jSZFhXXaAtVXa-450-450.png_80x80.jpg
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

