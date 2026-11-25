// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEvaluatorRequestSkillsFiles extends $dara.Model {
  /**
   * @example
   * ---
   * name: fact-check
   * description: 核对回答中的事实依据
   * ---
   * 逐项核对回答中的事实，并列出依据。
   */
  content?: string;
  /**
   * @example
   * SKILL.md
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEvaluatorRequestSkills extends $dara.Model {
  /**
   * @example
   * 核对回答中的事实依据
   */
  description?: string;
  /**
   * @example
   * 事实核查
   */
  displayName?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * [{"name":"SKILL.md","content":"---\nname: fact-check\ndescription: 核对回答中的事实依据\n---\n逐项核对回答中的事实，并列出依据。"}]
   */
  files?: UpdateEvaluatorRequestSkillsFiles[];
  /**
   * @example
   * fact-check
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      files: 'files',
      skillName: 'skillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      files: { 'type': 'array', 'itemType': UpdateEvaluatorRequestSkillsFiles },
      skillName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEvaluatorRequest extends $dara.Model {
  /**
   * @remarks
   * The list of annotation tags.
   * 
   * @example
   * ["__en"]
   */
  annotations?: string[];
  /**
   * @remarks
   * The configuration of the new version. This parameter is typically required when `version` is specified.
   * 
   * @example
   * {"prompt":"Evaluate task completion more strictly"}
   */
  config?: { [key: string]: any };
  /**
   * @example
   * true
   */
  createVersion?: boolean;
  /**
   * @remarks
   * The evaluator description.
   * 
   * @example
   * Determines whether the agent completes the user task
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Task completion of the chain
   */
  displayName?: string;
  /**
   * @remarks
   * The evaluator properties.
   * 
   * @example
   * {"agentEvaluatorMode":"raw_prompt"}
   */
  properties?: { [key: string]: any };
  /**
   * @example
   * [{"skillName":"fact-check","files":[{"name":"SKILL.md","content":"---\nname: fact-check\ndescription: 核对回答中的事实依据\n---\n逐项核对回答中的事实，并列出依据。"}]}]
   */
  skills?: UpdateEvaluatorRequestSkills[];
  /**
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @remarks
   * The new version number. A new version is created when this parameter is specified.
   * 
   * @example
   * 1.1.0
   */
  version?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * Optimized scoring instructions
   */
  versionDescription?: string;
  /**
   * @remarks
   * The idempotency token. CloudSpec declares this query parameter, but the backend does not currently perform idempotency comparison.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      config: 'config',
      createVersion: 'createVersion',
      description: 'description',
      displayName: 'displayName',
      properties: 'properties',
      skills: 'skills',
      status: 'status',
      version: 'version',
      versionDescription: 'versionDescription',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': 'string' },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createVersion: 'boolean',
      description: 'string',
      displayName: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      skills: { 'type': 'array', 'itemType': UpdateEvaluatorRequestSkills },
      status: 'string',
      version: 'string',
      versionDescription: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
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

