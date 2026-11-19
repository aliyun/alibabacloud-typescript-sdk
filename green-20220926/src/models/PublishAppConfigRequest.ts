// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishAppConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID. This parameter must be the AgentId returned by the AddAppAgent operation after the agent is added.
   * 
   * @example
   * ag.abcxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * Agent 1
   */
  agentName?: string;
  /**
   * @remarks
   * The application ID. This parameter must be the AppId returned by the AddAppConfig operation after the application is created.
   * 
   * @example
   * txt_check_agent_01
   */
  appId?: string;
  /**
   * @remarks
   * The configuration details. The value is a JSON string. The outer object contains the agentItemConfigs field, and its value is a re-serialized JSON array string (a double-nested structure) represented as a sequence of characters. Each array element in agentItemConfigs is an agent configuration object. Supported fields include agentId (string, the agent ID. Use the actual value returned by AddAppAgent or a clear placeholder such as <your-agent-id>), name (string, the agent name), and enable (boolean, specifies whether to enable the agent). Differences and connections with the Config parameter of ModifyAppAgent: The Config parameter of ModifyAppAgent describes the runtime configuration of a single agent (model, scene, or labelConfig), and you must first configure the agent by calling ModifyAppAgent. The Config parameter of this operation aggregates all agent entries (agentItemConfigs) under the application for overall publishing.
   * 
   * @example
   * {"agentItemConfigs": "[{\\"agentId\\":\\"ag.abcxxx\\",\\"enable\\":true,\\"name\\":\\"Agent 1\\"}]"}
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether to enable the agent. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * agent_text
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      appId: 'AppId',
      config: 'Config',
      enable: 'Enable',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      appId: 'string',
      config: 'string',
      enable: 'boolean',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

