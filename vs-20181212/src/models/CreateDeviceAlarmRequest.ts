// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeviceAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  alarm?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  channelId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1632314789000
   */
  endTime?: number;
  /**
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  objectType?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1632121707000
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  subAlarm?: number;
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      expire: 'Expire',
      id: 'Id',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      subAlarm: 'SubAlarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: 'number',
      channelId: 'number',
      endTime: 'number',
      expire: 'number',
      id: 'string',
      objectType: 'number',
      ownerId: 'number',
      startTime: 'number',
      subAlarm: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

