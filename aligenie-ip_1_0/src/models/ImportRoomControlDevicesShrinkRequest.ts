// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportRoomControlDevicesShrinkRequest extends $dara.Model {
  enableInfraredDeviceImport?: string;
  enableMeshDeviceImport?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vdgrefds
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  locationDevicesShrink?: string;
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
      enableInfraredDeviceImport: 'EnableInfraredDeviceImport',
      enableMeshDeviceImport: 'EnableMeshDeviceImport',
      hotelId: 'HotelId',
      locationDevicesShrink: 'LocationDevices',
      roomNo: 'RoomNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInfraredDeviceImport: 'string',
      enableMeshDeviceImport: 'string',
      hotelId: 'string',
      locationDevicesShrink: 'string',
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

