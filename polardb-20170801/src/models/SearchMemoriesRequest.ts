// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Example: pa-**************. The application must be of the mem0 type. When creating the application by using CreateApplication, set ApplicationType to mem0. Calling this operation on a non-mem0 application returns the IncorrectDBInstanceEngine (403) error.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The start time for memory creation.
   * 
   * @example
   * yyyy-MM-ddTHH:mm:ssZ
   */
  createTimeBegin?: string;
  /**
   * @remarks
   * The end time for memory creation.
   * 
   * @example
   * yyyy-MM-ddTHH:mm:ssZ
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The ID of the memory agent.
   * 
   * @example
   * agent1
   */
  memoryAgentId?: string;
  /**
   * @remarks
   * The ID of the memory user.
   * 
   * This parameter is required.
   * 
   * @example
   * user1
   */
  memoryUserId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
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
   * The search query.
   * 
   * @example
   * who are you
   */
  query?: string;
  /**
   * @remarks
   * The number of top results to return.
   * 
   * @example
   * 3
   */
  topK?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      createTimeBegin: 'CreateTimeBegin',
      createTimeEnd: 'CreateTimeEnd',
      memoryAgentId: 'MemoryAgentId',
      memoryUserId: 'MemoryUserId',
      page: 'Page',
      pageSize: 'PageSize',
      query: 'Query',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      createTimeBegin: 'string',
      createTimeEnd: 'string',
      memoryAgentId: 'string',
      memoryUserId: 'string',
      page: 'number',
      pageSize: 'number',
      query: 'string',
      topK: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

