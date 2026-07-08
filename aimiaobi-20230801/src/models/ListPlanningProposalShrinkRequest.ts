// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlanningProposalShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Custom viewpoint ID (used for custom viewpoint planning proposal scenarios).
   * 
   * @example
   * e7b26a9e1211444db8f0a984361a5e0f
   */
  customViewPointId?: string;
  /**
   * @remarks
   * List of custom viewpoint IDs (used for custom viewpoint planning proposal scenarios).
   * 
   * @example
   * 27971fc8f3ce4ed58c7e7fc4b503e432
   */
  customViewPointIdsShrink?: string;
  /**
   * @remarks
   * Maximum number of returned results.
   * 
   * @example
   * 73
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next page.
   * 
   * @example
   * 下一页的Token
   */
  nextToken?: string;
  /**
   * @remarks
   * Filter planning proposal titles, corresponding to the viewpoint names of each planning proposal type.
   * 
   * @example
   * 标题
   *      *
   */
  titlesShrink?: string;
  /**
   * @remarks
   * Hot topic subject.
   * 
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * Hot topic source.
   * 
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  /**
   * @remarks
   * Hot spot event data version.
   * 
   * @example
   * 2024-09-10_08
   */
  topicVersion?: string;
  /**
   * @remarks
   * Planning proposal type
   * 
   * - CustomViewPoints: Custom viewpoint
   * 
   * - HotViewPoints: Hot viewpoint
   * 
   * - TimedViewPoints: Time-sensitive viewpoint
   * 
   * - WebReviewPoints: User viewpoint
   * 
   * - FreshViewPoints: Fresh viewpoint
   * 
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
      customViewPointIdsShrink: 'CustomViewPointIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      titlesShrink: 'Titles',
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
      customViewPointIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      titlesShrink: 'string',
      topic: 'string',
      topicSource: 'string',
      topicVersion: 'string',
      viewPointType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

