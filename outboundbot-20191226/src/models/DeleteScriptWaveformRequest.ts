// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScriptWaveformRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * Scenario ID
   * 
   * This parameter is required.
   * 
   * @example
   * b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
   */
  scriptId?: string;
  /**
   * @remarks
   * Deleted recording ID
   * 
   * This parameter is required.
   * 
   * @example
   * df8216aa-d8f6-4501-864f-f8334d946561
   */
  scriptWaveformId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      scriptWaveformId: 'ScriptWaveformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      scriptWaveformId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

