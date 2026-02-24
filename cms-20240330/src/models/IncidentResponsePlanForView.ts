// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushingSetting } from "./PushingSetting";
import { RepeatNotifySetting } from "./RepeatNotifySetting";


export class IncidentResponsePlanForView extends $dara.Model {
  /**
   * @example
   * 300
   */
  autoRecoverSeconds?: number;
  /**
   * @example
   * "2025-04-05T10:30:00Z"
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  escalationId?: string[];
  /**
   * @example
   * "Manual"
   */
  mode?: string;
  /**
   * @example
   * "P1-Critical-Response-Plan"
   */
  name?: string;
  pushingSetting?: PushingSetting;
  repeatNotifySetting?: RepeatNotifySetting;
  /**
   * @example
   * "MANUAL"
   */
  source?: string;
  /**
   * @example
   * "ARMS"
   */
  syncFromType?: string;
  /**
   * @example
   * "Standard"
   */
  type?: string;
  /**
   * @example
   * "2025-04-06T09:15:00Z"
   */
  updateTime?: string;
  /**
   * @example
   * "a1b2c3d4-e5f6-7890-1234-567890abcdef"
   */
  uuid?: string;
  /**
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

