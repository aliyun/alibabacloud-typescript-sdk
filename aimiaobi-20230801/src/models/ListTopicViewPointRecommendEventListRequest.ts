// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicViewPointRecommendEventListRequest extends $dara.Model {
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
   * Hot spot event ID.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * Maximum number of results to return. Defaults to 5.
   * 
   * @example
   * 66
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next page.
   * 
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

