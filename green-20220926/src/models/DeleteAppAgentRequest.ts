// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppAgentRequest extends $dara.Model {
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
   * App ID。
   * 
   * @example
   * txt_check_agent_01
   */
  appId?: string;
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
      appId: 'AppId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
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

