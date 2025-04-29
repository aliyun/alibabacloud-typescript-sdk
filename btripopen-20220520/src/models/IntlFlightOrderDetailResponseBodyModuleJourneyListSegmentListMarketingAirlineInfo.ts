// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListMarketingAirlineInfo extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineName?: string;
  allianceName?: string;
  /**
   * @example
   * false
   */
  cheapAirline?: boolean;
  /**
   * @example
   * https://gw.alicdn.com/tfs/TB15EXDFHY1gK0jSZTEXXXDQVXa-450-450.png
   */
  iconUrl?: string;
  /**
   * @example
   * https://gw.alicdn.com/tfs/TB15EXDFHY1gK0jSZTEXXXDQVXa-450-450.png
   */
  logoUrl?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      allianceName: 'alliance_name',
      cheapAirline: 'cheap_airline',
      iconUrl: 'icon_url',
      logoUrl: 'logo_url',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      allianceName: 'string',
      cheapAirline: 'boolean',
      iconUrl: 'string',
      logoUrl: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

