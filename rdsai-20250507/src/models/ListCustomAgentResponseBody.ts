// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2020-11-27 16:01:28
   */
  createdAt?: string;
  /**
   * @example
   * true
   */
  enableTools?: boolean;
  /**
   * @remarks
   * AgentId。
   * 
   * @example
   * d1b7d639-f34e-44c7-8231-987da14d****
   */
  id?: string;
  name?: string;
  systemPrompt?: string;
  tools?: string[];
  /**
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

export class ListCustomAgentResponseBody extends $dara.Model {
  data?: ListCustomAgentResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
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
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListCustomAgentResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

