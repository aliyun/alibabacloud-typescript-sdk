// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMeasureDataRequest extends $dara.Model {
  /**
   * @remarks
   * The metering component. Valid values:
   * 
   * *   Count: The number of DideAlarmPhone (telephone/call) alerts, and the number of DideAlarmSms (SMS/text message) alerts.
   * 
   * This parameter is required.
   * 
   * @example
   * Count
   */
  componentCode?: string;
  /**
   * @remarks
   * The measurement item. Valid values:
   * 
   * *   DideAlarmPhone: phone call-based alerts
   * *   DideAlarmSms: text message-based alerts
   * 
   * This parameter is required.
   * 
   * @example
   * DideAlarmPhone
   */
  domainCode?: string;
  /**
   * @remarks
   * The end timestamp of the metering cycle, in milliseconds. The metering data is aggregated by day. The time range between EndTime and StartTime cannot exceed 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1717430400000
   */
  endTime?: number;
  /**
   * @remarks
   * The start timestamp of the metering cycle, in milliseconds. The metering data is aggregated by day. The time range between EndTime and StartTime cannot exceed 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1717344000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      domainCode: 'DomainCode',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      domainCode: 'string',
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

