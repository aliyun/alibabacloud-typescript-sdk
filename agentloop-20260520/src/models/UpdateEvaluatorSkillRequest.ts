// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEvaluatorSkillRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The skill file content.
   * 
   * This parameter is required.
   * 
   * @example
   * # Trace Context Loader
   */
  content?: string;
  /**
   * @remarks
   * The skill file name.
   * 
   * This parameter is required.
   * 
   * @example
   * SKILL.md
   */
  name?: string;
  /**
   * @remarks
   * The file remark.
   * 
   * @example
   * 主技能说明
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

export class UpdateEvaluatorSkillRequest extends $dara.Model {
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
   * The description of the skill.
   * 
   * @example
   * 读取链路上下文辅助评估
   */
  description?: string;
  /**
   * @remarks
   * The display name of the skill.
   * 
   * @example
   * Trace 上下文读取
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
   * The list of skill files. When provided, the skill file content is updated.
   * 
   * @example
   * [{"name":"SKILL.md","content":"# Trace Context Loader","remark":"主技能说明"}]
   */
  files?: UpdateEvaluatorSkillRequestFiles[];
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
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      files: { 'type': 'array', 'itemType': UpdateEvaluatorSkillRequestFiles },
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

