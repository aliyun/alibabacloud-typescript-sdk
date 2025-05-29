// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeviceChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channels?: string;
  /**
   * @example
   * on
   */
  deviceStatus?: string;
  /**
   * @example
   * 210235C3GN32090008286cf17e130d
   */
  dsn?: string;
  /**
   * @remarks
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

