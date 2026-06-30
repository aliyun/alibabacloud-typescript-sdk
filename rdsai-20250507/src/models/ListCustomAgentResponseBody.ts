// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-11-27 16:01:28
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether tools are enabled.
   * 
   * @example
   * true
   */
  enableTools?: boolean;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * d1b7d639-f34e-44c7-8231-987da14d****
   */
  id?: string;
  /**
   * @remarks
   * The name of the custom agent.
   * 
   * @example
   * 日志分析Agent
   */
  name?: string;
  /**
   * @remarks
   * The system prompt.
   * 
   * @example
   * 我是您用来查询实例列表的专属Agent。
   */
  systemPrompt?: string;
  /**
   * @remarks
   * A list of tools.
   */
  tools?: string[];
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-11-27 16:02:28
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      enableTools: 'EnableTools',
      id: 'Id',
      name: 'Name',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      enableTools: 'boolean',
      id: 'string',
      name: 'string',
      systemPrompt: 'string',
      tools: { 'type': 'array', 'itemType': 'string' },
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentResponseBodySkills extends $dara.Model {
  /**
   * @remarks
   * The description of the skill.
   */
  description?: string;
  /**
   * @remarks
   * The skill ID.
   */
  id?: string;
  /**
   * @remarks
   * The name of the skill.
   */
  name?: string;
  /**
   * @remarks
   * The type of the skill.
   */
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

export class ListCustomAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of custom agents.
   */
  data?: ListCustomAgentResponseBodyData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * A list of skills.
   */
  skills?: ListCustomAgentResponseBodySkills[];
  /**
   * @remarks
   * The total number of entries that match the query. This parameter is not returned by default.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      skills: 'Skills',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListCustomAgentResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      skills: { 'type': 'array', 'itemType': ListCustomAgentResponseBodySkills },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
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

