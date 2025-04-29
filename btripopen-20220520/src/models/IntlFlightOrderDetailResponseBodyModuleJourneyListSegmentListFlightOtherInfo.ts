// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListFlightOtherInfo extends $dara.Model {
  /**
   * @example
   * 100
   */
  aircraftAge?: string;
  /**
   * @example
   * 10
   */
  avgDelayTime?: string;
  /**
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @example
   * 20
   */
  flightCancelRate?: string;
  /**
   * @example
   * 195
   */
  flightDistance?: number;
  /**
   * @example
   * 165
   */
  flightDuration?: number;
  flightSize?: string;
  /**
   * @example
   * 70
   */
  jetBridgeRate?: string;
  manufacturer?: string;
  /**
   * @example
   * 0
   */
  meal?: number;
  mealDesc?: string;
  /**
   * @example
   * 80
   */
  onTimeRate?: string;
  /**
   * @example
   * true
   */
  wifi?: boolean;
  static names(): { [key: string]: string } {
    return {
      aircraftAge: 'aircraft_age',
      avgDelayTime: 'avg_delay_time',
      equipType: 'equip_type',
      flightCancelRate: 'flight_cancel_rate',
      flightDistance: 'flight_distance',
      flightDuration: 'flight_duration',
      flightSize: 'flight_size',
      jetBridgeRate: 'jet_bridge_rate',
      manufacturer: 'manufacturer',
      meal: 'meal',
      mealDesc: 'meal_desc',
      onTimeRate: 'on_time_rate',
      wifi: 'wifi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aircraftAge: 'string',
      avgDelayTime: 'string',
      equipType: 'string',
      flightCancelRate: 'string',
      flightDistance: 'number',
      flightDuration: 'number',
      flightSize: 'string',
      jetBridgeRate: 'string',
      manufacturer: 'string',
      meal: 'number',
      mealDesc: 'string',
      onTimeRate: 'string',
      wifi: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

