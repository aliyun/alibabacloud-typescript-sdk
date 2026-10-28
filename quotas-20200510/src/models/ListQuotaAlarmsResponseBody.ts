// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaAlarmsResponseBodyQuotaAlarms extends $dara.Model {
  /**
   * @remarks
   * The alert ID.
   * 
   * @example
   * a2efa7fc-832f-47bb-8054-39e28012****
   */
  alarmId?: string;
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * q_hvnoqv alarm
   */
  alarmName?: string;
  /**
   * @remarks
   * The time when the quota usage alert was created.
   * 
   * @example
   * 2020-11-27T07:23:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the quota usage exceeds the alert threshold. Valid values:
   * 
   * - false
   * 
   * - true
   * 
   * @example
   * false
   */
  exceedThreshold?: boolean;
  /**
   * @remarks
   * The notification channels of the quota alert.
   */
  notifyChannels?: string[];
  /**
   * @remarks
   * The notification object of the alert.
   * 
   * > The value can only be accountContact, which specifies the contacts of the account.
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
   * The quota ID.
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
   * The quota value.
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
   * - used: an alert for the used quota.
   * 
   * - usable: an alert for the available quota.
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
   * The maximum number of records returned for the current query.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * > If this parameter is empty, all results have been returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The details of the quota usage alerts.
   */
  quotaAlarms?: ListQuotaAlarmsResponseBodyQuotaAlarms[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 87F3B755-3BD2-4C76-B36A-93247002918C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of quota usage alerts.
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

