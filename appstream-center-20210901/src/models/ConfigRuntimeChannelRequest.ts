// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigRuntimeChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent platform (such as ENTERPRISE or JVS).
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The Agent provider.
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
   * The channel configuration JSON string.
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
   * If you leave this parameter empty, the system automatically uses the value of Code as the name.
   * 
   * @example
   * 钉钉
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
   * The Agent runtime type.
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

