// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 2025-09-26T08:25:44Z
   */
  createTime?: string;
  /**
   * @example
   * 423
   */
  id?: string;
  /**
   * @example
   * xxx
   */
  memory?: string;
  /**
   * @example
   * agent1
   */
  memoryAgentId?: string;
  /**
   * @example
   * user1
   */
  memoryUserId?: string;
  metadata?: string;
  /**
   * @example
   * 12
   */
  score?: string;
  /**
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
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
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

