// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveRuntimeChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider. The mappings with the agent runtime type are as follows:
   * 
   * - JVS Computer: Set this parameter to OpenClaw.
   * - OpenClaw: Set this parameter to OpenClaw.
   * - Hermes Agent: Set this parameter to HermesAgent, and you must also set AgentPlatform to ENTERPRISE_JVS. If AgentPlatform is not specified, the default value is ENTERPRISE, and only OpenClaw is supported in this case.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The channel code.
   * 
   * This parameter is required.
   * 
   * @example
   * dingtalk-connector
   */
  code?: string;
  /**
   * @remarks
   * The list of agent runtime IDs.
   * 
   * This parameter is required.
   */
  runtimeIds?: string[];
  /**
   * @remarks
   * The runtime type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudDesktop
   */
  runtimeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      code: 'Code',
      runtimeIds: 'RuntimeIds',
      runtimeType: 'RuntimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      code: 'string',
      runtimeIds: { 'type': 'array', 'itemType': 'string' },
      runtimeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.runtimeIds)) {
      $dara.Model.validateArray(this.runtimeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

