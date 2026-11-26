// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEvaluatorRequestSkillsFiles extends $dara.Model {
  /**
   * @remarks
   * The text content of the file.
   * 
   * @example
   * ---
   * name: fact-check
   * description: Verify the factual basis in the response
   * ---
   * Verify the facts in the response item by item and list the evidence
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

export class CreateEvaluatorRequestSkills extends $dara.Model {
  /**
   * @remarks
   * The description of the skill purpose.
   * 
   * @example
   * Verify the factual basis in the response
   */
  description?: string;
  /**
   * @remarks
   * The display name of the skill.
   * 
   * @example
   * Fact check
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
   * The complete list of files for the skill. The list must include SKILL.md in the root directory.
   * 
   * @example
   * [{"name":"SKILL.md","content":"---\nname: fact-check\ndescription: Verify the factual basis in the response\n---\nVerify the facts in the response item by item and list the evidence."}]
   */
  files?: CreateEvaluatorRequestSkillsFiles[];
  /**
   * @remarks
   * The name of the skill. The name must be unique in the list of skills submitted in this request.
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
      files: { 'type': 'array', 'itemType': CreateEvaluatorRequestSkillsFiles },
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

export class CreateEvaluatorRequest extends $dara.Model {
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
   * The evaluator configuration. For LLM or AGENT evaluators, the configuration typically includes prompt, variables, and outputSchema. For CODE evaluators, it typically includes codeType, faasConfig, variables, and parameters.
   * 
   * @example
   * {"prompt":"Please evaluate the task completion","variables":[{"name":"input"}]}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The description of the evaluator. The description can be up to 256 characters in length.
   * 
   * @example
   * Determines whether the agent completes the user task
   */
  description?: string;
  /**
   * @remarks
   * The display name. The name can be up to 128 characters in length.
   * 
   * @example
   * Trace task completion
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the evaluation metric.
   * 
   * This parameter is required.
   * 
   * @example
   * agent_task_completion
   */
  metricName?: string;
  /**
   * @remarks
   * The name of the evaluator. The name cannot start with a system-reserved prefix and can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * trace_task_completion
   */
  name?: string;
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
   * The list of business skills for the initial version of a standard agent evaluator.
   * 
   * @example
   * [{"skillName":"fact-check","files":[{"name":"SKILL.md","content":"---\nname: fact-check\ndescription: Verify the factual basis in the response\n---\nVerify the facts in the response item by item and list the evidence."}]}]
   */
  skills?: CreateEvaluatorRequestSkills[];
  /**
   * @remarks
   * The initial version status. Set this parameter to DRAFT to save the evaluator as a draft. If you omit this parameter, the initial version is directly published.
   * 
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @remarks
   * The type of the evaluator. `LLM` indicates an inner join model evaluation tool for large language models, `AGENT` indicates a StarOps digital employee evaluator, and `CODE` indicates a code evaluator.
   * 
   * This parameter is required.
   * 
   * @example
   * AGENT
   */
  type?: string;
  /**
   * @remarks
   * The initial version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * Initial version
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
      description: 'description',
      displayName: 'displayName',
      metricName: 'metricName',
      name: 'name',
      properties: 'properties',
      skills: 'skills',
      status: 'status',
      type: 'type',
      version: 'version',
      versionDescription: 'versionDescription',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': 'string' },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      displayName: 'string',
      metricName: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      skills: { 'type': 'array', 'itemType': CreateEvaluatorRequestSkills },
      status: 'string',
      type: 'string',
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

