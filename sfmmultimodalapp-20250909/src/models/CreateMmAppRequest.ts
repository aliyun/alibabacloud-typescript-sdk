// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmAppRequestBindingConfigCommandsTools extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 54645646
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

export class CreateMmAppRequestBindingConfigCommands extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3686786786
   */
  domainCode?: string;
  tools?: CreateMmAppRequestBindingConfigCommandsTools[];
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
      tools: { 'type': 'array', 'itemType': CreateMmAppRequestBindingConfigCommandsTools },
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

export class CreateMmAppRequestBindingConfig extends $dara.Model {
  commands?: CreateMmAppRequestBindingConfigCommands[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': CreateMmAppRequestBindingConfigCommands },
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

export class CreateMmAppRequestConversationConfig extends $dara.Model {
  /**
   * @example
   * xxx
   */
  asrModel?: string;
  openAsr?: boolean;
  openTts?: boolean;
  /**
   * @example
   * xxx
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

export class CreateMmAppRequestModelConfig extends $dara.Model {
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
   * xxxx
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

export class CreateMmAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 多模态xxx
   */
  appName?: string;
  bindingConfig?: CreateMmAppRequestBindingConfig;
  conversationConfig?: CreateMmAppRequestConversationConfig;
  modelConfig?: CreateMmAppRequestModelConfig;
  /**
   * @example
   * 提示词
   */
  prompt?: string;
  /**
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
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
      appName: 'string',
      bindingConfig: CreateMmAppRequestBindingConfig,
      conversationConfig: CreateMmAppRequestConversationConfig,
      modelConfig: CreateMmAppRequestModelConfig,
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

