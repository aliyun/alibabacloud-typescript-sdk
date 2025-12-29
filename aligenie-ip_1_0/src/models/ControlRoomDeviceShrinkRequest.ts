// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ControlRoomDeviceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thing.attribute.set
   * thing.attribute.adjust
   */
  cmd?: string;
  deviceIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INFRARED49122575595
   */
  deviceNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  propertiesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'Cmd',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
      hotelId: 'HotelId',
      propertiesShrink: 'Properties',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      deviceIndex: 'number',
      deviceNumber: 'string',
      hotelId: 'string',
      propertiesShrink: 'string',
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

