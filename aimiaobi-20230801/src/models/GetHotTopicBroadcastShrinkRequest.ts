// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotTopicBroadcastShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to compute the total token count
   * 
   * @example
   * false
   */
  calcTotalToken?: boolean;
  /**
   * @remarks
   * categorization Filter
   * 
   * @example
   * 分类筛选
   */
  category?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * hot spot Version
   * 
   * @example
   * 2024-10-11_13
   */
  hotTopicVersion?: string;
  /**
   * @remarks
   * Full-text index for hot spot Regions (when this parameter is present, current does not take effect)
   * 
   * @example
   * 重庆 成都 浙江 杭州
   */
  locationQuery?: string;
  /**
   * @remarks
   * List of Regions for news retrieval (keyword filtering)
   */
  locationsShrink?: string;
  /**
   * @remarks
   * Full-text index (full-text retrieval for title, hot spot summary, and Region) (when this parameter is present, current does not take effect)
   * 
   * @example
   * 重庆新闻
   */
  query?: string;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * Custom output style configuration
   */
  stepForCustomSummaryStyleConfigShrink?: string;
  /**
   * @remarks
   * Hot Spot News Broadcast Content Configuration
   */
  stepForNewsBroadcastContentConfigShrink?: string;
  /**
   * @remarks
   * topic Filter
   * 
   * @example
   * ["主题1","主题2"]
   */
  topicsShrink?: string;
  /**
   * @remarks
   * UUID of the Alibaba Cloud Model Studio workspace: obtain the [Workspace ID](https://help.aliyun.com/document_detail/2587495.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      calcTotalToken: 'CalcTotalToken',
      category: 'Category',
      current: 'Current',
      hotTopicVersion: 'HotTopicVersion',
      locationQuery: 'LocationQuery',
      locationsShrink: 'Locations',
      query: 'Query',
      size: 'Size',
      stepForCustomSummaryStyleConfigShrink: 'StepForCustomSummaryStyleConfig',
      stepForNewsBroadcastContentConfigShrink: 'StepForNewsBroadcastContentConfig',
      topicsShrink: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calcTotalToken: 'boolean',
      category: 'string',
      current: 'number',
      hotTopicVersion: 'string',
      locationQuery: 'string',
      locationsShrink: 'string',
      query: 'string',
      size: 'number',
      stepForCustomSummaryStyleConfigShrink: 'string',
      stepForNewsBroadcastContentConfigShrink: 'string',
      topicsShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

