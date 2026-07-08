// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeviceAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The Alarm Metric. Valid values:
   * 
   * - 0: other
   * - 1: motion detection alerting
   * - 2: intelligent alerting
   * - 3: switch alerting
   * - 4: video loss alerting.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  alarm?: number;
  /**
   * @remarks
   * The channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  channelId?: number;
  /**
   * @remarks
   * The end time. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1632314789000
   */
  endTime?: number;
  /**
   * @remarks
   * The expiration time of the media upload URL. Unit: seconds. Default value: 60.
   * 
   * @example
   * 3600
   */
  expire?: number;
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
  /**
   * @remarks
   * The media object type. Valid values:
   * - 0: none
   * - 1: JPEG image
   * - 2: video
   * - 3: GIF image.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  objectType?: number;
  ownerId?: number;
  /**
   * @remarks
   * The start time. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1632121707000
   */
  startTime?: number;
  /**
   * @remarks
   * The alert subtype.
   * 
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

