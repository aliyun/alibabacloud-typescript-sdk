// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The creation time of the memory.
   * 
   * @example
   * 2025-09-26T08:25:44Z
   */
  createTime?: string;
  /**
   * @remarks
   * The unique ID of the memory.
   * 
   * @example
   * 423
   */
  id?: string;
  /**
   * @remarks
   * The content of the memory.
   * 
   * @example
   * xxx
   */
  memory?: string;
  /**
   * @remarks
   * The agent ID that owns the memory.
   * 
   * @example
   * agent1
   */
  memoryAgentId?: string;
  /**
   * @remarks
   * The user ID that owns the memory.
   * 
   * @example
   * user1
   */
  memoryUserId?: string;
  /**
   * @remarks
   * Additional metadata associated with the memory.
   * 
   * @example
   * {\\"tags\\":\\"Issue_date_2023-11-30,VD_现行有效\\"}
   */
  metadata?: string;
  /**
   * @remarks
   * The relevance score of the result.
   * 
   * @example
   * 12
   */
  score?: string;
  /**
   * @remarks
   * The update time of the memory.
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
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @remarks
   * An array of search results.
   */
  results?: SearchMemoriesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': SearchMemoriesResponseBodyResults },
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

