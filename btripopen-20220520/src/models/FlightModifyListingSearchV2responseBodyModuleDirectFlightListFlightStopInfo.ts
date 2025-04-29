// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightStopInfo extends $dara.Model {
  stopAirport?: string;
  stopArrTerm?: string;
  stopArrTime?: string;
  stopCityCode?: string;
  stopCityName?: string;
  stopDepTerm?: string;
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirport: 'stop_airport',
      stopArrTerm: 'stop_arr_term',
      stopArrTime: 'stop_arr_time',
      stopCityCode: 'stop_city_code',
      stopCityName: 'stop_city_name',
      stopDepTerm: 'stop_dep_term',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirport: 'string',
      stopArrTerm: 'string',
      stopArrTime: 'string',
      stopCityCode: 'string',
      stopCityName: 'string',
      stopDepTerm: 'string',
      stopDepTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

