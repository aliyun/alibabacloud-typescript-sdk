// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightExceedApplyQueryResponseBodyModuleApplyRecommendFlights extends $dara.Model {
  arrAirportName?: string;
  arrCityName?: string;
  arrTime?: string;
  cabin?: string;
  cabinClass?: number;
  cabinClassStr?: string;
  depAirportName?: string;
  depCityName?: string;
  depTime?: string;
  discount?: string;
  flightNo?: string;
  price?: number;
  transferAirportName?: string;
  static names(): { [key: string]: string } {
    return {
      arrAirportName: 'arr_airport_name',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassStr: 'cabin_class_str',
      depAirportName: 'dep_airport_name',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      discount: 'discount',
      flightNo: 'flight_no',
      price: 'price',
      transferAirportName: 'transfer_airport_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportName: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'number',
      cabinClassStr: 'string',
      depAirportName: 'string',
      depCityName: 'string',
      depTime: 'string',
      discount: 'string',
      flightNo: 'string',
      price: 'number',
      transferAirportName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

