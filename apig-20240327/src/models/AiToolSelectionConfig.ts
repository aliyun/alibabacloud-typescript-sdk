// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";


export class AiToolSelectionConfigEnableConditions extends $dara.Model {
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
  type?: string;
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
  modelName?: string;
  serviceId?: string;
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
  customPrompt?: string;
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
  contextSelection?: AiToolSelectionConfigQueryRewritingContextSelection;
  enabled?: boolean;
  fallbackStrategy?: string;
  maxOutputTokens?: number;
  modelService?: AiToolSelectionConfigQueryRewritingModelService;
  promptConfig?: AiToolSelectionConfigQueryRewritingPromptConfig;
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
  modelName?: string;
  serviceId?: string;
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
  fallbackStrategy?: string;
  filteringMethod?: string;
  modelService?: AiToolSelectionConfigToolRerankingModelService;
  scoreThreshold?: number;
  topKPercent?: number;
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
  enableConditions?: AiToolSelectionConfigEnableConditions;
  /**
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  queryRewriting?: AiToolSelectionConfigQueryRewriting;
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

