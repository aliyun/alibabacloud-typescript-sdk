// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CollectFlightLowestPriceRequestLowestPriceFlightInfoList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-11
   */
  departureDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CA123,CA456
   */
  departureFlightNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100.0
   */
  marketTotalPrice?: number;
  /**
   * @example
   * 123456789dacd
   */
  requestId?: string;
  /**
   * @example
   * 2024-11-11
   */
  returnDate?: string;
  /**
   * @example
   * CA123,CA456
   */
  returnFlightNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100.1
   */
  suezTotalPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalCity: 'arrival_city',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
      departureFlightNumber: 'departure_flight_number',
      marketTotalPrice: 'market_total_price',
      requestId: 'request_id',
      returnDate: 'return_date',
      returnFlightNumber: 'return_flight_number',
      solutionId: 'solution_id',
      suezTotalPrice: 'suez_total_price',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalCity: 'string',
      departureCity: 'string',
      departureDate: 'string',
      departureFlightNumber: 'string',
      marketTotalPrice: 'number',
      requestId: 'string',
      returnDate: 'string',
      returnFlightNumber: 'string',
      solutionId: 'string',
      suezTotalPrice: 'number',
      tripType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

