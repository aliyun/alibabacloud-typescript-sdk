// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * Additional configurations required for the alert recipients. When ReceiverType is DingdingUrl, you can set `{"atAll":true}` to mention all members.
   * 
   * @example
   * {"atAll":true}
   */
  extension?: string;
  /**
   * @remarks
   * The type of alert recipients.
   * 
   * *   ShiftSchedule
   * *   WebhookUrl
   * *   FeishuUrl
   * *   TaskOwner
   * *   WeixinUrl
   * *   DingdingUrl
   * *   DataQualityScanOwner
   * *   AliUid
   * 
   * @example
   * AliUid
   */
  receiverType?: string;
  /**
   * @remarks
   * The value of alert recipients.
   */
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.receiverValues)) {
      $dara.Model.validateArray(this.receiverValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotification extends $dara.Model {
  /**
   * @remarks
   * In Channels, you can set both Email and Sms at the same time. In other cases, only one channel can be set.
   */
  channels?: string[];
  /**
   * @remarks
   * The alert recipients.
   */
  receivers?: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      receivers: 'Receivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      receivers: { 'type': 'array', 'itemType': ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotificationReceivers },
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesTarget extends $dara.Model {
  /**
   * @remarks
   * The list of monitored target IDs
   */
  ids?: number[];
  /**
   * @remarks
   * The type of the monitored target. Only DataQualityScan is supported.
   * 
   * @example
   * DataQualityScan
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRules extends $dara.Model {
  /**
   * @remarks
   * The alert conditions.
   * 
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @remarks
   * The ID of the data quality monitor alert rule.
   * 
   * @example
   * 26433
   */
  id?: number;
  /**
   * @remarks
   * Alert notification configurations.
   */
  notification?: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotification;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 59094
   */
  projectId?: number;
  /**
   * @remarks
   * Monitored targets of the data quality alert rule.
   */
  target?: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesTarget;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      id: 'Id',
      notification: 'Notification',
      projectId: 'ProjectId',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      id: 'number',
      notification: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesNotification,
      projectId: 'number',
      target: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRulesTarget,
    };
  }

  validate() {
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityAlertRulesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The list of alert rule configurations.
   */
  dataQualityAlertRules?: ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRules[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 335
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityAlertRules: 'DataQualityAlertRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityAlertRules: { 'type': 'array', 'itemType': ListDataQualityAlertRulesResponseBodyPageInfoDataQualityAlertRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityAlertRules)) {
      $dara.Model.validateArray(this.dataQualityAlertRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityAlertRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Alert rule configurations.
   */
  pageInfo?: ListDataQualityAlertRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc14115***159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListDataQualityAlertRulesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

