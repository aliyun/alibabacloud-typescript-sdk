// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WritingOutline } from "./WritingOutline";


export class RunWritingV2RequestArticles extends $dara.Model {
  /**
   * @remarks
   * The content of the article.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * The publication time.
   * 
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @remarks
   * The name of the search source.
   * 
   * @example
   * QuarkCommonNews
   */
  searchSourceName?: string;
  /**
   * @remarks
   * The source of the article.
   * 
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @remarks
   * The title of the article.
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * The URL of the article.
   * 
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      pubTime: 'PubTime',
      searchSourceName: 'SearchSourceName',
      source: 'Source',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      pubTime: 'string',
      searchSourceName: 'string',
      source: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingV2RequestMiniDocs extends $dara.Model {
  /**
   * @remarks
   * The content of the snippet.
   * 
   * @example
   * 片段内容
   */
  content?: string;
  /**
   * @remarks
   * The index of the article snippet in the referenced article.
   * 
   * @example
   * 索引
   */
  index?: string;
  /**
   * @remarks
   * Specifies whether to prioritize this snippet.
   * 
   * @example
   * true
   */
  star?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      index: 'Index',
      star: 'Star',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      index: 'string',
      star: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingV2RequestOutlinesArticles extends $dara.Model {
  /**
   * @remarks
   * The content of the article.
   * 
   * @example
   * 正文内容
   */
  content?: string;
  /**
   * @remarks
   * The title of the article.
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * The URL of the article.
   * 
   * @example
   * 文章URL
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingV2RequestOutlines extends $dara.Model {
  /**
   * @remarks
   * A list of articles referenced by the outline.
   */
  articles?: RunWritingV2RequestOutlinesArticles[];
  /**
   * @remarks
   * The outline.
   * 
   * @example
   * 大纲
   */
  outline?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      outline: 'Outline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingV2RequestOutlinesArticles },
      outline: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingV2RequestSearchSources extends $dara.Model {
  /**
   * @remarks
   * The type of search source. Valid values: `SystemSearch` (built-in system search), `CustomSemanticSearch` (search of a custom semantic index), and `ThirdSearch` (search through a third-party API).
   * 
   * @example
   * SystemSearch
   */
  code?: string;
  /**
   * @remarks
   * The unique identifier of the data source.
   * 
   * @example
   * QuarkCommonNews
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the search source. This parameter is deprecated and has no effect.
   * 
   * @example
   * 互联网搜索
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
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

export class RunWritingV2RequestSummarization extends $dara.Model {
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * 事件名称
   */
  event?: string;
  /**
   * @remarks
   * The summary of the event.
   * 
   * @example
   * 事件摘编
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingV2Request extends $dara.Model {
  /**
   * @remarks
   * A list of articles to use as references. **Note:** When you provide this parameter, web search is disabled, overriding the `UseSearch` and `SearchSources` parameters.
   */
  articles?: RunWritingV2RequestArticles[];
  /**
   * @remarks
   * Specifies whether to enable step-by-step writing. For more information, see the `Step` parameter description.
   * 
   * @example
   * false
   */
  distributeWriting?: boolean;
  /**
   * @remarks
   * The number of articles to write. If you request multiple articles, the system returns them concurrently, each with a unique session ID.
   * 
   * @example
   * 2
   */
  gcNumberSize?: number;
  /**
   * @remarks
   * A string that specifies the desired article length. Examples: "about 300 words", "about 600 words", "about 1,000 words", or "about 2,000 words".
   * 
   * @example
   * 2000字左右
   */
  gcNumberSizeTag?: string;
  /**
   * @remarks
   * A list of keywords used for both search and writing.
   */
  keywords?: string[];
  /**
   * @remarks
   * The output language for the article.
   * 
   * - `en`: English
   * 
   * - `zh`: Chinese
   * 
   * - Other languages or specific style requirements can also be specified.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * A list of article snippets.
   */
  miniDocs?: RunWritingV2RequestMiniDocs[];
  /**
   * @remarks
   * A list of outlines for step-by-step writing.
   */
  outlineList?: WritingOutline[];
  /**
   * @remarks
   * A list of outlines for step-by-step writing. This parameter is deprecated. Use `OutlineList` instead.
   */
  outlines?: RunWritingV2RequestOutlines[];
  /**
   * @remarks
   * The writing prompt. You must provide either `Prompt` or `WritingParams`. For more information, see the description of the `PromptMode` parameter.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  /**
   * @remarks
   * The prompt mode. Valid values: `Template` (template mode) and `PE` (advanced PE mode).
   * 
   * 1. If this parameter is omitted, you must provide the `Prompt` parameter. We recommend that the prompt includes the topic, length, requirements, and prohibitions.
   * 
   * 2. If `PromptMode` is set to `Template`, you must provide `WritingParams`, which is a dictionary of string key-value pairs. For the required schema, see the `.Data.TemplateDefine[].Fields` field in the response of the [ListWritingStyles](https://help.aliyun.com/document_detail/2922609.html) operation.
   * 
   * 3. If `PromptMode` is set to `PE`, you must pass `WritingParams` with the following two fields:
   * 
   *    1. `topic`: Required. The topic to write about.
   * 
   *    2. `prompt`: Optional. Any additional custom prompts or writing requirements.
   * 
   * @example
   * Template
   */
  promptMode?: string;
  /**
   * @remarks
   * A list of specified search sources to use.
   */
  searchSources?: RunWritingV2RequestSearchSources[];
  /**
   * @remarks
   * The ID of a single-turn conversation. This parameter is deprecated and its use is discouraged.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * The source tracing method. Currently, only `modelSourceTrace` is supported. If set to `modelSourceTrace`, the model adds citation markers (for example, `[[1]]`) to the end of each cited snippet in the generated text. The citation index starts at 1.
   * 
   * @example
   * modelSourceTrace
   */
  sourceTraceMethod?: string;
  /**
   * @remarks
   * The step for step-by-step writing. Valid values:
   * 
   * - `OutlineGenerate`: Outline generation
   * 
   * - `Writing`: Article writing
   * 
   * When `DistributeWriting` is `true`, the default flow for step-by-step writing is to first generate an outline and then write the content based on it.
   * 
   * @example
   * Writing
   */
  step?: string;
  /**
   * @remarks
   * A list of summarization objects, used for step-by-step writing.
   */
  summarization?: RunWritingV2RequestSummarization[];
  /**
   * @remarks
   * The unique ID of the task. You can reuse the same task ID for a multi-turn conversation.
   * 
   * > The system automatically generates a `TaskId` if you do not specify one. Reusing the same `TaskId` for subsequent requests groups them into a single conversation.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * Specifies whether to enable web search. If `true`, the system uses its built-in web search feature. Default: `false`.
   * 
   * @example
   * true
   */
  useSearch?: boolean;
  /**
   * @remarks
   * The unique ID of the Model Studio workspace. For more information, see [Obtain a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  /**
   * @remarks
   * The parameters for template-based writing, provided as a dictionary of string key-value pairs. You must provide either `Prompt` or `WritingParams`. For more information, see the description of the `PromptMode` parameter.
   */
  writingParams?: { [key: string]: string };
  /**
   * @remarks
   * The writing scene. Valid values: `government` (government affairs), `media`, `market` (marketing), `office`, and `custom`.
   * 
   * @example
   * media
   */
  writingScene?: string;
  /**
   * @remarks
   * The writing style. For a list of supported styles, see [ListWritingStyles](https://help.aliyun.com/document_detail/2922609.html).
   * 
   * @example
   * 新闻评论
   */
  writingStyle?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      distributeWriting: 'DistributeWriting',
      gcNumberSize: 'GcNumberSize',
      gcNumberSizeTag: 'GcNumberSizeTag',
      keywords: 'Keywords',
      language: 'Language',
      miniDocs: 'MiniDocs',
      outlineList: 'OutlineList',
      outlines: 'Outlines',
      prompt: 'Prompt',
      promptMode: 'PromptMode',
      searchSources: 'SearchSources',
      sessionId: 'SessionId',
      sourceTraceMethod: 'SourceTraceMethod',
      step: 'Step',
      summarization: 'Summarization',
      taskId: 'TaskId',
      useSearch: 'UseSearch',
      workspaceId: 'WorkspaceId',
      writingParams: 'WritingParams',
      writingScene: 'WritingScene',
      writingStyle: 'WritingStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingV2RequestArticles },
      distributeWriting: 'boolean',
      gcNumberSize: 'number',
      gcNumberSizeTag: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      miniDocs: { 'type': 'array', 'itemType': RunWritingV2RequestMiniDocs },
      outlineList: { 'type': 'array', 'itemType': WritingOutline },
      outlines: { 'type': 'array', 'itemType': RunWritingV2RequestOutlines },
      prompt: 'string',
      promptMode: 'string',
      searchSources: { 'type': 'array', 'itemType': RunWritingV2RequestSearchSources },
      sessionId: 'string',
      sourceTraceMethod: 'string',
      step: 'string',
      summarization: { 'type': 'array', 'itemType': RunWritingV2RequestSummarization },
      taskId: 'string',
      useSearch: 'boolean',
      workspaceId: 'string',
      writingParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      writingScene: 'string',
      writingStyle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    if(Array.isArray(this.miniDocs)) {
      $dara.Model.validateArray(this.miniDocs);
    }
    if(Array.isArray(this.outlineList)) {
      $dara.Model.validateArray(this.outlineList);
    }
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    if(Array.isArray(this.summarization)) {
      $dara.Model.validateArray(this.summarization);
    }
    if(this.writingParams) {
      $dara.Model.validateMap(this.writingParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

