// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelTemplateRequest extends $dara.Model {
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
   * The name of the agent provider.
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
   * The description of the template group.
   * 
   * @example
   * Test model group
   */
  description?: string;
  /**
   * @remarks
   * The name of the template group.
   * 
   * This parameter is required.
   * 
   * @example
   * model-template-001
   */
  name?: string;
  /**
   * @remarks
   * The authorization scope. This parameter is optional and takes effect only for Common model groups. Valid values: ALL_USER and USER_MIXED. The value must be strictly uppercase. If this parameter is not specified, the default value for Common groups is USER_MIXED. For non-Common groups, this parameter is ignored and fixed to RESOURCE_MIXED.
   * 
   * @example
   * ALL_USER
   */
  refScope?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      bizType: 'BizType',
      description: 'Description',
      name: 'Name',
      refScope: 'RefScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      bizType: 'number',
      description: 'string',
      name: 'string',
      refScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

