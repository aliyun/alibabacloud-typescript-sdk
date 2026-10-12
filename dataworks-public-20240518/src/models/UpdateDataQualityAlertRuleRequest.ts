// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityAlertRuleRequestNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The additional configuration required for the alert recipient. When ReceiverType is set to DingdingUrl, you can set `{"atAll":true}` to mention all members.
   * 
   * @example
   * {"atAll":true}
   */
  extension?: string;
  /**
   * @remarks
   * The type of the alert recipient.
   * - AliUid
   * - WebhookUrl
   * - DingdingUrl
   * - WeixinUrl
   * - FeishuUrl
   * - TaskOwner
   * - DataQualityScanOwner
   * - ShiftSchedule
   * 
   * This parameter is required.
   * 
   * @example
   * TaskOwner
   */
  receiverType?: string;
  /**
   * @remarks
   * The value of the alert recipient.
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
   * The list of notification channels. You can configure both Email and Sms simultaneously. For other cases, only one channel can be configured.
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
   * The list of monitored target IDs. Currently, only one ID is supported.
   */
  ids?: number[];
  /**
   * @remarks
   * The type of the monitored object. Only DataQualityScan is supported.
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
   * The alert condition of the data quality monitoring alert rule.
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
   * The alert notification configuration.
   */
  notification?: UpdateDataQualityAlertRuleRequestNotification;
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The target of the data quality monitoring alert rule.
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

