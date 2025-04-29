// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest } from "./EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest";
import { EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive } from "./EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive";


export class EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutes extends $dara.Model {
  arrCity?: string;
  arrDate?: number;
  cheapest?: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest;
  depCity?: string;
  depDate?: number;
  /**
   * @example
   * demo
   */
  errMsg?: string;
  /**
   * @example
   * 1245
   */
  itineraryId?: string;
  mostExpensive?: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      cheapest: 'cheapest',
      depCity: 'dep_city',
      depDate: 'dep_date',
      errMsg: 'err_msg',
      itineraryId: 'itinerary_id',
      mostExpensive: 'most_expensive',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrDate: 'number',
      cheapest: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest,
      depCity: 'string',
      depDate: 'number',
      errMsg: 'string',
      itineraryId: 'string',
      mostExpensive: EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive,
      success: 'boolean',
    };
  }

  validate() {
    if(this.cheapest && typeof (this.cheapest as any).validate === 'function') {
      (this.cheapest as any).validate();
    }
    if(this.mostExpensive && typeof (this.mostExpensive as any).validate === 'function') {
      (this.mostExpensive as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

