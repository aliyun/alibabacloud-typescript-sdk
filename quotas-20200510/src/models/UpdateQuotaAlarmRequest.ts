// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQuotaAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota alert.
   * 
   * >  You can call the [ListQuotaAlarms](https://help.aliyun.com/document_detail/440561.html) operation to obtain the ID of a quota alert.
   * 
   * This parameter is required.
   * 
   * @example
   * a2efa7fc-832f-47bb-8054-39e28012****
   */
  alarmId?: string;
  /**
   * @remarks
   * The name of the quota alert.
   * 
   * >  You can call the [ListQuotaAlarms](https://help.aliyun.com/document_detail/440561.html) operation to obtain the name of a quota alert.
   * 
   * This parameter is required.
   * 
   * @example
   * rules
   */
  alarmName?: string;
  /**
   * @remarks
   * The numeric value of the alert threshold. Valid values:
   * 
   * *   If you set the `ThresholdType` parameter to `used`, you will receive an alert notification when the used quota is greater than or equal to the preset alert threshold. The alert threshold must be greater than the current used quota.
   * *   If you set the `ThresholdType` parameter to `usable`, you will receive an alert notification when the available quota is less than or equal to the preset alert threshold. The alert threshold must be less than the current available quota.
   * 
   * > You must set one of the Threshold and ThresholdPercent parameters.
   * 
   * @example
   * 160
   */
  threshold?: number;
  /**
   * @remarks
   * The percentage of the alert threshold. Valid values:
   * 
   * *   If you set `ThresholdType` to `used`, you receive an alert notification when the used quota is greater than or equal to the preset percentage of the alert threshold. Value range: (50%, 100%].
   * *   If you set `ThresholdType` to `usable`, you receive an alert notification when the available quota is less than or equal to the preset percentage of the alert threshold. Value range: (0%, 50%].
   * 
   * >  You must set one of Threshold and ThresholdPercent.
   * 
   * @example
   * 51
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The type of the quota alert. Valid values:
   * 
   * *   used (default): The alert is created for the used quota.
   * *   usable: The alert is created for the available quota.
   * 
   * @example
   * usable
   */
  thresholdType?: string;
  /**
   * @remarks
   * The webhook URL. Quota Center sends alert notifications to the specified URL by using HTTP POST requests.
   * 
   * @example
   * https://alert.aliyun.com/callback
   */
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
      thresholdType: 'ThresholdType',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      alarmName: 'string',
      threshold: 'number',
      thresholdPercent: 'number',
      thresholdType: 'string',
      webHook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

