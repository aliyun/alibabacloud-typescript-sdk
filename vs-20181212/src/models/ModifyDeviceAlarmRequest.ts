// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeviceAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0dGo7jLwwf1000296232
   */
  alarmId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  channelId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
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

