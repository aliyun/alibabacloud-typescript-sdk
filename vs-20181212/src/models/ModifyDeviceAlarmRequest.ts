// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeviceAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The alarm ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0dGo7jLwwf1000296232
   */
  alarmId?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  channelId?: number;
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
  /**
   * @remarks
   * The alarm status. Valid values:
   * 
   * - 1 (upload completed)
   * - 2 (upload failed)
   * - 3 (general error)
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      channelId: 'ChannelId',
      id: 'Id',
      ownerId: 'OwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      channelId: 'number',
      id: 'string',
      ownerId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

