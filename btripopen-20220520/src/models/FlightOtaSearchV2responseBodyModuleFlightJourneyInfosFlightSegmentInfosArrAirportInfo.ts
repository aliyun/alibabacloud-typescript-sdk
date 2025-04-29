// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo extends $dara.Model {
  /**
   * @example
   * PKX
   */
  airportCode?: string;
  airportName?: string;
  /**
   * @example
   * #FF7300
   */
  airportNameColor?: string;
  airportShortName?: string;
  /**
   * @example
   * --
   */
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportNameColor: 'airport_name_color',
      airportShortName: 'airport_short_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      airportNameColor: 'string',
      airportShortName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

