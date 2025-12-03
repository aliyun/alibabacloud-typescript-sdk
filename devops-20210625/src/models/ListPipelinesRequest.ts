// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesRequest extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  createEndTime?: number;
  /**
   * @example
   * 1586863220000
   */
  createStartTime?: number;
  /**
   * @example
   * 112122121
   */
  creatorAccountIds?: string;
  /**
   * @example
   * 1111111
   */
  executeAccountIds?: string;
  /**
   * @example
   * 1586863220000
   */
  executeEndTime?: number;
  /**
   * @example
   * 1586863220000
   */
  executeStartTime?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * aaaaaaaaaa
   */
  nextToken?: string;
  /**
   * @example
   * 流水线
   */
  pipelineName?: string;
  /**
   * @example
   * RUNNING,SUCCESS
   */
  statusList?: string;
  static names(): { [key: string]: string } {
    return {
      createEndTime: 'createEndTime',
      createStartTime: 'createStartTime',
      creatorAccountIds: 'creatorAccountIds',
      executeAccountIds: 'executeAccountIds',
      executeEndTime: 'executeEndTime',
      executeStartTime: 'executeStartTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pipelineName: 'pipelineName',
      statusList: 'statusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createEndTime: 'number',
      createStartTime: 'number',
      creatorAccountIds: 'string',
      executeAccountIds: 'string',
      executeEndTime: 'number',
      executeStartTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      pipelineName: 'string',
      statusList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

