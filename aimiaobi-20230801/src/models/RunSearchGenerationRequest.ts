// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResultSearchResult extends $dara.Model {
  chunks?: string[];
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @example
   * 1
   */
  score?: number;
  /**
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      score: 'Score',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      score: 'number',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunks)) {
      $dara.Model.validateArray(this.chunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResult extends $dara.Model {
  searchResult?: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'SearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResultSearchResult },
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection extends $dara.Model {
  /**
   * @example
   * 原始会话唯一标识：搜索结果取这个会话中的全量，目前仅媒资搜索场景需要
   */
  originalSessionId?: string;
  /**
   * @example
   * TextGenerate
   */
  searchModel?: string;
  /**
   * @example
   * 分类1
   */
  searchModelDataValue?: string;
  /**
   * @example
   * all
   */
  selectionType?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  textSearchResult?: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResult;
  static names(): { [key: string]: string } {
    return {
      originalSessionId: 'OriginalSessionId',
      searchModel: 'SearchModel',
      searchModelDataValue: 'SearchModelDataValue',
      selectionType: 'SelectionType',
      sessionId: 'SessionId',
      textSearchResult: 'TextSearchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalSessionId: 'string',
      searchModel: 'string',
      searchModelDataValue: 'string',
      selectionType: 'string',
      sessionId: 'string',
      textSearchResult: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResult,
    };
  }

  validate() {
    if(this.textSearchResult && typeof (this.textSearchResult as any).validate === 'function') {
      (this.textSearchResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestAgentContextBizContext extends $dara.Model {
  askUser?: string;
  askUserKeywords?: string[];
  currentStep?: string;
  multimodalMediaSelection?: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection;
  nextStep?: string;
  skipCurrentSupplement?: boolean;
  supplementDataType?: string;
  supplementEnable?: boolean;
  userBack?: string;
  userBackKeywords?: string[];
  static names(): { [key: string]: string } {
    return {
      askUser: 'AskUser',
      askUserKeywords: 'AskUserKeywords',
      currentStep: 'CurrentStep',
      multimodalMediaSelection: 'MultimodalMediaSelection',
      nextStep: 'NextStep',
      skipCurrentSupplement: 'SkipCurrentSupplement',
      supplementDataType: 'SupplementDataType',
      supplementEnable: 'SupplementEnable',
      userBack: 'UserBack',
      userBackKeywords: 'UserBackKeywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      askUser: 'string',
      askUserKeywords: { 'type': 'array', 'itemType': 'string' },
      currentStep: 'string',
      multimodalMediaSelection: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection,
      nextStep: 'string',
      skipCurrentSupplement: 'boolean',
      supplementDataType: 'string',
      supplementEnable: 'boolean',
      userBack: 'string',
      userBackKeywords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.askUserKeywords)) {
      $dara.Model.validateArray(this.askUserKeywords);
    }
    if(this.multimodalMediaSelection && typeof (this.multimodalMediaSelection as any).validate === 'function') {
      (this.multimodalMediaSelection as any).validate();
    }
    if(Array.isArray(this.userBackKeywords)) {
      $dara.Model.validateArray(this.userBackKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestAgentContext extends $dara.Model {
  bizContext?: RunSearchGenerationRequestAgentContextBizContext;
  static names(): { [key: string]: string } {
    return {
      bizContext: 'BizContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizContext: RunSearchGenerationRequestAgentContextBizContext,
    };
  }

  validate() {
    if(this.bizContext && typeof (this.bizContext as any).validate === 'function') {
      (this.bizContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestChatConfigSearchParamSearchSources extends $dara.Model {
  /**
   * @example
   * SystemSearch
   */
  code?: string;
  /**
   * @example
   * QuarkCommonNews
   */
  datasetName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestChatConfigSearchParam extends $dara.Model {
  /**
   * @example
   * 1725983999999
   */
  endTime?: number;
  multimodalSearchTypes?: string[];
  searchSources?: RunSearchGenerationRequestChatConfigSearchParamSearchSources[];
  /**
   * @example
   * 1725983999999
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      multimodalSearchTypes: 'MultimodalSearchTypes',
      searchSources: 'SearchSources',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      multimodalSearchTypes: { 'type': 'array', 'itemType': 'string' },
      searchSources: { 'type': 'array', 'itemType': RunSearchGenerationRequestChatConfigSearchParamSearchSources },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalSearchTypes)) {
      $dara.Model.validateArray(this.multimodalSearchTypes);
    }
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestChatConfig extends $dara.Model {
  enableThinking?: boolean;
  excludeGenerateOptions?: string[];
  /**
   * @example
   * concise
   */
  generateLevel?: string;
  /**
   * @example
   * copilotPrecise
   */
  generateTechnology?: string;
  searchModels?: string[];
  searchParam?: RunSearchGenerationRequestChatConfigSearchParam;
  static names(): { [key: string]: string } {
    return {
      enableThinking: 'EnableThinking',
      excludeGenerateOptions: 'ExcludeGenerateOptions',
      generateLevel: 'GenerateLevel',
      generateTechnology: 'GenerateTechnology',
      searchModels: 'SearchModels',
      searchParam: 'SearchParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableThinking: 'boolean',
      excludeGenerateOptions: { 'type': 'array', 'itemType': 'string' },
      generateLevel: 'string',
      generateTechnology: 'string',
      searchModels: { 'type': 'array', 'itemType': 'string' },
      searchParam: RunSearchGenerationRequestChatConfigSearchParam,
    };
  }

  validate() {
    if(Array.isArray(this.excludeGenerateOptions)) {
      $dara.Model.validateArray(this.excludeGenerateOptions);
    }
    if(Array.isArray(this.searchModels)) {
      $dara.Model.validateArray(this.searchModels);
    }
    if(this.searchParam && typeof (this.searchParam as any).validate === 'function') {
      (this.searchParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequest extends $dara.Model {
  agentContext?: RunSearchGenerationRequestAgentContext;
  /**
   * @example
   * xxx
   */
  chatConfig?: RunSearchGenerationRequestChatConfig;
  /**
   * @example
   * qwen-max-latest
   */
  modelId?: string;
  /**
   * @example
   * xxx
   */
  originalSessionId?: string;
  /**
   * @example
   * xxx
   */
  prompt?: string;
  /**
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentContext: 'AgentContext',
      chatConfig: 'ChatConfig',
      modelId: 'ModelId',
      originalSessionId: 'OriginalSessionId',
      prompt: 'Prompt',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentContext: RunSearchGenerationRequestAgentContext,
      chatConfig: RunSearchGenerationRequestChatConfig,
      modelId: 'string',
      originalSessionId: 'string',
      prompt: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.agentContext && typeof (this.agentContext as any).validate === 'function') {
      (this.agentContext as any).validate();
    }
    if(this.chatConfig && typeof (this.chatConfig as any).validate === 'function') {
      (this.chatConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

