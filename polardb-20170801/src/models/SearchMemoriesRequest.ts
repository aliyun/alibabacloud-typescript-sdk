// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The start time for filtering memories by creation time. Must be in UTC and ISO 8601 format.
   * 
   * @example
   * yyyy-MM-ddTHH:mm:ssZ
   */
  createTimeBegin?: string;
  /**
   * @remarks
   * The end time for filtering memories by creation time. Must be in UTC and ISO 8601 format.
   * 
   * @example
   * yyyy-MM-ddTHH:mm:ssZ
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The agent ID associated with the memory.
   * 
   * @example
   * agent1
   */
  memoryAgentId?: string;
  /**
   * @remarks
   * The user ID associated with the memory.
   * 
   * This parameter is required.
   * 
   * @example
   * user1
   */
  memoryUserId?: string;
  /**
   * @remarks
   * The search query.
   * 
   * This parameter is required.
   * 
   * @example
   * who are you
   */
  query?: string;
  /**
   * @remarks
   * The maximum number of results to return.
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

