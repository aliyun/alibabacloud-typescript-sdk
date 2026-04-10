// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * yyyy-MM-ddTHH:mm:ssZ
   */
  createTimeBegin?: string;
  /**
   * @example
   * yyyy-MM-ddTHH:mm:ssZ
   */
  createTimeEnd?: string;
  /**
   * @example
   * agent1
   */
  memoryAgentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user1
   */
  memoryUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * who are you
   */
  query?: string;
  /**
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

