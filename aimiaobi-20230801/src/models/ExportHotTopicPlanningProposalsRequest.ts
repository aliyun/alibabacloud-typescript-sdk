// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportHotTopicPlanningProposalsRequest extends $dara.Model {
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
  customViewPointIds?: string[];
  /**
   * @example
   * 导出文档类型，word:导出为word,xmind:导处为xmind
   */
  exportType?: string;
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
   * 选题策划类型：CustomViewPoints:自定义视角，HotViewPoints:热门视角、TimedViewPoints:时效性视角、WebReviewPoints:网友视角、FreshViewPoints:新颖视角
   */
  viewPointType?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customViewPointIds: 'CustomViewPointIds',
      exportType: 'ExportType',
      titles: 'Titles',
      topic: 'Topic',
      topicSource: 'TopicSource',
      viewPointType: 'ViewPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customViewPointIds: { 'type': 'array', 'itemType': 'string' },
      exportType: 'string',
      titles: { 'type': 'array', 'itemType': 'string' },
      topic: 'string',
      topicSource: 'string',
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

