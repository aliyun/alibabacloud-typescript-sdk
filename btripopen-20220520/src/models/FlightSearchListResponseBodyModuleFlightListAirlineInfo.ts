// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightSearchListResponseBodyModuleFlightListAirlineInfo extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  airlineName?: string;
  airlineSimpleName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      airlineSimpleName: 'airline_simple_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      airlineSimpleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

