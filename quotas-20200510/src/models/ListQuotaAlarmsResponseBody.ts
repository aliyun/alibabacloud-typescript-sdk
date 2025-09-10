// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaAlarmsResponseBodyQuotaAlarms extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert.
   * 
   * @example
   * a2efa7fc-832f-47bb-8054-39e28012****
   */
  alarmId?: string;
  /**
   * @remarks
   * The name of the alert event.
   * 
   * @example
   * rules
   */
  alarmName?: string;
  /**
   * @remarks
   * The time when the quota alert was created.
   * 
   * @example
   * 2020-11-27T07:23:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the alert threshold was reached. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  exceedThreshold?: boolean;
  /**
   * @remarks
   * The alert notification methods.
   */
  notifyChannels?: string[];
  /**
   * @remarks
   * The alert contact.
   * 
   * >  Valid value: accountContact. Only the account contact is supported.
   * 
   * @example
   * accountContact
   */
  notifyTarget?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * config
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_hvnoqv
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota dimensions.
   * 
   * @example
   * {"regionId":"cn-hangzhou"}
   */
  quotaDimensions?: { [key: string]: any };
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 73
   */
  quotaUsage?: number;
  /**
   * @remarks
   * The value of the quota.
   * 
   * @example
   * 200
   */
  quotaValue?: number;
  /**
   * @remarks
   * The numeric value of the alert threshold.
   * 
   * @example
   * 160
   */
  threshold?: number;
  /**
   * @remarks
   * The percentage of the alert threshold.
   * 
   * @example
   * 80
   */
  thresholdPercent?: number;
  /**
   * @remarks
   * The type of the quota alert. Valid values:
   * 
   * *   used: The alert is created for the used quota.
   * *   usable: The alert is created for the available quota.
   * 
   * @example
   * used
   */
  thresholdType?: string;
  /**
   * @remarks
   * The webhook URL.
   * 
   * @example
   * https://www.aliyun.com/webhook
   */
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      createTime: 'CreateTime',
      exceedThreshold: 'ExceedThreshold',
      notifyChannels: 'NotifyChannels',
      notifyTarget: 'NotifyTarget',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaDimensions: 'QuotaDimensions',
      quotaUsage: 'QuotaUsage',
      quotaValue: 'QuotaValue',
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
      createTime: 'string',
      exceedThreshold: 'boolean',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyTarget: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaDimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      quotaUsage: 'number',
      quotaValue: 'number',
      threshold: 'number',
      thresholdPercent: 'number',
      thresholdType: 'string',
      webHook: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.notifyChannels)) {
      $dara.Model.validateArray(this.notifyChannels);
    }
    if(this.quotaDimensions) {
      $dara.Model.validateMap(this.quotaDimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaAlarmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends.
   * 
   * > An empty value indicates that all data is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The details about the quota alert rules.
   */
  quotaAlarms?: ListQuotaAlarmsResponseBodyQuotaAlarms[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 87F3B755-3BD2-4C76-B36A-93247002918C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of quota alerts.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      quotaAlarms: 'QuotaAlarms',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      quotaAlarms: { 'type': 'array', 'itemType': ListQuotaAlarmsResponseBodyQuotaAlarms },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.quotaAlarms)) {
      $dara.Model.validateArray(this.quotaAlarms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

