// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityAlertRuleResponseBodyDataQualityAlertRuleNotificationReceivers extends $dara.Model {
  /**
   * @example
   * {"atAll":true}
   */
  extension?: string;
  /**
   * @example
   * TaskOwner
   */
  receiverType?: string;
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

export class GetDataQualityAlertRuleResponseBodyDataQualityAlertRuleNotification extends $dara.Model {
  channels?: string[];
  receivers?: GetDataQualityAlertRuleResponseBodyDataQualityAlertRuleNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      receivers: 'Receivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      receivers: { 'type': 'array', 'itemType': GetDataQualityAlertRuleResponseBodyDataQualityAlertRuleNotificationReceivers },
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

export class GetDataQualityAlertRuleResponseBodyDataQualityAlertRuleTarget extends $dara.Model {
  ids?: number[];
  /**
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

export class GetDataQualityAlertRuleResponseBodyDataQualityAlertRule extends $dara.Model {
  /**
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @example
   * 21045
   */
  id?: number;
  notification?: GetDataQualityAlertRuleResponseBodyDataQualityAlertRuleNotification;
  /**
   * @example
   * 90912
   */
  projectId?: number;
  target?: GetDataQualityAlertRuleResponseBodyDataQualityAlertRuleTarget;
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
      notification: GetDataQualityAlertRuleResponseBodyDataQualityAlertRuleNotification,
      projectId: 'number',
      target: GetDataQualityAlertRuleResponseBodyDataQualityAlertRuleTarget,
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

export class GetDataQualityAlertRuleResponseBody extends $dara.Model {
  dataQualityAlertRule?: GetDataQualityAlertRuleResponseBodyDataQualityAlertRule;
  /**
   * @example
   * 0bc14115****159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityAlertRule: 'DataQualityAlertRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityAlertRule: GetDataQualityAlertRuleResponseBodyDataQualityAlertRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityAlertRule && typeof (this.dataQualityAlertRule as any).validate === 'function') {
      (this.dataQualityAlertRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

