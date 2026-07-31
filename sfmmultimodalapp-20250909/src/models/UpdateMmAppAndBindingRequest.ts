// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindingConfigAgentsIntentFewShotConfigValue } from "./BindingConfigAgentsIntentFewShotConfigValue";


export class UpdateMmAppAndBindingRequestBindingConfigAgents extends $dara.Model {
  agentCode?: string;
  agentName?: string;
  agentType?: string;
  centralConfig?: { [key: string]: any };
  description?: string;
  intentFewShotConfig?: { [key: string]: BindingConfigAgentsIntentFewShotConfigValue[] };
  ownConfig?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      agentCode: 'AgentCode',
      agentName: 'AgentName',
      agentType: 'AgentType',
      centralConfig: 'CentralConfig',
      description: 'Description',
      intentFewShotConfig: 'IntentFewShotConfig',
      ownConfig: 'OwnConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCode: 'string',
      agentName: 'string',
      agentType: 'string',
      centralConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      intentFewShotConfig: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': BindingConfigAgentsIntentFewShotConfigValue } },
      ownConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.centralConfig) {
      $dara.Model.validateMap(this.centralConfig);
    }
    if(this.intentFewShotConfig) {
      $dara.Model.validateMap(this.intentFewShotConfig);
    }
    if(this.ownConfig) {
      $dara.Model.validateMap(this.ownConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppAndBindingRequestBindingConfigCommandsToolsToolExamples extends $dara.Model {
  parameters?: { [key: string]: any };
  query?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      query: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppAndBindingRequestBindingConfigCommandsToolsToolParams extends $dara.Model {
  paramDesc?: string;
  paramExample?: string;
  paramName?: string;
  paramType?: string;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      paramDesc: 'ParamDesc',
      paramExample: 'ParamExample',
      paramName: 'ParamName',
      paramType: 'ParamType',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramDesc: 'string',
      paramExample: 'string',
      paramName: 'string',
      paramType: 'string',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppAndBindingRequestBindingConfigCommandsTools extends $dara.Model {
  replyMode?: string;
  toolDescription?: string;
  toolExamples?: UpdateMmAppAndBindingRequestBindingConfigCommandsToolsToolExamples[];
  toolId?: string;
  toolName?: string;
  toolParams?: UpdateMmAppAndBindingRequestBindingConfigCommandsToolsToolParams[];
  static names(): { [key: string]: string } {
    return {
      replyMode: 'ReplyMode',
      toolDescription: 'ToolDescription',
      toolExamples: 'ToolExamples',
      toolId: 'ToolId',
      toolName: 'ToolName',
      toolParams: 'ToolParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replyMode: 'string',
      toolDescription: 'string',
      toolExamples: { 'type': 'array', 'itemType': UpdateMmAppAndBindingRequestBindingConfigCommandsToolsToolExamples },
      toolId: 'string',
      toolName: 'string',
      toolParams: { 'type': 'array', 'itemType': UpdateMmAppAndBindingRequestBindingConfigCommandsToolsToolParams },
    };
  }

  validate() {
    if(Array.isArray(this.toolExamples)) {
      $dara.Model.validateArray(this.toolExamples);
    }
    if(Array.isArray(this.toolParams)) {
      $dara.Model.validateArray(this.toolParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppAndBindingRequestBindingConfigCommands extends $dara.Model {
  domainCode?: string;
  domainName?: string;
  tools?: UpdateMmAppAndBindingRequestBindingConfigCommandsTools[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainCode: 'DomainCode',
      domainName: 'DomainName',
      tools: 'Tools',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCode: 'string',
      domainName: 'string',
      tools: { 'type': 'array', 'itemType': UpdateMmAppAndBindingRequestBindingConfigCommandsTools },
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

export class UpdateMmAppAndBindingRequestBindingConfigMcps extends $dara.Model {
  code?: string;
  toolList?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      toolList: 'ToolList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      toolList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
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

export class UpdateMmAppAndBindingRequestBindingConfigPlugins extends $dara.Model {
  pluginCode?: string;
  pluginName?: string;
  pluginType?: string;
  static names(): { [key: string]: string } {
    return {
      pluginCode: 'PluginCode',
      pluginName: 'PluginName',
      pluginType: 'PluginType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginCode: 'string',
      pluginName: 'string',
      pluginType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppAndBindingRequestBindingConfigRagConfig extends $dara.Model {
  enableSearch?: boolean;
  knowledgeBaseCodeList?: string[];
  promptStrategy?: string;
  rankWeights?: { [key: string]: number };
  retrieveMaxLength?: number;
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
      enableSearch: 'boolean',
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

export class UpdateMmAppAndBindingRequestBindingConfig extends $dara.Model {
  agents?: UpdateMmAppAndBindingRequestBindingConfigAgents[];
  commands?: UpdateMmAppAndBindingRequestBindingConfigCommands[];
  mcps?: UpdateMmAppAndBindingRequestBindingConfigMcps[];
  plugins?: UpdateMmAppAndBindingRequestBindingConfigPlugins[];
  ragConfig?: UpdateMmAppAndBindingRequestBindingConfigRagConfig;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      commands: 'Commands',
      mcps: 'Mcps',
      plugins: 'Plugins',
      ragConfig: 'RagConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': UpdateMmAppAndBindingRequestBindingConfigAgents },
      commands: { 'type': 'array', 'itemType': UpdateMmAppAndBindingRequestBindingConfigCommands },
      mcps: { 'type': 'array', 'itemType': UpdateMmAppAndBindingRequestBindingConfigMcps },
      plugins: { 'type': 'array', 'itemType': UpdateMmAppAndBindingRequestBindingConfigPlugins },
      ragConfig: UpdateMmAppAndBindingRequestBindingConfigRagConfig,
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    if(Array.isArray(this.mcps)) {
      $dara.Model.validateArray(this.mcps);
    }
    if(Array.isArray(this.plugins)) {
      $dara.Model.validateArray(this.plugins);
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

export class UpdateMmAppAndBindingRequestConversationConfig extends $dara.Model {
  asrModel?: string;
  openAsr?: boolean;
  openTts?: boolean;
  stopOrRejectFlag?: boolean;
  ttsModel?: string;
  static names(): { [key: string]: string } {
    return {
      asrModel: 'AsrModel',
      openAsr: 'OpenAsr',
      openTts: 'OpenTts',
      stopOrRejectFlag: 'StopOrRejectFlag',
      ttsModel: 'TtsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModel: 'string',
      openAsr: 'boolean',
      openTts: 'boolean',
      stopOrRejectFlag: 'boolean',
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

export class UpdateMmAppAndBindingRequestMemoryConfigAttributes extends $dara.Model {
  desc?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppAndBindingRequestMemoryConfig extends $dara.Model {
  attributes?: UpdateMmAppAndBindingRequestMemoryConfigAttributes[];
  desc?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      desc: 'Desc',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': UpdateMmAppAndBindingRequestMemoryConfigAttributes },
      desc: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppAndBindingRequestModelConfigUserPromptParams extends $dara.Model {
  defaultValue?: string;
  description?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      name: 'string',
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

export class UpdateMmAppAndBindingRequestModelConfigUserQueryParams extends $dara.Model {
  defaultValue?: string;
  description?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      name: 'string',
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

export class UpdateMmAppAndBindingRequestModelConfig extends $dara.Model {
  enableIntentRecognize?: boolean;
  enableTransition?: boolean;
  historyLimit?: number;
  intentOnlySwitch?: boolean;
  modelType?: string;
  openMemory?: boolean;
  openWebSearch?: boolean;
  searchModel?: string;
  searchStrategy?: string;
  textModal?: string;
  userPromptParams?: UpdateMmAppAndBindingRequestModelConfigUserPromptParams[];
  userQueryParams?: UpdateMmAppAndBindingRequestModelConfigUserQueryParams[];
  static names(): { [key: string]: string } {
    return {
      enableIntentRecognize: 'EnableIntentRecognize',
      enableTransition: 'EnableTransition',
      historyLimit: 'HistoryLimit',
      intentOnlySwitch: 'IntentOnlySwitch',
      modelType: 'ModelType',
      openMemory: 'OpenMemory',
      openWebSearch: 'OpenWebSearch',
      searchModel: 'SearchModel',
      searchStrategy: 'SearchStrategy',
      textModal: 'TextModal',
      userPromptParams: 'UserPromptParams',
      userQueryParams: 'userQueryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIntentRecognize: 'boolean',
      enableTransition: 'boolean',
      historyLimit: 'number',
      intentOnlySwitch: 'boolean',
      modelType: 'string',
      openMemory: 'boolean',
      openWebSearch: 'boolean',
      searchModel: 'string',
      searchStrategy: 'string',
      textModal: 'string',
      userPromptParams: { 'type': 'array', 'itemType': UpdateMmAppAndBindingRequestModelConfigUserPromptParams },
      userQueryParams: { 'type': 'array', 'itemType': UpdateMmAppAndBindingRequestModelConfigUserQueryParams },
    };
  }

  validate() {
    if(Array.isArray(this.userPromptParams)) {
      $dara.Model.validateArray(this.userPromptParams);
    }
    if(Array.isArray(this.userQueryParams)) {
      $dara.Model.validateArray(this.userQueryParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMmAppAndBindingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  bindingConfig?: UpdateMmAppAndBindingRequestBindingConfig;
  conversationConfig?: UpdateMmAppAndBindingRequestConversationConfig;
  memoryConfig?: UpdateMmAppAndBindingRequestMemoryConfig;
  modelConfig?: UpdateMmAppAndBindingRequestModelConfig;
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      bindingConfig: 'BindingConfig',
      conversationConfig: 'ConversationConfig',
      memoryConfig: 'MemoryConfig',
      modelConfig: 'ModelConfig',
      prompt: 'Prompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      bindingConfig: UpdateMmAppAndBindingRequestBindingConfig,
      conversationConfig: UpdateMmAppAndBindingRequestConversationConfig,
      memoryConfig: UpdateMmAppAndBindingRequestMemoryConfig,
      modelConfig: UpdateMmAppAndBindingRequestModelConfig,
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
    if(this.memoryConfig && typeof (this.memoryConfig as any).validate === 'function') {
      (this.memoryConfig as any).validate();
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

