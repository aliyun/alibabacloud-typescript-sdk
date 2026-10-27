// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScriptRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 8a503680-815d-473e-a9b0-e010f47a64d2
   */
  instanceId?: string;
  /**
   * @remarks
   * Scenario ID
   * 
   * @example
   * ac6db76a-bbe7-4a2c-b7cc-7f62da7bb4c6
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

