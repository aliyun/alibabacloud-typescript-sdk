// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeRobotPushRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GET
   */
  pushType?: string;
  roomName?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      pushType: 'PushType',
      roomName: 'RoomName',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      pushType: 'string',
      roomName: 'string',
      roomNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

