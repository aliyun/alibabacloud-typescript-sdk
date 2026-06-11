// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentResponsePlanForSNSViewPushingSetting extends $dara.Model {
  /**
   * @remarks
   * The IDs of actions to run when an alert is triggered.
   */
  alertActionIds?: string[];
  /**
   * @remarks
   * The IDs of actions to run when the incident is resolved.
   */
  restoreActionIds?: string[];
  /**
   * @remarks
   * The ID of the notification template.
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

export class IncidentResponsePlanForSNSViewRepeatNotifySetting extends $dara.Model {
  /**
   * @remarks
   * The incident state at which repeated notifications stop. For example, `resolved`.
   */
  endIncidentState?: string;
  /**
   * @remarks
   * The interval, in seconds, for repeated notifications.
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

export class IncidentResponsePlanForSNSView extends $dara.Model {
  /**
   * @remarks
   * The duration, in seconds, after which an incident without new alerts is automatically resolved.
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * The time when the incident response plan was created, in UTC and in the `YYYY-MM-DDThh:mm:ssZ` format.
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates if the incident response plan is enabled. Valid values: `true` and `false`.
   */
  enable?: boolean;
  /**
   * @remarks
   * The IDs of the escalation policies.
   */
  escalationId?: string[];
  /**
   * @remarks
   * The mode of the incident response plan. Valid values: `AUTO` and `MANUAL`.
   */
  mode?: string;
  /**
   * @remarks
   * The name of the incident response plan.
   */
  name?: string;
  /**
   * @remarks
   * The settings for sending notifications.
   */
  pushingSetting?: IncidentResponsePlanForSNSViewPushingSetting;
  /**
   * @remarks
   * The settings for repeated notifications.
   */
  repeatNotifySetting?: IncidentResponsePlanForSNSViewRepeatNotifySetting;
  /**
   * @remarks
   * The source of the incident.
   */
  source?: string;
  /**
   * @remarks
   * The synchronization source type.
   */
  syncFromType?: string;
  /**
   * @remarks
   * The type of the incident response plan.
   */
  type?: string;
  /**
   * @remarks
   * The time when the incident response plan was last updated, in UTC and in the `YYYY-MM-DDThh:mm:ssZ` format.
   */
  updateTime?: string;
  /**
   * @remarks
   * The unique ID of the incident response plan.
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecoverSeconds: 'autoRecoverSeconds',
      createTime: 'createTime',
      enable: 'enable',
      escalationId: 'escalationId',
      mode: 'mode',
      name: 'name',
      pushingSetting: 'pushingSetting',
      repeatNotifySetting: 'repeatNotifySetting',
      source: 'source',
      syncFromType: 'syncFromType',
      type: 'type',
      updateTime: 'updateTime',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverSeconds: 'number',
      createTime: 'string',
      enable: 'boolean',
      escalationId: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      name: 'string',
      pushingSetting: IncidentResponsePlanForSNSViewPushingSetting,
      repeatNotifySetting: IncidentResponsePlanForSNSViewRepeatNotifySetting,
      source: 'string',
      syncFromType: 'string',
      type: 'string',
      updateTime: 'string',
      uuid: 'string',
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

