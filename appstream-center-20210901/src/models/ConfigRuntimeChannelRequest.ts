// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigRuntimeChannelRequest extends $dara.Model {
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
   * The agent provider.
   * 
   * - JVS Computer: Set to OpenClaw.
   * - OpenClaw: Set to OpenClaw.
   * - Hermes Agent: Set to HermesAgent.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The third-party channel code.
   * 
   * This parameter is required.
   * 
   * @example
   * dingtalk-connector
   */
  code?: string;
  /**
   * @remarks
   * The JSON string for channel configuration.
   * 
   * - Example of the simple configuration mode:
   * ```json
   * {
   *     "appKey": "abc",
   *     "appSecret": "efg"
   * }
   * ```
   * 
   * - Example of the custom configuration mode:
   * ```json
   * {
   *   "enabled": true,
   *   "clientId": "xxx",
   *   "clientSecret": "xxx"
   * }
   * ```
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "appKey": "abc",
   *     "appSecret": "efg"
   * }
   */
  config?: string;
  /**
   * @remarks
   * The configuration mode.
   * 
   * @example
   * Simple
   */
  configMode?: string;
  /**
   * @remarks
   * The channel name.
   * 
   * If you do not specify this parameter, the system automatically uses the value of Code as the name.
   * 
   * @example
   * DingTalk
   */
  name?: string;
  /**
   * @remarks
   * The list of runtime IDs.
   * 
   * This parameter is required.
   */
  runtimeIds?: string[];
  /**
   * @remarks
   * The agent runtime type.
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
      config: 'Config',
      configMode: 'ConfigMode',
      name: 'Name',
      runtimeIds: 'RuntimeIds',
      runtimeType: 'RuntimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      code: 'string',
      config: 'string',
      configMode: 'string',
      name: 'string',
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

