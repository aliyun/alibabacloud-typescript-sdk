// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMeasureDataRequest extends $dara.Model {
  /**
   * @remarks
   * The measurement component. Valid values:
   * 
   * *   Count: phone call-based alerts and text message-based alerts
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
   * The end timestamp of the measurement period, in milliseconds. The measurement period is calculated in days. You can query only the data within the previous 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1717430400000
   */
  endTime?: number;
  /**
   * @remarks
   * The start timestamp of the measurement period, in milliseconds. The measurement period is calculated in days. You can query only the data within the previous 30 days.
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

