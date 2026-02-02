// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentResponseBodySkills extends $dara.Model {
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

export class CreateCustomAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time of the agent.
   * 
   * @example
   * 2020-11-27 16:01:28
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
   * AgentId
   * 
   * @example
   * d1b7d639-f34e-44c7-8231-987da14d****
   */
  id?: string;
  /**
   * @remarks
   * The name of the agent.
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  skills?: CreateCustomAgentResponseBodySkills[];
  /**
   * @remarks
   * The system prompts.
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The information about the tool.
   */
  tools?: string[];
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      enableTools: 'boolean',
      id: 'string',
      name: 'string',
      requestId: 'string',
      skills: { 'type': 'array', 'itemType': CreateCustomAgentResponseBodySkills },
      systemPrompt: 'string',
      tools: { 'type': 'array', 'itemType': 'string' },
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

