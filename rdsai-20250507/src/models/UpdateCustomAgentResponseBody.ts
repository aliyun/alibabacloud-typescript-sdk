// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentResponseBodySkills extends $dara.Model {
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
   * AgentId。
   * 
   * @example
   * 82cf3d62-0add-47bd-869f-877131f7****
   */
  id?: string;
  /**
   * @remarks
   * The name of the dedicated agent.
   * 
   * @example
   * QueryInstanceListAgent
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
   * I am your dedicated agent for querying instance lists
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

