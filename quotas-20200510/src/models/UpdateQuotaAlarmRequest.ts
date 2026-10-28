// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQuotaAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota alert.
   * 
   * > For more information about how to obtain the ID of a quota alert, see [ListQuotaAlarms](https://help.aliyun.com/document_detail/440561.html).
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
   * > For more information about how to obtain the name of a quota alert, see [ListQuotaAlarms](https://help.aliyun.com/document_detail/440561.html).
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
   * - If you set `ThresholdType` to `used`, an alert is triggered when the used quota is greater than or equal to this value. The alert threshold must be greater than the current used quota.
   * 
   * - If you set `ThresholdType` to `usable`, an alert is triggered when the usable quota is less than or equal to this value. The alert threshold must be less than the current usable quota.
   * 
   * > You must set either Threshold or ThresholdPercent.
   * 
   * @example
   * 160
   */
  threshold?: number;
  /**
   * @remarks
   * The percentage of the alert threshold. Valid values:
   * 
   * - If you set `ThresholdType` to `used`, an alert is triggered when the percentage of the used quota is greater than or equal to this value. The value must be in the range of (50%, 100%].
   * 
   * - If you set `ThresholdType` to `usable`, an alert is triggered when the percentage of the usable quota is less than or equal to this value. The value must be in the range of (0%, 50%].
   * 
   * > You must set either Threshold or ThresholdPercent.
   * 
   * @example
   * 51
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The type of the quota alert. Valid values:
   * 
   * - used (default): The alert is triggered based on the used quota.
   * 
   * - usable: The alert is triggered based on the usable quota.
   * 
   * @example
   * usable
   */
  thresholdType?: string;
  /**
   * @remarks
   * The webhook URL. Quota Center sends alert notifications to this URL using an HTTP POST request.
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

