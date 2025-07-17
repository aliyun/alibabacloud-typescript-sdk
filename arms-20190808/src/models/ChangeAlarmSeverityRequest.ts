// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeAlarmSeverityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert.
   * 
   * For more information about how to obtain the ID of an alert, see [ListAlertEvents](https://help.aliyun.com/document_detail/2612346.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 155
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
  /**
   * @remarks
   * The severity level of the alert. Valid values: P1, P2, P3, and P4. P4 indicates the lowest severity, whereas P1 indicates the highest severity.
   * 
   * This parameter is required.
   * 
   * @example
   * P1
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      handlerId: 'HandlerId',
      regionId: 'RegionId',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      handlerId: 'number',
      regionId: 'string',
      severity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

