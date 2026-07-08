// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeviceChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * An array of channels in a JSON-formatted string.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ChannelId":12333,"Name":"测试","DeviceStatus":"on"}]
   */
  channels?: string;
  /**
   * @remarks
   * The status of the device. Valid values:
   * 
   * - on: online
   * 
   * - off: offline
   * 
   * @example
   * on
   */
  deviceStatus?: string;
  /**
   * @remarks
   * The device serial number.
   * 
   * @example
   * 210235C3GN32090008286cf17e130d
   */
  dsn?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      deviceStatus: 'DeviceStatus',
      dsn: 'Dsn',
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: 'string',
      deviceStatus: 'string',
      dsn: 'string',
      id: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

