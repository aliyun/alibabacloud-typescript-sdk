// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportHotTopicPlanningProposalsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Custom viewpoint ID. Use this parameter for custom viewpoint topic planning.
   * 
   * @example
   * 025c6cee437741368098b790c90166f8
   */
  customViewPointIdsShrink?: string;
  /**
   * @remarks
   * Document export format
   * 
   * - word: Export as a Word document
   * 
   * - xmind: Export as an XMind file
   * 
   * @example
   * word
   */
  exportType?: string;
  /**
   * @remarks
   * Filter topic planning documents by title
   */
  titlesShrink?: string;
  /**
   * @remarks
   * Hot list topic
   * 
   * This parameter is required.
   * 
   * @example
   * 热榜主题
   */
  topic?: string;
  /**
   * @remarks
   * Hot list source
   * 
   * This parameter is required.
   * 
   * @example
   * 热榜源
   */
  topicSource?: string;
  /**
   * @remarks
   * Topic planning type
   * 
   * - CustomViewPoints: Custom viewpoint
   * 
   * - HotViewPoints: Popular viewpoint
   * 
   * - TimedViewPoints: Time-sensitive viewpoint
   * 
   * - WebReviewPoints: Public viewpoint
   * 
   * - FreshViewPoints: Fresh viewpoint
   * 
   * @example
   * CustomViewPoints
   */
  viewPointType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customViewPointIdsShrink: 'CustomViewPointIds',
      exportType: 'ExportType',
      titlesShrink: 'Titles',
      topic: 'Topic',
      topicSource: 'TopicSource',
      viewPointType: 'ViewPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customViewPointIdsShrink: 'string',
      exportType: 'string',
      titlesShrink: 'string',
      topic: 'string',
      topicSource: 'string',
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

