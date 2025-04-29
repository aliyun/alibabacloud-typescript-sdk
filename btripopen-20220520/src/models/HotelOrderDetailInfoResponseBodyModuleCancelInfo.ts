// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderDetailInfoResponseBodyModuleCancelInfo extends $dara.Model {
  /**
   * @example
   * 2022-01-29
   */
  cancelEndTime?: string;
  /**
   * @example
   * 2022-01-29
   */
  cancelStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      cancelEndTime: 'cancel_end_time',
      cancelStartTime: 'cancel_start_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelEndTime: 'string',
      cancelStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

