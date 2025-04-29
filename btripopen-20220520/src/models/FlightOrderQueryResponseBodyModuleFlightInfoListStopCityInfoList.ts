// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoListStopAirportCityCounty } from "./FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoListStopAirportCityCounty";


export class FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoList extends $dara.Model {
  stopAirportCityCounty?: FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoListStopAirportCityCounty;
  stopAirportCode?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirportCityCounty: 'stop_airport_city_county',
      stopAirportCode: 'stop_airport_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirportCityCounty: FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoListStopAirportCityCounty,
      stopAirportCode: 'string',
    };
  }

  validate() {
    if(this.stopAirportCityCounty && typeof (this.stopAirportCityCounty as any).validate === 'function') {
      (this.stopAirportCityCounty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

