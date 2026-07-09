// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluatorSkillsResponseBodySkills extends $dara.Model {
  /**
   * @remarks
   * The creation time. This field is declared as int64 in CloudSpec, but the backend currently returns the StarOps `createTime` string field.
   * 
   * @example
   * 1782816000
   */
  createdAt?: number;
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * 读取链路上下文辅助评估
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Trace 上下文读取
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the skill is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The latest version. This field is declared in CloudSpec but is not currently populated in the backend response.
   * 
   * @example
   * 1782816000000
   */
  latestVersion?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * trace_context_loader
   */
  skillName?: string;
  /**
   * @remarks
   * The update time. This field is declared as int64 in CloudSpec, but the backend currently returns the StarOps `updateTime` string field.
   * 
   * @example
   * 1782816600
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      latestVersion: 'latestVersion',
      skillName: 'skillName',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      latestVersion: 'string',
      skillName: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluatorSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page used in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * eyJuZXh0IjoiNDAifQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  /**
   * @remarks
   * The list of skill summaries.
   * 
   * @example
   * [{"skillName":"trace_context_loader","displayName":"Trace 上下文读取","enable":true}]
   */
  skills?: ListEvaluatorSkillsResponseBodySkills[];
  /**
   * @remarks
   * The total number of skills.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      skills: 'skills',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      skills: { 'type': 'array', 'itemType': ListEvaluatorSkillsResponseBodySkills },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

