// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOtaSearchV2ResponseBodyModulePassengerCount extends $dara.Model {
  /**
   * @example
   * 1
   */
  adultPassengerNum?: number;
  /**
   * @example
   * 0
   */
  childPassengerNum?: number;
  /**
   * @example
   * 0
   */
  infantPassengerNum?: number;
  static names(): { [key: string]: string } {
    return {
      adultPassengerNum: 'adult_passenger_num',
      childPassengerNum: 'child_passenger_num',
      infantPassengerNum: 'infant_passenger_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPassengerNum: 'number',
      childPassengerNum: 'number',
      infantPassengerNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

