// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptVariablesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID (also referred to as the business ID).
   * 
   * This parameter is required.
   * 
   * @example
   * 2e55ad0f-7a07-420e-a9b0-62d66ba7278a
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the environment is a test environment.
   * 
   * @example
   * true：测试环境
   * false：发布后的正式环境
   * 默认为false
   */
  sandbox?: boolean;
  /**
   * @remarks
   * The scenario ID.
   * 
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

