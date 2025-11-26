// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushingSetting } from "./PushingSetting";
import { RepeatNotifySetting } from "./RepeatNotifySetting";


export class IncidentResponsePlanForView extends $dara.Model {
  autoRecoverSeconds?: number;
  createTime?: string;
  description?: string;
  enabled?: boolean;
  escalationId?: string[];
  mode?: string;
  name?: string;
  pushingSetting?: PushingSetting;
  repeatNotifySetting?: RepeatNotifySetting;
  source?: string;
  syncFromType?: string;
  type?: string;
  updateTime?: string;
  uuid?: string;
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

