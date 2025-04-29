// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyListingSearchV2RequestSelectedSegments extends $dara.Model {
  /**
   * @example
   * XIL
   */
  arrCityCode?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-09-17 18:15:00
   */
  depDateTime?: string;
  /**
   * @example
   * 0
   */
  journeySeq?: number;
  /**
   * @example
   * CA8625
   */
  marketingFlightNo?: string;
  /**
   * @example
   * MU8625
   */
  operatingFlightNo?: string;
  /**
   * @example
   * 0
   */
  segmentSeq?: number;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      depCityCode: 'dep_city_code',
      depDateTime: 'dep_date_time',
      journeySeq: 'journey_seq',
      marketingFlightNo: 'marketing_flight_no',
      operatingFlightNo: 'operating_flight_no',
      segmentSeq: 'segment_seq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      depCityCode: 'string',
      depDateTime: 'string',
      journeySeq: 'number',
      marketingFlightNo: 'string',
      operatingFlightNo: 'string',
      segmentSeq: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

