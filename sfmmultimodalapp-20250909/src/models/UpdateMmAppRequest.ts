// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmAppRequestBindingConfigCommandsTools extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7293782043943
   */
  toolId?: string;
  static names(): { [key: string]: string } {
    return {
      toolId: 'ToolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      toolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppRequestBindingConfigCommands extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 724366858658
   */
  domainCode?: string;
  tools?: UpdateMmAppRequestBindingConfigCommandsTools[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainCode: 'DomainCode',
      tools: 'Tools',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCode: 'string',
      tools: { 'type': 'array', 'itemType': UpdateMmAppRequestBindingConfigCommandsTools },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppRequestBindingConfig extends $dara.Model {
  commands?: UpdateMmAppRequestBindingConfigCommands[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': UpdateMmAppRequestBindingConfigCommands },
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppRequestConversationConfig extends $dara.Model {
  /**
   * @example
   * Paraformer
   */
  asrModel?: string;
  openAsr?: boolean;
  openTts?: boolean;
  /**
   * @example
   * cosyvoice-v2
   */
  ttsModel?: string;
  static names(): { [key: string]: string } {
    return {
      asrModel: 'AsrModel',
      openAsr: 'OpenAsr',
      openTts: 'OpenTts',
      ttsModel: 'TtsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModel: 'string',
      openAsr: 'boolean',
      openTts: 'boolean',
      ttsModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppRequestModelConfig extends $dara.Model {
  /**
   * @example
   * 5
   */
  historyLimit?: number;
  /**
   * @example
   * MMH
   */
  modelType?: string;
  openWebSearch?: boolean;
  /**
   * @example
   * qwen-mmh-high-speed
   */
  textModal?: string;
  static names(): { [key: string]: string } {
    return {
      historyLimit: 'HistoryLimit',
      modelType: 'ModelType',
      openWebSearch: 'OpenWebSearch',
      textModal: 'TextModal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyLimit: 'number',
      modelType: 'string',
      openWebSearch: 'boolean',
      textModal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_xxx
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 多模态应用xxxxx
   */
  appName?: string;
  bindingConfig?: UpdateMmAppRequestBindingConfig;
  conversationConfig?: UpdateMmAppRequestConversationConfig;
  modelConfig?: UpdateMmAppRequestModelConfig;
  /**
   * @example
   * 提示词，不超过8000字符
   */
  prompt?: string;
  /**
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      bindingConfig: 'BindingConfig',
      conversationConfig: 'ConversationConfig',
      modelConfig: 'ModelConfig',
      prompt: 'Prompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      bindingConfig: UpdateMmAppRequestBindingConfig,
      conversationConfig: UpdateMmAppRequestConversationConfig,
      modelConfig: UpdateMmAppRequestModelConfig,
      prompt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.bindingConfig && typeof (this.bindingConfig as any).validate === 'function') {
      (this.bindingConfig as any).validate();
    }
    if(this.conversationConfig && typeof (this.conversationConfig as any).validate === 'function') {
      (this.conversationConfig as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

