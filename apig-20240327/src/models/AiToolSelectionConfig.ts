// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";


export class AiToolSelectionConfigEnableConditions extends $dara.Model {
  /**
   * @remarks
   * The minimum number of tools required to activate tool selection.
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
   * The strategy for selecting the conversation context.
   */
  type?: string;
  /**
   * @remarks
   * The value associated with the context selection strategy, such as the number of messages to include.
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
   * The name of the model used for query rewriting.
   */
  modelName?: string;
  /**
   * @remarks
   * The ID of the model service used for query rewriting.
   */
  serviceId?: string;
  /**
   * @remarks
   * The request timeout in milliseconds for the query rewriting model service.
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
   * The custom prompt template for query rewriting. This parameter is required if `type` is set to `custom`.
   */
  customPrompt?: string;
  /**
   * @remarks
   * The type of prompt, such as default or custom.
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
   * The minimum number of messages in the conversation history required to activate query rewriting.
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
   * Method for selecting the conversation context for query rewriting.
   */
  contextSelection?: AiToolSelectionConfigQueryRewritingContextSelection;
  /**
   * @remarks
   * Whether to enable query rewriting.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The fallback strategy used if query rewriting fails or returns no results.
   */
  fallbackStrategy?: string;
  /**
   * @remarks
   * The maximum number of tokens to generate for the rewritten query.
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * Model service configuration for query rewriting.
   */
  modelService?: AiToolSelectionConfigQueryRewritingModelService;
  /**
   * @remarks
   * Prompt configuration for query rewriting.
   */
  promptConfig?: AiToolSelectionConfigQueryRewritingPromptConfig;
  /**
   * @remarks
   * Conditions for activating query rewriting.
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
   * The name of the model used for reranking.
   */
  modelName?: string;
  /**
   * @remarks
   * The ID of the model service used for reranking.
   */
  serviceId?: string;
  /**
   * @remarks
   * The request timeout in milliseconds for the reranking model service.
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
   * The fallback strategy used if tool reranking fails or returns no results.
   */
  fallbackStrategy?: string;
  /**
   * @remarks
   * The method for filtering tools after reranking.
   */
  filteringMethod?: string;
  /**
   * @remarks
   * Model service configuration for tool reranking.
   */
  modelService?: AiToolSelectionConfigToolRerankingModelService;
  /**
   * @remarks
   * The minimum score a tool must have to be selected. Tools with scores below this threshold are filtered out.
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The percentage of top-ranked tools to select. This parameter only applies when `filteringMethod` is set to a percentage-based method.
   */
  topKPercent?: number;
  /**
   * @remarks
   * The number of top-ranked tools to select. This parameter only applies when `filteringMethod` is set to a count-based method.
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
   * Conditions for activating the tool selection feature.
   */
  enableConditions?: AiToolSelectionConfigEnableConditions;
  /**
   * @remarks
   * The status of the AI tool selection plugin.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * Configuration for query rewriting, which optimizes user queries before tool selection.
   */
  queryRewriting?: AiToolSelectionConfigQueryRewriting;
  /**
   * @remarks
   * Configuration for tool reranking, which controls how tools are scored and filtered.
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

