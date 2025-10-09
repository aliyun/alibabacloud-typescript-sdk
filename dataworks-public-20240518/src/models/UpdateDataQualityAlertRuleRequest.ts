// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityAlertRuleRequestNotificationReceivers extends $dara.Model {
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
   * *   AliUid
   * *   WebhookUrl
   * *   DingdingUrl
   * *   WeixinUrl
   * *   FeishuUrl
   * *   TaskOwner
   * *   DataQualityScanOwner
   * *   ShiftSchedule
   * 
   * This parameter is required.
   * 
   * @example
   * TaskOwner
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

export class UpdateDataQualityAlertRuleRequestNotification extends $dara.Model {
  /**
   * @remarks
   * The list of alert channels. You can set both Email and Sms at the same time. In other cases, only one channel can be set.
   * 
   * This parameter is required.
   */
  channels?: string[];
  /**
   * @remarks
   * The alert recipients.
   */
  receivers?: UpdateDataQualityAlertRuleRequestNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      receivers: 'Receivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      receivers: { 'type': 'array', 'itemType': UpdateDataQualityAlertRuleRequestNotificationReceivers },
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

export class UpdateDataQualityAlertRuleRequestTarget extends $dara.Model {
  /**
   * @remarks
   * The list of monitored target IDs. Currently, only one ID can be set.
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

export class UpdateDataQualityAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The alert condition of the data quality monitoring rule.
   * 
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 105412
   */
  id?: number;
  /**
   * @remarks
   * Alert notification configurations.
   */
  notification?: UpdateDataQualityAlertRuleRequestNotification;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The monitored target of the data quality monitoring rule.
   */
  target?: UpdateDataQualityAlertRuleRequestTarget;
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
      notification: UpdateDataQualityAlertRuleRequestNotification,
      projectId: 'number',
      target: UpdateDataQualityAlertRuleRequestTarget,
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

