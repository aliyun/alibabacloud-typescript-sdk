// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushingSetting } from "./PushingSetting";
import { RepeatNotifySetting } from "./RepeatNotifySetting";


export class IncidentResponsePlanForModify extends $dara.Model {
  /**
   * @remarks
   * The auto-recovery time in seconds when no events occur.
   * 
   * @example
   * 100
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Sample description
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
   * The list of escalation plan IDs.
   */
  escalationId?: string[];
  /**
   * @remarks
   * The lifecycle mode.
   * 
   * @example
   * SampleValue
   */
  mode?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SampleName
   */
  name?: string;
  /**
   * @remarks
   * The push settings.
   */
  pushingSetting?: PushingSetting;
  /**
   * @remarks
   * The repeat notification configuration.
   */
  repeatNotifySetting?: RepeatNotifySetting;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * SampleValue
   */
  source?: string;
  /**
   * @remarks
   * The synchronization source type.
   * 
   * @example
   * default
   */
  syncFromType?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * default
   */
  type?: string;
  /**
   * @remarks
   * Required for Update. Can be omitted for Create, in which case the backend generates it. The UUID is shared with NotifyStrategy.
   * 
   * @example
   * example-id-001
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      autoRecoverSeconds: 'autoRecoverSeconds',
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
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverSeconds: 'number',
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

