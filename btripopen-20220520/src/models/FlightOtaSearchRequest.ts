// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOtaSearchRequest extends $dara.Model {
  airlineCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  arrCityCode?: string;
  cabinClass?: string;
  carrierFlightNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depDate?: string;
  /**
   * @remarks
   * This parameter is required.
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

