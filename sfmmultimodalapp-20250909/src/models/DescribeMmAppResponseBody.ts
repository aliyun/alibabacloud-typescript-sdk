// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMmAppResponseBodyAppConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enableTransition?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableTransition: 'EnableTransition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTransition: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMmAppResponseBodyBindingConfigCommands extends $dara.Model {
  /**
   * @example
   * xxx
   */
  domainCode?: string;
  tools?: string[];
  /**
   * @example
   * BAILIAN
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
      tools: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeMmAppResponseBodyBindingConfigMcps extends $dara.Model {
  /**
   * @example
   * mcp-xxxx
   */
  code?: string;
  toolList?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      toolList: 'ToolList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      toolList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.toolList)) {
      $dara.Model.validateArray(this.toolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMmAppResponseBodyBindingConfigRagConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enableSearch?: string;
  knowledgeBaseCodeList?: string[];
  /**
   * @example
   * top_k
   */
  promptStrategy?: string;
  rankWeights?: { [key: string]: number };
  /**
   * @example
   * 1000
   */
  retrieveMaxLength?: number;
  /**
   * @example
   * 5
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      enableSearch: 'EnableSearch',
      knowledgeBaseCodeList: 'KnowledgeBaseCodeList',
      promptStrategy: 'PromptStrategy',
      rankWeights: 'RankWeights',
      retrieveMaxLength: 'RetrieveMaxLength',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSearch: 'string',
      knowledgeBaseCodeList: { 'type': 'array', 'itemType': 'string' },
      promptStrategy: 'string',
      rankWeights: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      retrieveMaxLength: 'number',
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseCodeList)) {
      $dara.Model.validateArray(this.knowledgeBaseCodeList);
    }
    if(this.rankWeights) {
      $dara.Model.validateMap(this.rankWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMmAppResponseBodyBindingConfig extends $dara.Model {
  commands?: DescribeMmAppResponseBodyBindingConfigCommands[];
  mcps?: DescribeMmAppResponseBodyBindingConfigMcps[];
  ragConfig?: DescribeMmAppResponseBodyBindingConfigRagConfig;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      mcps: 'Mcps',
      ragConfig: 'RagConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': DescribeMmAppResponseBodyBindingConfigCommands },
      mcps: { 'type': 'array', 'itemType': DescribeMmAppResponseBodyBindingConfigMcps },
      ragConfig: DescribeMmAppResponseBodyBindingConfigRagConfig,
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    if(Array.isArray(this.mcps)) {
      $dara.Model.validateArray(this.mcps);
    }
    if(this.ragConfig && typeof (this.ragConfig as any).validate === 'function') {
      (this.ragConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMmAppResponseBodyConversationConfig extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  asrModel?: string;
  openAsr?: boolean;
  openTts?: boolean;
  /**
   * @example
   * xxxx
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

export class DescribeMmAppResponseBodyModelConfig extends $dara.Model {
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
  openMemory?: boolean;
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
      openMemory: 'OpenMemory',
      openWebSearch: 'OpenWebSearch',
      textModal: 'TextModal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyLimit: 'number',
      modelType: 'string',
      openMemory: 'boolean',
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

export class DescribeMmAppResponseBody extends $dara.Model {
  appConfig?: DescribeMmAppResponseBodyAppConfig;
  /**
   * @example
   * mm_xxxx
   */
  appId?: string;
  /**
   * @example
   * 多模态应用xxxx
   */
  appName?: string;
  bindingConfig?: DescribeMmAppResponseBodyBindingConfig;
  conversationConfig?: DescribeMmAppResponseBodyConversationConfig;
  /**
   * @example
   * 243433
   */
  createUserId?: string;
  /**
   * @example
   * xxxx
   */
  createUserName?: string;
  /**
   * @example
   * xxx
   */
  gmtCreate?: string;
  /**
   * @example
   * xxx
   */
  gmtModified?: string;
  modelConfig?: DescribeMmAppResponseBodyModelConfig;
  /**
   * @example
   * 56673435
   */
  modifyUserId?: string;
  /**
   * @example
   * xxxx
   */
  modifyUserName?: string;
  /**
   * @example
   * 提示词xxxx
   */
  prompt?: string;
  /**
   * @example
   * 1
   */
  publishVersion?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxx
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appConfig: 'AppConfig',
      appId: 'AppId',
      appName: 'AppName',
      bindingConfig: 'BindingConfig',
      conversationConfig: 'ConversationConfig',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modelConfig: 'ModelConfig',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      prompt: 'Prompt',
      publishVersion: 'PublishVersion',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfig: DescribeMmAppResponseBodyAppConfig,
      appId: 'string',
      appName: 'string',
      bindingConfig: DescribeMmAppResponseBodyBindingConfig,
      conversationConfig: DescribeMmAppResponseBodyConversationConfig,
      createUserId: 'string',
      createUserName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modelConfig: DescribeMmAppResponseBodyModelConfig,
      modifyUserId: 'string',
      modifyUserName: 'string',
      prompt: 'string',
      publishVersion: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.appConfig && typeof (this.appConfig as any).validate === 'function') {
      (this.appConfig as any).validate();
    }
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

