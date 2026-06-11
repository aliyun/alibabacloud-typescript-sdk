// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushingSetting } from "./PushingSetting";
import { RepeatNotifySetting } from "./RepeatNotifySetting";


export class IncidentResponsePlanForView extends $dara.Model {
  /**
   * @remarks
   * The automatic recovery time.
   * 
   * @example
   * 300
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * The time when the plan was created.
   * 
   * @example
   * "2025-04-05T10:30:00Z"
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the response plan.
   * 
   * @example
   * "针对支付服务不可用的紧急响应流程"
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the response plan is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * A list of the IDs of associated escalation policies.
   */
  escalationId?: string[];
  /**
   * @remarks
   * The response pattern.
   * 
   * @example
   * "Manual"
   */
  mode?: string;
  /**
   * @remarks
   * The name of the response plan.
   * 
   * @example
   * "P1-Critical-Response-Plan"
   */
  name?: string;
  /**
   * @remarks
   * The push notification settings.
   */
  pushingSetting?: PushingSetting;
  /**
   * @remarks
   * The settings for repeated notifications.
   */
  repeatNotifySetting?: RepeatNotifySetting;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * "MANUAL"
   */
  source?: string;
  /**
   * @remarks
   * The source type of the synchronization policy.
   * 
   * @example
   * "ARMS"
   */
  syncFromType?: string;
  /**
   * @remarks
   * The type of the response plan.
   * 
   * @example
   * "Standard"
   */
  type?: string;
  /**
   * @remarks
   * The time when the plan was last updated.
   * 
   * @example
   * "2025-04-06T09:15:00Z"
   */
  updateTime?: string;
  /**
   * @remarks
   * The globally unique identifier.
   * 
   * @example
   * "a1b2c3d4-e5f6-7890-1234-567890abcdef"
   */
  uuid?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * "ws-xyz789"
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecoverSeconds: 'autoRecoverSeconds',
      createTime: 'createTime',
      description: 'description',
      enabled: 'enabled',
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
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverSeconds: 'number',
      createTime: 'string',
      description: 'string',
      enabled: 'boolean',
      escalationId: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      name: 'string',
      pushingSetting: PushingSetting,
      repeatNotifySetting: RepeatNotifySetting,
      source: 'string',
      syncFromType: 'string',
      type: 'string',
      updateTime: 'string',
      uuid: 'string',
      workspace: 'string',
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

