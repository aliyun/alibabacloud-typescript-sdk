// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainNoInfoSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arrLocation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-08-15
   */
  depDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depLocation?: string;
  /**
   * @example
   * qwwweqswxxa
   */
  lineKey?: string;
  /**
   * @example
   * 2023-08-15
   */
  middleDate?: string;
  middleStation?: string;
  /**
   * @example
   * 12342123212
   */
  orderId?: string;
  /**
   * @example
   * K2345
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrLocation: 'arr_location',
      depDate: 'dep_date',
      depLocation: 'dep_location',
      lineKey: 'line_key',
      middleDate: 'middle_date',
      middleStation: 'middle_station',
      orderId: 'order_id',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrLocation: 'string',
      depDate: 'string',
      depLocation: 'string',
      lineKey: 'string',
      middleDate: 'string',
      middleStation: 'string',
      orderId: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

