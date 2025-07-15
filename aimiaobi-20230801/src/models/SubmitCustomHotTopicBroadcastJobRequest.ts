// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig extends $dara.Model {
  /**
   * @example
   * 3
   */
  summaryImageCount?: number;
  /**
   * @example
   * qwen-max
   */
  summaryModel?: string;
  /**
   * @example
   * xxxx
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

export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights extends $dara.Model {
  /**
   * @example
   * views
   */
  dimension?: string;
  /**
   * @example
   * 维度名称
   */
  dimensionName?: string;
  /**
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensionName: 'DimensionName',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      dimensionName: 'string',
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

export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig extends $dara.Model {
  /**
   * @example
   * ["科技","经济","时政","娱乐"]
   */
  categories?: string[];
  customHotValueWeights?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights[];
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
      customHotValueWeights: { 'type': 'array', 'itemType': SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights },
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

export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  stepForCustomSummaryStyleConfig?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  stepForNewsBroadcastContentConfig?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig;
  static names(): { [key: string]: string } {
    return {
      stepForCustomSummaryStyleConfig: 'StepForCustomSummaryStyleConfig',
      stepForNewsBroadcastContentConfig: 'StepForNewsBroadcastContentConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepForCustomSummaryStyleConfig: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig,
      stepForNewsBroadcastContentConfig: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig,
    };
  }

  validate() {
    if(this.stepForCustomSummaryStyleConfig && typeof (this.stepForCustomSummaryStyleConfig as any).validate === 'function') {
      (this.stepForCustomSummaryStyleConfig as any).validate();
    }
    if(this.stepForNewsBroadcastContentConfig && typeof (this.stepForNewsBroadcastContentConfig as any).validate === 'function') {
      (this.stepForNewsBroadcastContentConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomHotTopicBroadcastJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hotTopicBroadcastConfig?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig;
  /**
   * @example
   * 热点版本
   */
  hotTopicVersion?: string;
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
      hotTopicBroadcastConfig: 'HotTopicBroadcastConfig',
      hotTopicVersion: 'HotTopicVersion',
      topics: 'Topics',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicBroadcastConfig: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig,
      hotTopicVersion: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.hotTopicBroadcastConfig && typeof (this.hotTopicBroadcastConfig as any).validate === 'function') {
      (this.hotTopicBroadcastConfig as any).validate();
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

