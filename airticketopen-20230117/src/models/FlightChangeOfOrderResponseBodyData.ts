// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightChangeOfOrderResponseBodyDataFlightChangeDetail } from "./FlightChangeOfOrderResponseBodyDataFlightChangeDetail";


export class FlightChangeOfOrderResponseBodyData extends $dara.Model {
  flightChangeDetail?: FlightChangeOfOrderResponseBodyDataFlightChangeDetail;
  /**
   * @example
   * 4966***617111
   */
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      flightChangeDetail: 'flight_change_detail',
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightChangeDetail: FlightChangeOfOrderResponseBodyDataFlightChangeDetail,
      orderNum: 'number',
    };
  }

  validate() {
    if(this.flightChangeDetail && typeof (this.flightChangeDetail as any).validate === 'function') {
      (this.flightChangeDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

