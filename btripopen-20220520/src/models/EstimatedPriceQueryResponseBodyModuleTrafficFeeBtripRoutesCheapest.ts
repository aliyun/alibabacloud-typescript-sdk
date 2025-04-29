// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesCheapest extends $dara.Model {
  /**
   * @example
   * 00:40
   */
  arrTime?: string;
  /**
   * @example
   * 22:20
   */
  depTime?: string;
  /**
   * @example
   * 30100
   */
  fee?: number;
  seatGrade?: string;
  /**
   * @example
   * MU9668
   */
  vehicleNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      fee: 'fee',
      seatGrade: 'seat_grade',
      vehicleNo: 'vehicle_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      fee: 'number',
      seatGrade: 'string',
      vehicleNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

