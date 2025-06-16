// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRequestAirLegs extends $dara.Model {
  /**
   * @remarks
   * arrival airport [IATA airport code] list
   * 
   * @example
   * MFM
   */
  arrivalAirportList?: string[];
  /**
   * @remarks
   * arrival city code
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * departure airport [IATA airport code] list
   * 
   * @example
   * PVG
   */
  departureAirportList?: string[];
  /**
   * @remarks
   * departure city code
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure date (eg: yyyyMMdd)
   * 
   * This parameter is required.
   * 
   * @example
   * 20230310
   */
  departureDate?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirportList: 'arrival_airport_list',
      arrivalCity: 'arrival_city',
      departureAirportList: 'departure_airport_list',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirportList: { 'type': 'array', 'itemType': 'string' },
      arrivalCity: 'string',
      departureAirportList: { 'type': 'array', 'itemType': 'string' },
      departureCity: 'string',
      departureDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arrivalAirportList)) {
      $dara.Model.validateArray(this.arrivalAirportList);
    }
    if(Array.isArray(this.departureAirportList)) {
      $dara.Model.validateArray(this.departureAirportList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

