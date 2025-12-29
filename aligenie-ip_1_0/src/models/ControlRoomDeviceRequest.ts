// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ControlRoomDeviceRequest extends $dara.Model {
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
  properties?: { [key: string]: string };
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
      properties: 'Properties',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      deviceIndex: 'number',
      deviceNumber: 'string',
      hotelId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      roomNo: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

