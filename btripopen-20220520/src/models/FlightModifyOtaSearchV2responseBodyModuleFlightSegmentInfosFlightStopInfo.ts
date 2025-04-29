// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfosFlightStopInfo extends $dara.Model {
  stopCityName?: string;
  stopArrTime?: string;
  stopDepTime?: string;
  stopCityCode?: string;
  stopAirport?: string;
  stopArrTerm?: string;
  stopDepTerm?: string;
  static names(): { [key: string]: string } {
    return {
      stopCityName: 'stop_city_name',
      stopArrTime: 'stop_arr_time',
      stopDepTime: 'stop_dep_time',
      stopCityCode: 'stop_city_code',
      stopAirport: 'stop_airport',
      stopArrTerm: 'stop_arr_term',
      stopDepTerm: 'stop_dep_term',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopCityName: 'string',
      stopArrTime: 'string',
      stopDepTime: 'string',
      stopCityCode: 'string',
      stopAirport: 'string',
      stopArrTerm: 'string',
      stopDepTerm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

