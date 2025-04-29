// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDoList extends $dara.Model {
  arrAirportName?: string;
  arrCity?: string;
  arrCityName?: string;
  arrTime?: string;
  cabin?: string;
  cabinClass?: number;
  cabinClassStr?: string;
  depAirportName?: string;
  depCity?: string;
  depCityName?: string;
  depTime?: string;
  discount?: string;
  flightNo?: string;
  price?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      arrAirportName: 'arr_airport_name',
      arrCity: 'arr_city',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassStr: 'cabin_class_str',
      depAirportName: 'dep_airport_name',
      depCity: 'dep_city',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      discount: 'discount',
      flightNo: 'flight_no',
      price: 'price',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportName: 'string',
      arrCity: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'number',
      cabinClassStr: 'string',
      depAirportName: 'string',
      depCity: 'string',
      depCityName: 'string',
      depTime: 'string',
      discount: 'string',
      flightNo: 'string',
      price: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

