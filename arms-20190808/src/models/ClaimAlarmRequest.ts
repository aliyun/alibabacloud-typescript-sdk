// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClaimAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert.
   * 
   * For more information about how to obtain the ID of an alert, see [ListAlertEvents](https://help.aliyun.com/document_detail/2612346.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  alarmId?: number;
  /**
   * @remarks
   * The ID of the handler.
   * 
   * @example
   * 2046076
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
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      handlerId: 'HandlerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      handlerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

