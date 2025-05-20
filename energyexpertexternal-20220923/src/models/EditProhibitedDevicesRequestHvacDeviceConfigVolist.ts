// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditProhibitedDevicesRequestHvacDeviceConfigVOList extends $dara.Model {
  /**
   * @example
   * build_01
   */
  buildingId?: string;
  /**
   * @example
   * id1
   */
  deviceId?: string;
  /**
   * @example
   * name1
   */
  deviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  deviceType?: string;
  /**
   * @example
   * fence_01
   */
  fenceId?: string;
  /**
   * @example
   * floor_01
   */
  floorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isForbidden?: number;
  /**
   * @example
   * 1
   */
  isUnfavorableArea?: number;
  static names(): { [key: string]: string } {
    return {
      buildingId: 'buildingId',
      deviceId: 'deviceId',
      deviceName: 'deviceName',
      deviceType: 'deviceType',
      fenceId: 'fenceId',
      floorId: 'floorId',
      isForbidden: 'isForbidden',
      isUnfavorableArea: 'isUnfavorableArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildingId: 'string',
      deviceId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      fenceId: 'string',
      floorId: 'string',
      isForbidden: 'number',
      isUnfavorableArea: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

