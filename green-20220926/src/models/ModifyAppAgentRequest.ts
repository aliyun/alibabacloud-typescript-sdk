// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppAgentRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID。
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
   * Agent1
   */
  agentName?: string;
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * txt_check_agent_01
   */
  appId?: string;
  /**
   * @remarks
   * The configuration details.
   * 
   * @example
   * {"model":"default","scene":"0swLgojx","labelConfig":[{"label":"Abuse","labelDefinition":"Text content in the reviewed text that contains abusive language"}]}
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

