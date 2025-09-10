// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmHistoriesResponseBodyAlarmHistories extends $dara.Model {
  /**
   * @remarks
   * The name of the quota alert.
   * 
   * @example
   * security_groups
   */
  alarmName?: string;
  /**
   * @remarks
   * The time when the quota alert rule was created.
   * 
   * @example
   * 2021-01-24T09:20:09Z
   */
  createTime?: string;
  /**
   * @remarks
   * The notification methods of the quota alert.
   */
  notifyChannels?: string[];
  /**
   * @remarks
   * The quota alert contact.
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
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The used quota.
   * 
   * @example
   * 31
   */
  quotaUsage?: number;
  /**
   * @remarks
   * The threshold to trigger quota alerts.
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
   * 80
   */
  thresholdPercent?: number;
  static names(): { [key: string]: string } {
    return {
      alarmName: 'AlarmName',
      createTime: 'CreateTime',
      notifyChannels: 'NotifyChannels',
      notifyTarget: 'NotifyTarget',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaUsage: 'QuotaUsage',
      threshold: 'Threshold',
      thresholdPercent: 'ThresholdPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmName: 'string',
      createTime: 'string',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyTarget: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaUsage: 'number',
      threshold: 'number',
      thresholdPercent: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.notifyChannels)) {
      $dara.Model.validateArray(this.notifyChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlarmHistoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the quota alert records.
   */
  alarmHistories?: ListAlarmHistoriesResponseBodyAlarmHistories[];
  /**
   * @remarks
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends. An empty value indicates that all data is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB38DDF9-B1E0-48C1-9966-19C443C2841E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that are returned for the query.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmHistories: 'AlarmHistories',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistories: { 'type': 'array', 'itemType': ListAlarmHistoriesResponseBodyAlarmHistories },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmHistories)) {
      $dara.Model.validateArray(this.alarmHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

