// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedPriceQueryResponseBodyModuleTrafficFeeBtripRoutesMostExpensive extends $dara.Model {
  /**
   * @example
   * 19:20
   */
  arrTime?: string;
  /**
   * @example
   * 17:00
   */
  depTime?: string;
  /**
   * @example
   * 265000
   */
  fee?: number;
  seatGrade?: string;
  /**
   * @example
   * CA1721
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

