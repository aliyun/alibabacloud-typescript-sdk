// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelectionTextSearchResultSearchResult extends $dara.Model {
  /**
   * @remarks
   * Relevant chunks.
   */
  chunks?: string[];
  /**
   * @remarks
   * Content.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @remarks
   * Internal unique document identifier.
   * 
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @remarks
   * Publication time.
   * 
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @remarks
   * Relevance score.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * Unique identifier for the search source. Same as searchSource.datasetName.
   * 
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @remarks
   * Name of the search source.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Search source type. Same as searchSource.code.
   * 
   * @example
   * SystemSearch
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Source.
   * 
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @remarks
   * Article summary.
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
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
  /**
   * @remarks
   * List of text search results.
   */
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
   * @remarks
   * Unique identifier for the original session. Used to retrieve full results from that session. Required only for media asset search.
   * 
   * @example
   * 原始会话唯一标识：搜索结果取这个会话中的全量，目前仅媒资搜索场景需要
   */
  originalSessionId?: string;
  /**
   * @remarks
   * Used only for clustering. Pass ClusterGenerate when performing secondary clustering on cluster subtopics.
   * 
   * @example
   * TextGenerate
   */
  searchModel?: string;
  /**
   * @remarks
   * When SearchModel = ClusterGenerate, enter the topic name for the subtopic. Include quotation marks if the original value has them.
   * 
   * @example
   * 分类1
   */
  searchModelDataValue?: string;
  /**
   * @remarks
   * The type of referenced data source. Valid values: ‒ all: Retrieves the full data from historical sessions. This value is supported only in clustering scenarios. ‒ selected: Retrieves data from textSearchResult during generation.
   * 
   * @example
   * all
   */
  selectionType?: string;
  /**
   * @remarks
   * Unique identifier for the session used as reference during generation. Used for clustering in media asset search.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * Text search results.
   */
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
  /**
   * @remarks
   * Follow-up question.
   * 
   * @example
   * 您想了解关于xx的哪些信息？
   */
  askUser?: string;
  /**
   * @remarks
   * List of recommended keywords for follow-up questions.
   */
  askUserKeywords?: string[];
  /**
   * @remarks
   * Current step.
   * 
   * @example
   * think
   */
  currentStep?: string;
  /**
   * @remarks
   * User-provided or selected multimodal data.
   */
  multimodalMediaSelection?: RunSearchGenerationRequestAgentContextBizContextMultimodalMediaSelection;
  /**
   * @remarks
   * Next step.
   * 
   * @example
   * generate
   */
  nextStep?: string;
  /**
   * @remarks
   * Skip follow-up questions.
   * 
   * @example
   * false
   */
  skipCurrentSupplement?: boolean;
  /**
   * @remarks
   * Data type needed for reasoning: searchQuery.
   * 
   * @example
   * searchQuery
   */
  supplementDataType?: string;
  /**
   * @remarks
   * Specifies whether supplementation is required.
   * 
   * @example
   * true
   */
  supplementEnable?: boolean;
  /**
   * @remarks
   * User feedback to follow-up questions.
   * 
   * @example
   * 地点
   */
  userBack?: string;
  /**
   * @remarks
   * List of keywords from user feedback to follow-up questions.
   */
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
  /**
   * @remarks
   * Business context.
   */
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
   * @remarks
   * Search source type:
   * 
   * - SystemSearch: Built-in system search
   * 
   * - CustomSemanticSearch: Custom semantic index search
   * 
   * - ThirdSearch: Third-party API search
   * 
   * @example
   * SystemSearch
   */
  code?: string;
  /**
   * @remarks
   * Unique identifier for the search source: matches the dataset name shown in the console, such as 4cb0eda3fad841758262dbe8d61191.
   * 
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
   * @remarks
   * Unique category identifier.
   */
  categoryUuids?: string[];
  /**
   * @remarks
   * End creation time, in UNIX timestamp format.
   * 
   * @example
   * 111111111111
   */
  createTimeEnd?: number;
  /**
   * @remarks
   * Start creation time, in UNIX timestamp format.
   * 
   * @example
   * 111111111111
   */
  createTimeStart?: number;
  /**
   * @remarks
   * Array of document IDs.
   */
  docIds?: string[];
  /**
   * @remarks
   * Unique document identifier.
   */
  docUuids?: string[];
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 1725983999999
   */
  endTime?: number;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xxx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xxx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xxx
   */
  extend3?: string;
  /**
   * @remarks
   * Search scope list.
   */
  multimodalSearchTypes?: string[];
  /**
   * @remarks
   * Voice search threshold: Applies only to custom data sources (range: 0 to 1).
   * 
   * @example
   * 0.66
   */
  searchAudioMinScore?: number;
  /**
   * @remarks
   * Image search threshold: Applies only to custom data sources (range: 0 to 1).
   * 
   * @example
   * 0.66
   */
  searchImageMinScore?: number;
  /**
   * @remarks
   * List of search sources.
   */
  searchSources?: RunSearchGenerationRequestChatConfigSearchParamSearchSources[];
  /**
   * @remarks
   * Text search threshold: Applies only to custom data sources (range: 0 to 1).
   * 
   * @example
   * 0.66
   */
  searchTextMinScore?: number;
  /**
   * @remarks
   * Video search threshold: Applies only to custom data sources (range: 0 to 1).
   * 
   * @example
   * 0.66
   */
  searchVideoMinScore?: number;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 1725983999999
   */
  startTime?: number;
  /**
   * @remarks
   * Tags.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryUuids: 'CategoryUuids',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      docIds: 'DocIds',
      docUuids: 'DocUuids',
      endTime: 'EndTime',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalSearchTypes: 'MultimodalSearchTypes',
      searchAudioMinScore: 'SearchAudioMinScore',
      searchImageMinScore: 'SearchImageMinScore',
      searchSources: 'SearchSources',
      searchTextMinScore: 'SearchTextMinScore',
      searchVideoMinScore: 'SearchVideoMinScore',
      startTime: 'StartTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuids: { 'type': 'array', 'itemType': 'string' },
      createTimeEnd: 'number',
      createTimeStart: 'number',
      docIds: { 'type': 'array', 'itemType': 'string' },
      docUuids: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalSearchTypes: { 'type': 'array', 'itemType': 'string' },
      searchAudioMinScore: 'number',
      searchImageMinScore: 'number',
      searchSources: { 'type': 'array', 'itemType': RunSearchGenerationRequestChatConfigSearchParamSearchSources },
      searchTextMinScore: 'number',
      searchVideoMinScore: 'number',
      startTime: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.categoryUuids)) {
      $dara.Model.validateArray(this.categoryUuids);
    }
    if(Array.isArray(this.docIds)) {
      $dara.Model.validateArray(this.docIds);
    }
    if(Array.isArray(this.docUuids)) {
      $dara.Model.validateArray(this.docUuids);
    }
    if(Array.isArray(this.multimodalSearchTypes)) {
      $dara.Model.validateArray(this.multimodalSearchTypes);
    }
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchGenerationRequestChatConfig extends $dara.Model {
  /**
   * @remarks
   * Enable deep thinking.
   * 
   * @example
   * false
   */
  enableThinking?: boolean;
  /**
   * @remarks
   * List of generation options to skip.
   */
  excludeGenerateOptions?: string[];
  /**
   * @remarks
   * Detailedness of the response:
   * 
   * - concise: Concise (default)
   * 
   * - enhance: Enhanced
   * 
   * - free: Free-form
   * 
   * - deepResearch: Research-level
   * 
   * @example
   * concise
   */
  generateLevel?: string;
  /**
   * @remarks
   * Generation technology:
   * 
   * - copilotReference: Q\\&A-style search
   * 
   * - copilotPrecise: Pure search
   * 
   * @example
   * copilotReference
   */
  generateTechnology?: string;
  /**
   * @remarks
   * Plain-text prompt template for Q\\&A-style search and summary generation. Must include variables {query} and {content}. Example:
   * 
   * ```text
   * # Role
   * You are an expert article retrieval and Q&A assistant.
   * 
   * # Goal
   * Answer or explain the user\\"s question "{query}" using the retrieved articles.
   * 
   * # Constraints
   * - Filter by knowledge date if the question mentions a specific date.
   * - Structure responses clearly.
   * - Keep responses concise.
   * - Do not use external data or fabricate answers.
   * - If unable to answer, respond in the appropriate language:
   *   - Chinese: "Unable to answer based on known information."
   *   - English: "Unable to answer based on the known information."
   * 
   * # Input
   * ## Retrieved articles
   * {content}
   * ```
   * 
   * @example
   * # 角色
   * 你是一个专业的文章检索和问答专家，擅长文章检索和回答用户问题。
   * 
   * # 任务目标
   * 请你根据检索到的相关文章，回答或表述用户问题“{query}”。
   * 
   * # 任务限制
   * - 如果用户问题中提到具体日期，请考虑知识日期做筛选。
   * - 生成内容结构条理。
   * - 生成内容尽量精简。
   * - 不要使用其他数据，不要杜撰。
   * - 如果不能回答用户问题，请输出对应语言的拒识文案:
   *   - 中文："根据已知信息无法回答。"
   *   - 英文："Unable to answer based on the known information."
   * 
   * # 输入数据
   * ## 检索到的相关文章
   * {content}
   */
  modelCustomPromptTemplate?: string;
  /**
   * @remarks
   * Plain-text prompt template for Q\\&A-style search and summary generation. Must include variables {query} and {content}. Example:
   * 
   * ```text
   * # Role
   * You are an expert article retrieval and Q&A assistant.
   * 
   * # Goal
   * Answer or explain the user\\"s question "{query}" using the retrieved articles and images.
   * 
   * # Constraints
   * - Filter by knowledge date if the question mentions a specific date.
   * - Structure responses clearly.
   * - Keep responses concise.
   * - Ignore article content if image content fully answers the question.
   * - Do not use external data or fabricate answers.
   * - If unable to answer, respond in the appropriate language:
   *     - Chinese: "Unable to answer based on known information."
   *     - English: "Unable to answer based on the known information."
   * 
   * # Input
   * ## Retrieved articles
   * {content}
   * ```
   * 
   * @example
   * # 角色
   * 你是一个专业的文章检索和问答专家，擅长文章检索和回答用户问题。
   * 
   * # 任务目标
   * 请你根据检索到的相关文章和图片，回答或表述用户问题“{query}”。
   * 
   * # 任务限制
   * - 如果用户问题中提到具体日期，请考虑知识日期做筛选。
   * - 生成内容结构条理。
   * - 生成内容尽量精简。
   * - 如果图片内容可以回答，可以忽略文章内容。
   * - 不要使用其他数据，不要杜撰。
   * - 如果不能回答用户问题，请输出对应语言的拒识文案:
   *     - 中文："根据已知信息无法回答。"
   *     - 英文："Unable to answer based on the known information."
   * 
   * # 输入数据
   * ## 检索到的相关文章
   * {content}
   */
  modelCustomVlPromptTemplate?: string;
  /**
   * @remarks
   * List of search types.
   */
  searchModels?: string[];
  /**
   * @remarks
   * Search parameters.
   */
  searchParam?: RunSearchGenerationRequestChatConfigSearchParam;
  static names(): { [key: string]: string } {
    return {
      enableThinking: 'EnableThinking',
      excludeGenerateOptions: 'ExcludeGenerateOptions',
      generateLevel: 'GenerateLevel',
      generateTechnology: 'GenerateTechnology',
      modelCustomPromptTemplate: 'ModelCustomPromptTemplate',
      modelCustomVlPromptTemplate: 'ModelCustomVlPromptTemplate',
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
      modelCustomPromptTemplate: 'string',
      modelCustomVlPromptTemplate: 'string',
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
  /**
   * @remarks
   * Context.
   */
  agentContext?: RunSearchGenerationRequestAgentContext;
  /**
   * @remarks
   * Session configuration.
   * 
   * @example
   * xxx
   */
  chatConfig?: RunSearchGenerationRequestChatConfig;
  /**
   * @remarks
   * Image URL. Used for image search and hybrid text-and-image (prompt) search generation.
   * 
   * @example
   * http://xxxx
   */
  fileUrl?: string;
  /**
   * @remarks
   * Model ID:
   * 
   * - quanmiao-max: Quanmiao-Max
   * 
   * - quanmiao-plus: Quanmiao-Plus
   * 
   * @example
   * quanmiao-max
   */
  modelId?: string;
  /**
   * @remarks
   * Original session identifier. Usually empty. When non-empty, it indicates that the current conversation is based on the referenced session. The system loads parameters and search results from that session and replaces the generated result. Use this for re-generation, changing data sources, or adding new agents.
   * 
   * @example
   * xxx
   */
  originalSessionId?: string;
  /**
   * @remarks
   * Search query.
   * 
   * @example
   * 杭州亚运会吉祥物是什么
   */
  prompt?: string;
  /**
   * @remarks
   * Unique identifier for the session task.
   * 
   * > By default, you do not need to provide a TaskId. The system generates one automatically. If you specify the same TaskId in subsequent requests, those tasks are grouped into the same conversation.
   * 
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * ID of the Alibaba Cloud Model Studio workspace. To learn how to obtain this ID, see [How to use workspaces](https://help.aliyun.com/document_detail/2782167.html).
   * 
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
      fileUrl: 'FileUrl',
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
      fileUrl: 'string',
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

