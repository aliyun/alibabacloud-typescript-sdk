// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightSearchListResponseBodyModuleFlightListDepAirportInfo extends $dara.Model {
  /**
   * @example
   * PEK
   */
  airportCode?: string;
  airportName?: string;
  /**
   * @example
   * BJS
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * T3
   */
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      cityCode: 'city_code',
      cityName: 'city_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      cityCode: 'string',
      cityName: 'string',
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

