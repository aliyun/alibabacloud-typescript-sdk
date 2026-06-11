// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentResponsePlanForSNSModifyPushingSetting extends $dara.Model {
  /**
   * @remarks
   * The IDs of the alert actions.
   */
  alertActionIds?: string[];
  /**
   * @remarks
   * The IDs of the restore actions.
   */
  restoreActionIds?: string[];
  /**
   * @remarks
   * The UUID of the notification template.
   */
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIds: 'alertActionIds',
      restoreActionIds: 'restoreActionIds',
      templateUuid: 'templateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIds: { 'type': 'array', 'itemType': 'string' },
      restoreActionIds: { 'type': 'array', 'itemType': 'string' },
      templateUuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertActionIds)) {
      $dara.Model.validateArray(this.alertActionIds);
    }
    if(Array.isArray(this.restoreActionIds)) {
      $dara.Model.validateArray(this.restoreActionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncidentResponsePlanForSNSModifyRepeatNotifySetting extends $dara.Model {
  /**
   * @remarks
   * The incident state that stops repeat notifications.
   */
  endIncidentState?: string;
  /**
   * @remarks
   * The repeat interval for notifications, in seconds.
   */
  repeatInterval?: number;
  static names(): { [key: string]: string } {
    return {
      endIncidentState: 'endIncidentState',
      repeatInterval: 'repeatInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIncidentState: 'string',
      repeatInterval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncidentResponsePlanForSNSModify extends $dara.Model {
  /**
   * @remarks
   * The auto recovery time, in seconds. After this period, the incident is automatically resolved.
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * The IDs of the escalation policies.
   */
  escalationId?: string[];
  /**
   * @remarks
   * The push setting for notifications.
   */
  pushingSetting?: IncidentResponsePlanForSNSModifyPushingSetting;
  /**
   * @remarks
   * The repeat notification setting.
   */
  repeatNotifySetting?: IncidentResponsePlanForSNSModifyRepeatNotifySetting;
  static names(): { [key: string]: string } {
    return {
      autoRecoverSeconds: 'autoRecoverSeconds',
      escalationId: 'escalationId',
      pushingSetting: 'pushingSetting',
      repeatNotifySetting: 'repeatNotifySetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverSeconds: 'number',
      escalationId: { 'type': 'array', 'itemType': 'string' },
      pushingSetting: IncidentResponsePlanForSNSModifyPushingSetting,
      repeatNotifySetting: IncidentResponsePlanForSNSModifyRepeatNotifySetting,
    };
  }

  validate() {
    if(Array.isArray(this.escalationId)) {
      $dara.Model.validateArray(this.escalationId);
    }
    if(this.pushingSetting && typeof (this.pushingSetting as any).validate === 'function') {
      (this.pushingSetting as any).validate();
    }
    if(this.repeatNotifySetting && typeof (this.repeatNotifySetting as any).validate === 'function') {
      (this.repeatNotifySetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

