// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentResponseBodySkills extends $dara.Model {
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * SQL query optimization skill
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the skill.
   * 
   * @example
   * 82cf3d62-0add-47bd-869f-877131f7****
   */
  id?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * query-optimization
   */
  name?: string;
  /**
   * @remarks
   * The skill type.
   * 
   * @example
   * user
   */
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

export class UpdateCustomAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable tools.
   * 
   * @example
   * true
   */
  enableTools?: string;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 82cf3d62-0add-47bd-869f-877131f7****
   */
  id?: string;
  /**
   * @remarks
   * The name of the custom agent.
   * 
   * @example
   * Query instance list agent
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
  /**
   * @remarks
   * The list of associated skill details.
   */
  skills?: UpdateCustomAgentResponseBodySkills[];
  /**
   * @remarks
   * The system prompt.
   * 
   * @example
   * I am your custom agent for querying the instance list
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The tool information.
   */
  tools?: string[];
  static names(): { [key: string]: string } {
    return {
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
      enableTools: 'string',
      id: 'string',
      name: 'string',
      requestId: 'string',
      skills: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodySkills },
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

