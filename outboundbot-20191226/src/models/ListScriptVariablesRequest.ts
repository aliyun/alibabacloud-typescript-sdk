// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptVariablesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2e55ad0f-7a07-420e-a9b0-62d66ba7278a
   */
  instanceId?: string;
  sandbox?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 62318d71-1128-4fd7-af15-c852cbe26b93
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sandbox: 'Sandbox',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sandbox: 'boolean',
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

