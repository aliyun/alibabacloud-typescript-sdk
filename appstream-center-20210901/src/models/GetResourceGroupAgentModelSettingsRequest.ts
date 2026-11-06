// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupAgentModelSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform type.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider name.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The business type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The list of resource group IDs.
   * 
   * This parameter is required.
   */
  resourceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      bizType: 'BizType',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      bizType: 'number',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

