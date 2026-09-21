// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent platform.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The Agent provider name.
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
   * The template group description.
   * 
   * @example
   * Test model group
   */
  description?: string;
  /**
   * @remarks
   * The template group name.
   * 
   * This parameter is required.
   * 
   * @example
   * model-template-001
   */
  name?: string;
  /**
   * @remarks
   * The authorization scope. This parameter is optional and effective only for Common model groups. Valid values: ALL_USER and USER_MIXED (strictly uppercase). If not specified, Common model groups default to USER_MIXED. Non-Common groups ignore this parameter and use RESOURCE_MIXED.
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

