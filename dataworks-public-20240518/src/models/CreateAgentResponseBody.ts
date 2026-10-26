// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentResponseBodyAgentExpertSuites extends $dara.Model {
  /**
   * @remarks
   * 创建时不返回；请使用 GetAgent 显式查询已发布版本获取固定的官方套件制品版本。
   * 
   * @example
   * 0.1.0.202610211408
   */
  packageVersion?: string;
  /**
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @example
   * dataworks-data-analysis-extension
   */
  suiteId?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      packageVersion: 'PackageVersion',
      source: 'Source',
      suiteId: 'SuiteId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageVersion: 'string',
      source: 'string',
      suiteId: 'string',
      version: 'number',
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
   * @example
   * my-business-skill
   */
  name?: string;
  /**
   * @remarks
   * 创建时不返回；请使用 GetAgent 显式查询已发布版本获取固定的官方制品版本。
   * 
   * @example
   * 0.6.0.202608201110
   */
  packageVersion?: string;
  /**
   * @example
   * dataworks-semantic
   */
  skillId?: string;
  /**
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      packageVersion: 'PackageVersion',
      skillId: 'SkillId',
      source: 'Source',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      packageVersion: 'string',
      skillId: 'string',
      source: 'string',
      version: 'number',
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
   * 已保存的套件引用。官方资源返回来源及目录 ID；发布后的制品版本由 PackageVersion 表示。
   */
  expertSuites?: CreateAgentResponseBodyAgentExpertSuites[];
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time. The value is a UNIX timestamp in milliseconds.
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
   * 已保存的 Skill 引用；官方 Skill 在 Agent 发布后返回固定的 PackageVersion。
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

