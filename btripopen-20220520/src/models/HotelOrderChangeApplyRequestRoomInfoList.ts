// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderChangeApplyRequestRoomInfoList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cancelDate?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 112
   */
  roomNo?: number;
  static names(): { [key: string]: string } {
    return {
      cancelDate: 'cancel_date',
      roomNo: 'room_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelDate: { 'type': 'array', 'itemType': 'string' },
      roomNo: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cancelDate)) {
      $dara.Model.validateArray(this.cancelDate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

