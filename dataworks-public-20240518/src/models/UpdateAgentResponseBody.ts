// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentResponseBodyAgentExpertSuites extends $dara.Model {
  /**
   * @remarks
   * The suite description of the bound version.
   * 
   * @example
   * Data analytics expert capability collection
   */
  description?: string;
  /**
   * @remarks
   * The display name of the bound version.
   * 
   * @example
   * Data analytics expert suite
   */
  displayName?: string;
  /**
   * @remarks
   * The suite name of the bound version.
   * 
   * @example
   * analysis-suite
   */
  name?: string;
  /**
   * @remarks
   * The semantic version of the bound version.
   * 
   * @example
   * 1.2.0
   */
  semanticVersion?: string;
  /**
   * @remarks
   * The source of the expert suite.
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * The ID of the expert suite.
   * 
   * @example
   * suite_example
   */
  suiteId?: string;
  /**
   * @remarks
   * The bound published version number.
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * The version selection expression.
   * 
   * @example
   * ^1.2.3
   */
  versionSelector?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      semanticVersion: 'SemanticVersion',
      source: 'Source',
      suiteId: 'SuiteId',
      version: 'Version',
      versionSelector: 'VersionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      semanticVersion: 'string',
      source: 'string',
      suiteId: 'string',
      version: 'number',
      versionSelector: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentResponseBodyAgentSkills extends $dara.Model {
  /**
   * @remarks
   * The name of the bound custom skill.
   * 
   * @example
   * my-business-skill
   */
  name?: string;
  /**
   * @remarks
   * The official skill ID.
   * 
   * @example
   * dataworks-semantic
   */
  skillId?: string;
  /**
   * @remarks
   * The source of the skill.
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * The published version number of the bound custom skill.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The version selection expression.
   * 
   * @example
   * ^1.2.3
   */
  versionSelector?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      skillId: 'SkillId',
      source: 'Source',
      version: 'Version',
      versionSelector: 'VersionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      skillId: 'string',
      source: 'string',
      version: 'number',
      versionSelector: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentResponseBodyAgent extends $dara.Model {
  /**
   * @remarks
   * The updated agent definition version.
   * 
   * @example
   * 3
   */
  agentVersion?: number;
  /**
   * @remarks
   * The bound expert suites.
   */
  expertSuites?: UpdateAgentResponseBodyAgentExpertSuites[];
  /**
   * @remarks
   * The time when the agent was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: number;
  /**
   * @remarks
   * The time when the agent was last modified. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: number;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The list of bound skill references after the update.
   */
  skills?: UpdateAgentResponseBodyAgentSkills[];
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      expertSuites: 'ExpertSuites',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      skills: 'Skills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'number',
      expertSuites: { 'type': 'array', 'itemType': UpdateAgentResponseBodyAgentExpertSuites },
      gmtCreateTime: 'number',
      gmtModifiedTime: 'number',
      name: 'string',
      skills: { 'type': 'array', 'itemType': UpdateAgentResponseBodyAgentSkills },
    };
  }

  validate() {
    if(Array.isArray(this.expertSuites)) {
      $dara.Model.validateArray(this.expertSuites);
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the updated agent.
   */
  agent?: UpdateAgentResponseBodyAgent;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 824F80BA-1778-5D8A-BAFF-668A4D9C4CC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: UpdateAgentResponseBodyAgent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

