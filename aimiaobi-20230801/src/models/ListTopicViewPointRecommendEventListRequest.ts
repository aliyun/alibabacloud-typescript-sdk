// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicViewPointRecommendEventListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * xxx
   */
  id?: string;
  /**
   * @example
   * 66
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

