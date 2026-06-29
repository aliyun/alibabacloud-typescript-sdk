// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";


export class AiToolSelectionConfigEnableConditions extends $dara.Model {
  /**
   * @remarks
   * The tool count threshold.
   * 
   * @example
   * 10
   */
  toolCountThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      toolCountThreshold: 'toolCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      toolCountThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiToolSelectionConfigQueryRewritingContextSelection extends $dara.Model {
  /**
   * @remarks
   * The context selection method.
   * 
   * @example
   * allMessages
   */
  type?: string;
  /**
   * @remarks
   * The number of retained messages or characters.
   * 
   * @example
   * 5
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiToolSelectionConfigQueryRewritingModelService extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * gte-rerank-v2
   */
  modelName?: string;
  /**
   * @remarks
   * The model service ID.
   * 
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The request timeout period, in milliseconds.
   * 
   * @example
   * 5000
   */
  timeoutMillisecond?: number;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      serviceId: 'serviceId',
      timeoutMillisecond: 'timeoutMillisecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      serviceId: 'string',
      timeoutMillisecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiToolSelectionConfigQueryRewritingPromptConfig extends $dara.Model {
  /**
   * @remarks
   * The custom prompt content.
   * 
   * @example
   * 请将以下用户问题改写为...
   */
  customPrompt?: string;
  /**
   * @remarks
   * The prompt type.
   * 
   * @example
   * builtIn
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiToolSelectionConfigQueryRewritingTriggerConditions extends $dara.Model {
  /**
   * @remarks
   * The number of conversation turns after which rewriting is triggered.
   * 
   * @example
   * 1
   */
  messageCountThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      messageCountThreshold: 'messageCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageCountThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiToolSelectionConfigQueryRewriting extends $dara.Model {
  /**
   * @remarks
   * The context selection configuration.
   */
  contextSelection?: AiToolSelectionConfigQueryRewritingContextSelection;
  /**
   * @remarks
   * Specifies whether query rewrite is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The fallback strategy.
   * 
   * @example
   * skip
   */
  fallbackStrategy?: string;
  /**
   * @remarks
   * The maximum number of output tokens for rewriting.
   * 
   * @example
   * 50
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The rewriting model service configuration.
   */
  modelService?: AiToolSelectionConfigQueryRewritingModelService;
  /**
   * @remarks
   * The prompt configuration.
   */
  promptConfig?: AiToolSelectionConfigQueryRewritingPromptConfig;
  /**
   * @remarks
   * The trigger condition configuration.
   */
  triggerConditions?: AiToolSelectionConfigQueryRewritingTriggerConditions;
  static names(): { [key: string]: string } {
    return {
      contextSelection: 'contextSelection',
      enabled: 'enabled',
      fallbackStrategy: 'fallbackStrategy',
      maxOutputTokens: 'maxOutputTokens',
      modelService: 'modelService',
      promptConfig: 'promptConfig',
      triggerConditions: 'triggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextSelection: AiToolSelectionConfigQueryRewritingContextSelection,
      enabled: 'boolean',
      fallbackStrategy: 'string',
      maxOutputTokens: 'number',
      modelService: AiToolSelectionConfigQueryRewritingModelService,
      promptConfig: AiToolSelectionConfigQueryRewritingPromptConfig,
      triggerConditions: AiToolSelectionConfigQueryRewritingTriggerConditions,
    };
  }

  validate() {
    if(this.contextSelection && typeof (this.contextSelection as any).validate === 'function') {
      (this.contextSelection as any).validate();
    }
    if(this.modelService && typeof (this.modelService as any).validate === 'function') {
      (this.modelService as any).validate();
    }
    if(this.promptConfig && typeof (this.promptConfig as any).validate === 'function') {
      (this.promptConfig as any).validate();
    }
    if(this.triggerConditions && typeof (this.triggerConditions as any).validate === 'function') {
      (this.triggerConditions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiToolSelectionConfigToolRerankingModelService extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * gte-rerank-v2
   */
  modelName?: string;
  /**
   * @remarks
   * The model service ID.
   * 
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The request timeout period, in milliseconds.
   * 
   * @example
   * 5000
   */
  timeoutMillisecond?: number;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      serviceId: 'serviceId',
      timeoutMillisecond: 'timeoutMillisecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      serviceId: 'string',
      timeoutMillisecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiToolSelectionConfigToolReranking extends $dara.Model {
  /**
   * @remarks
   * The fallback strategy upon failure.
   * 
   * @example
   * skip
   */
  fallbackStrategy?: string;
  /**
   * @remarks
   * The filtering method.
   * 
   * @example
   * topN
   */
  filteringMethod?: string;
  /**
   * @remarks
   * The reranking model service configuration.
   */
  modelService?: AiToolSelectionConfigToolRerankingModelService;
  /**
   * @remarks
   * The score threshold.
   * 
   * @example
   * 0.5
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The retention percentage.
   * 
   * @example
   * 50
   */
  topKPercent?: number;
  /**
   * @remarks
   * The retention count.
   * 
   * @example
   * 5
   */
  topNCount?: number;
  static names(): { [key: string]: string } {
    return {
      fallbackStrategy: 'fallbackStrategy',
      filteringMethod: 'filteringMethod',
      modelService: 'modelService',
      scoreThreshold: 'scoreThreshold',
      topKPercent: 'topKPercent',
      topNCount: 'topNCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fallbackStrategy: 'string',
      filteringMethod: 'string',
      modelService: AiToolSelectionConfigToolRerankingModelService,
      scoreThreshold: 'number',
      topKPercent: 'number',
      topNCount: 'number',
    };
  }

  validate() {
    if(this.modelService && typeof (this.modelService as any).validate === 'function') {
      (this.modelService as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiToolSelectionConfig extends $dara.Model {
  /**
   * @remarks
   * The enable conditions configuration. Controls when the overall feature is triggered.
   */
  enableConditions?: AiToolSelectionConfigEnableConditions;
  /**
   * @remarks
   * The plug-in running status.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * The query rewrite configuration. Rewrites user queries before tool reranking to improve matching precision.
   */
  queryRewriting?: AiToolSelectionConfigQueryRewriting;
  /**
   * @remarks
   * The tool reranking configuration. Uses a model to rank and filter candidate tools.
   */
  toolReranking?: AiToolSelectionConfigToolReranking;
  static names(): { [key: string]: string } {
    return {
      enableConditions: 'enableConditions',
      pluginStatus: 'pluginStatus',
      queryRewriting: 'queryRewriting',
      toolReranking: 'toolReranking',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableConditions: AiToolSelectionConfigEnableConditions,
      pluginStatus: AiPluginStatus,
      queryRewriting: AiToolSelectionConfigQueryRewriting,
      toolReranking: AiToolSelectionConfigToolReranking,
    };
  }

  validate() {
    if(this.enableConditions && typeof (this.enableConditions as any).validate === 'function') {
      (this.enableConditions as any).validate();
    }
    if(this.pluginStatus && typeof (this.pluginStatus as any).validate === 'function') {
      (this.pluginStatus as any).validate();
    }
    if(this.queryRewriting && typeof (this.queryRewriting as any).validate === 'function') {
      (this.queryRewriting as any).validate();
    }
    if(this.toolReranking && typeof (this.toolReranking as any).validate === 'function') {
      (this.toolReranking as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

