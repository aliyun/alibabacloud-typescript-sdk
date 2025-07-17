// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BlockAlarmNotificationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert.
   * 
   * For more information about how to obtain the ID of an alert, see [ListAlertEvents](https://help.aliyun.com/document_detail/2612346.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 133
   */
  alarmId?: number;
  /**
   * @remarks
   * The ID of the alert handler.
   * 
   * @example
   * 2044049
   */
  handlerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of seconds that elapse before alert notifications are blocked. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 180
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      handlerId: 'HandlerId',
      regionId: 'RegionId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      handlerId: 'number',
      regionId: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

