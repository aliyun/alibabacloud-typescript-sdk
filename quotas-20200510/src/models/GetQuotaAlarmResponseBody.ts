// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaAlarmResponseBodyQuotaAlarm extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota alert.
   * 
   * @example
   * 78d7e436-4b25-4897-84b5-d7b656bb****
   */
  alarmId?: string;
  /**
   * @remarks
   * The name of the quota alert.
   * 
   * @example
   * q_security-groups alarm
   */
  alarmName?: string;
  /**
   * @remarks
   * The time when the quota alert was created.
   * 
   * @example
   * 2021-01-21T03:47:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * The notification channels for the alert.
   */
  notifyChannels?: string[];
  /**
   * @remarks
   * The notification recipient of the quota alert.
   * 
   * @example
   * accountContact
   */
  notifyTarget?: string;
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota dimension.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  quotaDimension?: { [key: string]: any };
  /**
   * @remarks
   * The quota usage.
   * 
   * @example
   * 28
   */
  quotaUsage?: number;
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 804
   */
  quotaValue?: number;
  /**
   * @remarks
   * The numeric value of the quota alert threshold.
   * 
   * @example
   * 29
   */
  threshold?: number;
  /**
   * @remarks
   * The percentage of the quota alert threshold.
   * 
   * @example
   * 50
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The Alarm Metric of the quota alerting. Valid values:
   * 
   * - used: Alerting on the used quota usage.
   * - usable: Alerting on the remaining active quota.
   * 
   * @example
   * used
   */
  thresholdType?: string;
  /**
   * @remarks
   * The public URL to which Quota Center sends alert messages by using HTTP POST requests.
   * 
   * @example
   * https://alert.aliyun.com/callback
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      createTime: 'CreateTime',
      notifyChannels: 'NotifyChannels',
      notifyTarget: 'NotifyTarget',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaDimension: 'QuotaDimension',
      quotaUsage: 'QuotaUsage',
      quotaValue: 'QuotaValue',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
      thresholdType: 'ThresholdType',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      alarmName: 'string',
      createTime: 'string',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyTarget: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaDimension: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      quotaUsage: 'number',
      quotaValue: 'number',
      threshold: 'number',
      thresholdPercent: 'number',
      thresholdType: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.notifyChannels)) {
      $dara.Model.validateArray(this.notifyChannels);
    }
    if(this.quotaDimension) {
      $dara.Model.validateMap(this.quotaDimension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaAlarmResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the quota alert.
   */
  quotaAlarm?: GetQuotaAlarmResponseBodyQuotaAlarm;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 81B9D511-F3DD-43B1-9A81-1795DDB52ADF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaAlarm: 'QuotaAlarm',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaAlarm: GetQuotaAlarmResponseBodyQuotaAlarm,
      requestId: 'string',
    };
  }

  validate() {
    if(this.quotaAlarm && typeof (this.quotaAlarm as any).validate === 'function') {
      (this.quotaAlarm as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

