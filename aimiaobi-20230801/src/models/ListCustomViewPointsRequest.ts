// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomViewPointsRequest extends $dara.Model {
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
   * 观点
   */
  attitude?: string;
  /**
   * @example
   * 观点
   *      *
   */
  attitudes?: string[];
  /**
   * @example
   * 461591f4880747f890702c1b90494d1a
   */
  customViewPointId?: string;
  /**
   * @example
   * 7ece3d1212e04c9ca716ae2486228f3f
   */
  customViewPointIds?: string[];
  /**
   * @example
   * 52
   */
  maxResults?: number;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @example
   * 1d20ed14db0840efb1c7eaaf4d46352b
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      attitude: 'Attitude',
      attitudes: 'Attitudes',
      customViewPointId: 'CustomViewPointId',
      customViewPointIds: 'CustomViewPointIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      topic: 'Topic',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      attitude: 'string',
      attitudes: { 'type': 'array', 'itemType': 'string' },
      customViewPointId: 'string',
      customViewPointIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      topic: 'string',
      topicId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attitudes)) {
      $dara.Model.validateArray(this.attitudes);
    }
    if(Array.isArray(this.customViewPointIds)) {
      $dara.Model.validateArray(this.customViewPointIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

