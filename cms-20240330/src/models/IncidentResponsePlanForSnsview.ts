// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentResponsePlanForSNSViewPushingSetting extends $dara.Model {
  /**
   * @remarks
   * The list of response action IDs triggered by alerts.
   */
  alertActionIds?: string[];
  /**
   * @remarks
   * The list of response action IDs triggered by alert recovery.
   */
  restoreActionIds?: string[];
  /**
   * @remarks
   * The UUID of the template used for pushing.
   * 
   * @example
   * tpl-001
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
   * The setting that specifies whether to send repeat notifications when an incident ends.
   * 
   * @example
   * false
   */
  endIncidentState?: string;
  /**
   * @remarks
   * The repeat notification interval, in seconds.
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

export class IncidentResponsePlanForSNSView extends $dara.Model {
  /**
   * @remarks
   * The auto-recovery time when no incidents occur, in seconds.
   * 
   * @example
   * 600
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1700000000000
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the response plan is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of escalation plan IDs.
   */
  escalationId?: string[];
  /**
   * @remarks
   * The lifecycle mode.
   * 
   * @example
   * NOTIFY_STRATEGY_DEFINED
   */
  mode?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Sample response plan
   */
  name?: string;
  /**
   * @remarks
   * The push settings.
   */
  pushingSetting?: IncidentResponsePlanForSNSViewPushingSetting;
  /**
   * @remarks
   * The repeat notification configuration.
   */
  repeatNotifySetting?: IncidentResponsePlanForSNSViewRepeatNotifySetting;
  /**
   * @remarks
   * The source. The value must be CUSTOM within SNS.
   * 
   * @example
   * CUSTOM
   */
  source?: string;
  /**
   * @remarks
   * The synchronization source type.
   * 
   * @example
   * CUSTOM
   */
  syncFromType?: string;
  /**
   * @remarks
   * The response plan type. The value must be NOTIFY_STRATEGY_DEFINED within SNS.
   * 
   * @example
   * NOTIFY_STRATEGY_DEFINED
   */
  type?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1700000000000
   */
  updateTime?: string;
  /**
   * @remarks
   * The unique identifier of the response plan.
   * 
   * @example
   * abc-def-12345
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

