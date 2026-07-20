// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOtaSearchRequest extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * CA2324
   */
  carrierFlightNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-08-15 19:30:00
   */
  depDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CA2323
   */
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      arrCityCode: 'arr_city_code',
      cabinClass: 'cabin_class',
      carrierFlightNo: 'carrier_flight_no',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      arrCityCode: 'string',
      cabinClass: 'string',
      carrierFlightNo: 'string',
      depCityCode: 'string',
      depDate: 'string',
      flightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

