// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-09-26T08:25:44Z
   */
  createTime?: string;
  /**
   * @remarks
   * The memory ID.
   * 
   * @example
   * 423
   */
  id?: string;
  /**
   * @remarks
   * The memory content.
   * 
   * @example
   * xxx
   */
  memory?: string;
  /**
   * @remarks
   * The agent to which the memory belongs.
   * 
   * @example
   * agent1
   */
  memoryAgentId?: string;
  /**
   * @remarks
   * The user to whom the memory belongs.
   * 
   * @example
   * user1
   */
  memoryUserId?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {\\"tags\\":\\"Issue_date_2023-11-30,VD_现行有效\\"}
   */
  metadata?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 12
   */
  score?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-10-16T02:27:33Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      memory: 'Memory',
      memoryAgentId: 'MemoryAgentId',
      memoryUserId: 'MemoryUserId',
      metadata: 'Metadata',
      score: 'Score',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      memory: 'string',
      memoryAgentId: 'string',
      memoryUserId: 'string',
      metadata: 'string',
      score: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMemoriesResponseBody extends $dara.Model {
  page?: string;
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The list of results.
   */
  results?: SearchMemoriesResponseBodyResults[];
  total?: string;
  totalPages?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      results: 'Results',
      total: 'Total',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'string',
      pageSize: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': SearchMemoriesResponseBodyResults },
      total: 'string',
      totalPages: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

