// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReimbursementOrderResponseBodyModuleItineraries extends $dara.Model {
  arrCity?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  arrDate?: string;
  /**
   * @example
   * CTU
   */
  depCity?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  depDate?: string;
  trafficWay?: string;
  tripWay?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      depCity: 'dep_city',
      depDate: 'dep_date',
      trafficWay: 'traffic_way',
      tripWay: 'trip_way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrDate: 'string',
      depCity: 'string',
      depDate: 'string',
      trafficWay: 'string',
      tripWay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

