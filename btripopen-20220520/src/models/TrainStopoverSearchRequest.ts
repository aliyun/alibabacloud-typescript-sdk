// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainStopoverSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arrStation?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depStation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-05-08
   */
  trainDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k2345
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStation: 'arr_station',
      depStation: 'dep_station',
      trainDate: 'train_date',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStation: 'string',
      depStation: 'string',
      trainDate: 'string',
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

