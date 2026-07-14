// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResponsePlanDetailPushingSetting extends $dara.Model {
  /**
   * @remarks
   * The list of action integration IDs triggered by alerts.
   * 
   * @example
   * ["action-uuid-xxx"]
   */
  alertActionIds?: string[];
  /**
   * @remarks
   * The list of action integration IDs triggered by recovery.
   * 
   * @example
   * ["action-uuid-yyy"]
   */
  restoreActionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      alertActionIds: 'alertActionIds',
      restoreActionIds: 'restoreActionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIds: { 'type': 'array', 'itemType': 'string' },
      restoreActionIds: { 'type': 'array', 'itemType': 'string' },
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

export class ResponsePlanDetailRepeatNotifySetting extends $dara.Model {
  /**
   * @remarks
   * The target event status at which repeated notifications stop.
   * 
   * @example
   * RECOVERED
   */
  endIncidentState?: string;
  /**
   * @remarks
   * The interval for repeated notifications, in seconds.
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

export class ResponsePlanDetail extends $dara.Model {
  /**
   * @remarks
   * The number of seconds for automatic recovery. If no new trigger occurs within this duration, the event is automatically recovered.
   * 
   * @example
   * 300
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * The list of escalation plan IDs.
   * 
   * @example
   * ["esc-uuid-xxx"]
   */
  escalationId?: string[];
  /**
   * @remarks
   * The action integration push settings.
   */
  pushingSetting?: ResponsePlanDetailPushingSetting;
  /**
   * @remarks
   * The repeat notification configuration.
   */
  repeatNotifySetting?: ResponsePlanDetailRepeatNotifySetting;
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
      pushingSetting: ResponsePlanDetailPushingSetting,
      repeatNotifySetting: ResponsePlanDetailRepeatNotifySetting,
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

