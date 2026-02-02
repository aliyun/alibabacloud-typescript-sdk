// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomAgentResponseBodySkills extends $dara.Model {
  description?: string;
  id?: string;
  name?: string;
  skillType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      skillType: 'SkillType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
      skillType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time of the agent.
   * 
   * @example
   * 2025-06-04T02:25:43Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether tools are enabled.
   * 
   * @example
   * true
   */
  enableTools?: boolean;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 17053
   */
  id?: string;
  /**
   * @remarks
   * The name of the dedicated agent.
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  skills?: GetCustomAgentResponseBodySkills[];
  /**
   * @remarks
   * The system prompts.
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The details of the tools.
   */
  tools?: string[];
  /**
   * @remarks
   * The modification time of the agent.
   * 
   * @example
   * 2020-11-27 16:02:28
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      enableTools: 'EnableTools',
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
      skills: 'Skills',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      enableTools: 'boolean',
      id: 'string',
      name: 'string',
      requestId: 'string',
      skills: { 'type': 'array', 'itemType': GetCustomAgentResponseBodySkills },
      systemPrompt: 'string',
      tools: { 'type': 'array', 'itemType': 'string' },
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

