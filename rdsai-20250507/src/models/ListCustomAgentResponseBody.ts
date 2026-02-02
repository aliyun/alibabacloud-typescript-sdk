// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time of the agent.
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
   * The ID of the agent.
   * 
   * @example
   * d1b7d639-f34e-44c7-8231-987da14d****
   */
  id?: string;
  /**
   * @remarks
   * The name of the dedicated agent.
   */
  name?: string;
  /**
   * @remarks
   * The system prompts.
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The information about the tool.
   */
  tools?: string[];
  /**
   * @remarks
   * The modification time of the agent.
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
  description?: string;
  id?: string;
  name?: string;
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
   * The returned data.
   */
  data?: ListCustomAgentResponseBodyData[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
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
  skills?: ListCustomAgentResponseBodySkills[];
  /**
   * @remarks
   * The total number of entries returned. By default, this parameter is not returned.
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

