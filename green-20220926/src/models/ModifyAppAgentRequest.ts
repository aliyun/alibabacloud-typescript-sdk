// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID, which is the unique identifier of the agent and is returned in the response of the AddAppAgent operation.
   * 
   * @example
   * ag.abcxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * Agent 1
   */
  agentName?: string;
  /**
   * @remarks
   * The app ID, which is the unique identifier of the application and is returned in the response of the AddAppConfig operation. Note: This parameter is actually required. If it is not provided, the API returns a 400 error with the message "appId may not be empty".
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
   * {"model":"default","scene":"0swLgojx","labelConfig":[{"label":"Abuse","labelDefinition":"The moderated text contains abusive content."}]}
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
   * The resource type. Note: This parameter is actually required. If it is not provided, the API returns a 400 error with the message "resourceType may not be empty".
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

