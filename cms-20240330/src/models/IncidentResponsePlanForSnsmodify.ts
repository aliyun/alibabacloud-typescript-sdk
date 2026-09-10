// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentResponsePlanForSNSModifyPushingSetting extends $dara.Model {
  /**
   * @remarks
   * The list of action IDs to execute when an event is triggered. Actions must be created in advance by calling CreateAlertAction.
   */
  alertActionIds?: string[];
  /**
   * @remarks
   * The list of action IDs to execute when an event is recovered.
   */
  restoreActionIds?: string[];
  /**
   * @remarks
   * Deprecated. This parameter does not take effect even if a value is passed in.
   * 
   * @example
   * uuid
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
   * The incident status at which repeat notifications stop. Repeat notifications are no longer sent after the incident reaches this status.
   * 
   * @example
   * resolved
   */
  endIncidentState?: string;
  /**
   * @remarks
   * The repeat notification interval. Unit: seconds.
   * 
   * @example
   * 300
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
   * The auto-recovery time. Unit: seconds. After this is configured, if no new events are generated for the incident within this period, the incident is automatically marked as resolved.
   * 
   * @example
   * 3600
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * The list of escalation policy IDs. Associates with IncidentEscalationPolicy to define step-by-step escalation rules when an incident is not handled as expected, such as notifying a supervisor if the incident is not acknowledged within 30 minutes.
   */
  escalationId?: string[];
  /**
   * @remarks
   * The action integration execution configuration that defines automated actions to trigger when an incident occurs and when it is recovered.
   */
  pushingSetting?: IncidentResponsePlanForSNSModifyPushingSetting;
  /**
   * @remarks
   * The repeat notification settings. When an incident remains unresolved, notifications are sent repeatedly at a fixed interval.
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

