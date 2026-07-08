// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig extends $dara.Model {
  /**
   * @remarks
   * Summary – number of images
   * 
   * @example
   * 90
   */
  summaryImageCount?: number;
  /**
   * @remarks
   * Summary model
   * 
   * @example
   * 摘要模型
   */
  summaryModel?: string;
  /**
   * @remarks
   * Summary - Custom Prompt
   * 
   * @example
   * 摘要-自定义Prompt
   */
  summaryPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      summaryImageCount: 'SummaryImageCount',
      summaryModel: 'SummaryModel',
      summaryPrompt: 'SummaryPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryImageCount: 'number',
      summaryModel: 'string',
      summaryPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights extends $dara.Model {
  /**
   * @remarks
   * Dimension key
   * 
   * @example
   * views
   */
  dimension?: string;
  /**
   * @remarks
   * weight
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig extends $dara.Model {
  /**
   * @remarks
   * List of selected channels
   * 
   * @example
   * ["科技","经济","时政","娱乐"]
   */
  categories?: string[];
  /**
   * @remarks
   * Custom hot spot weight
   * 
   * @deprecated
   */
  customHotValueWeights?: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights[];
  /**
   * @remarks
   * topic Quantity
   * 
   * @example
   * 10
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      customHotValueWeights: 'CustomHotValueWeights',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      customHotValueWeights: { 'type': 'array', 'itemType': GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights },
      topicCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.customHotValueWeights)) {
      $dara.Model.validateArray(this.customHotValueWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastRequest extends $dara.Model {
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
  locations?: string[];
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
  stepForCustomSummaryStyleConfig?: GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig;
  /**
   * @remarks
   * Hot Spot News Broadcast Content Configuration
   */
  stepForNewsBroadcastContentConfig?: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig;
  /**
   * @remarks
   * topic Filter
   * 
   * @example
   * ["主题1","主题2"]
   */
  topics?: string[];
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
      locations: 'Locations',
      query: 'Query',
      size: 'Size',
      stepForCustomSummaryStyleConfig: 'StepForCustomSummaryStyleConfig',
      stepForNewsBroadcastContentConfig: 'StepForNewsBroadcastContentConfig',
      topics: 'Topics',
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
      locations: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      size: 'number',
      stepForCustomSummaryStyleConfig: GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig,
      stepForNewsBroadcastContentConfig: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig,
      topics: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.locations)) {
      $dara.Model.validateArray(this.locations);
    }
    if(this.stepForCustomSummaryStyleConfig && typeof (this.stepForCustomSummaryStyleConfig as any).validate === 'function') {
      (this.stepForCustomSummaryStyleConfig as any).validate();
    }
    if(this.stepForNewsBroadcastContentConfig && typeof (this.stepForNewsBroadcastContentConfig as any).validate === 'function') {
      (this.stepForNewsBroadcastContentConfig as any).validate();
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

