// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportHotTopicPlanningProposalsShrinkRequest extends $dara.Model {
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
   * 025c6cee437741368098b790c90166f8
   */
  customViewPointIdsShrink?: string;
  /**
   * @example
   * 导出文档类型，word:导出为word,xmind:导处为xmind
   */
  exportType?: string;
  titlesShrink?: string;
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
   * 选题策划类型：CustomViewPoints:自定义视角，HotViewPoints:热门视角、TimedViewPoints:时效性视角、WebReviewPoints:网友视角、FreshViewPoints:新颖视角
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

