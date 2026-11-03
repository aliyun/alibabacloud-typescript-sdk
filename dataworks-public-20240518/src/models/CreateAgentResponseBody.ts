// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentResponseBodyAgentExpertSuites extends $dara.Model {
  /**
   * @remarks
   * This parameter is not returned upon creation. Call GetAgent to explicitly query the published version to obtain the fixed official suite artifact version.
   * 
   * @example
   * 0.1.0.202610211408
   */
  packageVersion?: string;
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
   * dataworks-data-analysis-extension
   */
  suiteId?: string;
  /**
   * @remarks
   * The release version number of the custom suite.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The saved version selection strategy is returned only for personal or enterprise resources and is mutually exclusive with the fixed integer Version. It does not represent the specific revision actually loaded in the session. This parameter is not returned for official resources.
   * 
   * @example
   * ^1.2.3
   */
  versionSelector?: string;
  static names(): { [key: string]: string } {
    return {
      packageVersion: 'PackageVersion',
      source: 'Source',
      suiteId: 'SuiteId',
      version: 'Version',
      versionSelector: 'VersionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageVersion: 'string',
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

export class CreateAgentResponseBodyAgentSkills extends $dara.Model {
  /**
   * @remarks
   * The name of the custom skill.
   * 
   * @example
   * my-business-skill
   */
  name?: string;
  /**
   * @remarks
   * This parameter is not returned upon creation. Call GetAgent to explicitly query the published version to obtain the fixed official artifact version.
   * 
   * @example
   * 0.6.0.202608201110
   */
  packageVersion?: string;
  /**
   * @remarks
   * The ID of the official skill.
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
   * The release version number of the custom skill.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The saved version selection strategy is returned only for personal or enterprise resources and is mutually exclusive with the fixed integer Version. It does not represent the specific revision actually loaded in the session. This parameter is not returned for official resources.
   * 
   * @example
   * ^1.2.3
   */
  versionSelector?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      packageVersion: 'PackageVersion',
      skillId: 'SkillId',
      source: 'Source',
      version: 'Version',
      versionSelector: 'VersionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      packageVersion: 'string',
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

export class CreateAgentResponseBodyAgent extends $dara.Model {
  /**
   * @remarks
   * The saved suite references. Official resources return the source and directory ID. The published artifact version is represented by PackageVersion.
   */
  expertSuites?: CreateAgentResponseBodyAgentExpertSuites[];
  /**
   * @remarks
   * The creation time, in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time, in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
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
   * The saved skill references. For official skills, a fixed PackageVersion is returned after the agent is published.
   */
  skills?: CreateAgentResponseBodyAgentSkills[];
  static names(): { [key: string]: string } {
    return {
      expertSuites: 'ExpertSuites',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      skills: 'Skills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expertSuites: { 'type': 'array', 'itemType': CreateAgentResponseBodyAgentExpertSuites },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      skills: { 'type': 'array', 'itemType': CreateAgentResponseBodyAgentSkills },
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

export class CreateAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the created agent.
   */
  agent?: CreateAgentResponseBodyAgent;
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
      agent: CreateAgentResponseBodyAgent,
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

