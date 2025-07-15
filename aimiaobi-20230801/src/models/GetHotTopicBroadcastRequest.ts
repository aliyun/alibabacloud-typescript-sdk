// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig extends $dara.Model {
  /**
   * @example
   * 90
   */
  summaryImageCount?: number;
  /**
   * @example
   * 摘要模型
   */
  summaryModel?: string;
  /**
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
   * @example
   * views
   */
  dimension?: string;
  /**
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
   * @example
   * ["科技","经济","时政","娱乐"]
   */
  categories?: string[];
  /**
   * @deprecated
   */
  customHotValueWeights?: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights[];
  /**
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
   * @example
   * false
   */
  calcTotalToken?: boolean;
  /**
   * @example
   * 分类筛选
   */
  category?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 2024-10-11_13
   */
  hotTopicVersion?: string;
  locationQuery?: string;
  locations?: string[];
  query?: string;
  /**
   * @example
   * 5
   */
  size?: number;
  stepForCustomSummaryStyleConfig?: GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig;
  stepForNewsBroadcastContentConfig?: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig;
  /**
   * @example
   * ["主题1","主题2"]
   */
  topics?: string[];
  /**
   * @remarks
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

