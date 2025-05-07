// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlanningProposalRequest extends $dara.Model {
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
   * e7b26a9e1211444db8f0a984361a5e0f
   */
  customViewPointId?: string;
  /**
   * @example
   * 27971fc8f3ce4ed58c7e7fc4b503e432
   */
  customViewPointIds?: string[];
  /**
   * @example
   * 73
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 标题
   *      *
   */
  titles?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  /**
   * @example
   * 2024-09-10_08
   */
  topicVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CustomViewPoints
   */
  viewPointType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customViewPointId: 'CustomViewPointId',
      customViewPointIds: 'CustomViewPointIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      titles: 'Titles',
      topic: 'Topic',
      topicSource: 'TopicSource',
      topicVersion: 'TopicVersion',
      viewPointType: 'ViewPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customViewPointId: 'string',
      customViewPointIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      titles: { 'type': 'array', 'itemType': 'string' },
      topic: 'string',
      topicSource: 'string',
      topicVersion: 'string',
      viewPointType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customViewPointIds)) {
      $dara.Model.validateArray(this.customViewPointIds);
    }
    if(Array.isArray(this.titles)) {
      $dara.Model.validateArray(this.titles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

