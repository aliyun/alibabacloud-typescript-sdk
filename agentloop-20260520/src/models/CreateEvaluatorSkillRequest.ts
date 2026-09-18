// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEvaluatorSkillRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The content of the skill file.
   * 
   * This parameter is required.
   * 
   * @example
   * # Trace Context Loader
   */
  content?: string;
  /**
   * @remarks
   * The name of the skill file.
   * 
   * This parameter is required.
   * 
   * @example
   * SKILL.md
   */
  name?: string;
  /**
   * @remarks
   * The remark for the file.
   * 
   * @example
   * Main skill description
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluatorSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-agentspace
   */
  agentSpace?: string;
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * Reads trace context to assist evaluation
   */
  description?: string;
  /**
   * @remarks
   * The display name of the skill.
   * 
   * @example
   * Trace Context Loader
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to enable the skill.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of skill files.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"name":"SKILL.md","content":"# Trace Context Loader","remark":"Main skill description"}]
   */
  files?: CreateEvaluatorSkillRequestFiles[];
  /**
   * @remarks
   * The skill name.
   * 
   * This parameter is required.
   * 
   * @example
   * trace_context_loader
   */
  skillName?: string;
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
      agentSpace: 'agentSpace',
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      files: 'files',
      skillName: 'skillName',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      files: { 'type': 'array', 'itemType': CreateEvaluatorSkillRequestFiles },
      skillName: 'string',
      clientToken: 'string',
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

