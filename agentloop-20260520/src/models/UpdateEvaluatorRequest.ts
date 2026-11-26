// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEvaluatorRequestSkillsFiles extends $dara.Model {
  /**
   * @remarks
   * The text content of the file.
   * 
   * @example
   * ---
   * name: fact-check
   * description: Verify factual basis in responses
   * ---
   * Verify the facts in the response item by item and list the basis
   */
  content?: string;
  /**
   * @remarks
   * The path of the file relative to the root directory of the skill.
   * 
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
   * @remarks
   * The description of the skill purpose.
   * 
   * @example
   * Verify factual basis in responses
   */
  description?: string;
  /**
   * @remarks
   * The display name of the skill.
   * 
   * @example
   * Fact-checking
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to enable the skill. Default value: true.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The complete list of files for the skill, which must include SKILL.md in the root directory.
   * 
   * @example
   * [{"name":"SKILL.md","content":"---\nname: fact-check\ndescription: Verify factual basis in responses\n---\nVerify the facts in the response item by item and list the basis."}]
   */
  files?: UpdateEvaluatorRequestSkillsFiles[];
  /**
   * @remarks
   * The name of the skill, which must be unique in the list of skills submitted in this request.
   * 
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
   * The configuration for the new version. This parameter is typically required when version is specified.
   * 
   * @example
   * {"prompt":"Evaluate task completion more strictly"}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to create a new draft. Set to true to create a new draft, or false to update a specified existing draft. When this parameter is specified, the version status defaults to DRAFT.
   * 
   * @example
   * true
   */
  createVersion?: boolean;
  /**
   * @remarks
   * The description of the evaluator.
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
   * Pipeline task completion
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
   * @remarks
   * The complete list of business skills saved for the standard agent evaluator in this request. Pass an empty array to clear the business skills for this version.
   * 
   * @example
   * [{"skillName":"fact-check","files":[{"name":"SKILL.md","content":"---\nname: fact-check\ndescription: Verify factual basis in responses\n---\nVerify the facts in the response item by item and list the basis."}]}]
   */
  skills?: UpdateEvaluatorRequestSkills[];
  /**
   * @remarks
   * The status of the evaluator version to be written. Only DRAFT is supported when explicitly specified. To publish a draft, call UpdateEvaluatorVersionStatus.
   * 
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
   * The idempotency token. CloudSpec declares this query parameter, but the backend does not currently perform idempotency checks.
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

