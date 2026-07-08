// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicRecommendEventListRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Maximum number of results to return
   * 
   * @example
   * 72
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next page
   * 
   * @example
   * 下一页的token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
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

