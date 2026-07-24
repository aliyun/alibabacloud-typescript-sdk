// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CollectFlightLowestPriceRequestLowestPriceFlightInfoList extends $dara.Model {
  /**
   * @remarks
   * The arrival city.
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * The departure city.
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * The departure date. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-11-11
   */
  departureDate?: string;
  /**
   * @remarks
   * The list of outbound flight numbers. Multiple segments are split by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * CA123,CA456
   */
  departureFlightNumber?: string;
  /**
   * @remarks
   * The lowest competitor price in the market, including fare and taxes. The currency is USD.
   * 
   * This parameter is required.
   * 
   * @example
   * 100.0
   */
  marketTotalPrice?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 123456789dacd
   */
  requestId?: string;
  /**
   * @remarks
   * The return date for round-trip scenarios. Format: yyyy-MM-dd.
   * 
   * @example
   * 2024-11-11
   */
  returnDate?: string;
  /**
   * @remarks
   * The list of return flight numbers. Multiple segments are split by commas (,).
   * 
   * @example
   * CA123,CA456
   */
  returnFlightNumber?: string;
  /**
   * @remarks
   * The solution_id returned by Search/Enrich.
   * 
   * This parameter is required.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  /**
   * @remarks
   * The Suez quoted price, including fare and taxes. The currency is USD.
   * 
   * This parameter is required.
   * 
   * @example
   * 100.1
   */
  suezTotalPrice?: number;
  /**
   * @remarks
   * The trip type. Valid values:
   * - 1: one-way
   * - 2: round-trip.
   * 
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

export class CollectFlightLowestPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The lowest-price flight information.
   * 
   * This parameter is required.
   */
  lowestPriceFlightInfoList?: CollectFlightLowestPriceRequestLowestPriceFlightInfoList[];
  static names(): { [key: string]: string } {
    return {
      lowestPriceFlightInfoList: 'lowest_price_flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lowestPriceFlightInfoList: { 'type': 'array', 'itemType': CollectFlightLowestPriceRequestLowestPriceFlightInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.lowestPriceFlightInfoList)) {
      $dara.Model.validateArray(this.lowestPriceFlightInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

