// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOtaSearchV2RequestSelectedSegments extends $dara.Model {
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * XIL
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-09-18 09:10:00
   */
  depDateTime?: string;
  /**
   * @example
   * 0
   */
  journeySeq?: number;
  /**
   * @example
   * CA1110
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

