// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomViewPointsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The viewpoint to filter by.
   * 
   * @example
   * 观点
   */
  attitude?: string;
  /**
   * @remarks
   * A list of viewpoints to filter by.
   * 
   * @example
   * 观点
   *      *
   */
  attitudesShrink?: string;
  /**
   * @remarks
   * The ID of the custom viewpoint.
   * 
   * @example
   * 461591f4880747f890702c1b90494d1a
   */
  customViewPointId?: string;
  /**
   * @remarks
   * A list of custom viewpoint IDs.
   * 
   * @example
   * 7ece3d1212e04c9ca716ae2486228f3f
   */
  customViewPointIdsShrink?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 52
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * The topic of the hot list.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * The topic ID.
   * 
   * @example
   * 1d20ed14db0840efb1c7eaaf4d46352b
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      attitude: 'Attitude',
      attitudesShrink: 'Attitudes',
      customViewPointId: 'CustomViewPointId',
      customViewPointIdsShrink: 'CustomViewPointIds',
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
      attitudesShrink: 'string',
      customViewPointId: 'string',
      customViewPointIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      topic: 'string',
      topicId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

