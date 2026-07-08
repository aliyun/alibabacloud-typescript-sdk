// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStepByStepWritingRequestReferenceDataArticles extends $dara.Model {
  /**
   * @remarks
   * The author.
   * 
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * The custom unique ID of the document.
   * 
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @remarks
   * The internal unique ID of the document.
   * 
   * @example
   * 8a20e007a6174522af4d6a2657d5526f
   */
  docUuid?: string;
  /**
   * @remarks
   * The URL of the original material.
   * 
   * @example
   * http://www.example.com
   */
  mediaUrl?: string;
  /**
   * @remarks
   * The publication time.
   * 
   * @example
   * 2024-09-10 14:17:54
   */
  pubTime?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @remarks
   * The article summary.
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @remarks
   * The title.
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
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      mediaUrl: 'MediaUrl',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      mediaUrl: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
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

export class RunStepByStepWritingRequestReferenceDataOutlinesArticles extends $dara.Model {
  /**
   * @remarks
   * The article content.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * The article title.
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * The article URL.
   * 
   * @example
   * 文章链接
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

export class RunStepByStepWritingRequestReferenceDataOutlines extends $dara.Model {
  /**
   * @remarks
   * The specified data source for the outline.
   */
  articles?: RunStepByStepWritingRequestReferenceDataOutlinesArticles[];
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
      articles: { 'type': 'array', 'itemType': RunStepByStepWritingRequestReferenceDataOutlinesArticles },
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

export class RunStepByStepWritingRequestReferenceData extends $dara.Model {
  /**
   * @remarks
   * The reference article data for writing.
   */
  articles?: RunStepByStepWritingRequestReferenceDataArticles[];
  /**
   * @remarks
   * The ranked article segments for subsequent model generation.
   */
  miniDoc?: string[];
  /**
   * @remarks
   * The outline. You can specify a data source to generate the outline.
   */
  outlines?: RunStepByStepWritingRequestReferenceDataOutlines[];
  /**
   * @remarks
   * The summary result from the Large Language Model (LLM).
   */
  summarization?: string[];
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      miniDoc: 'MiniDoc',
      outlines: 'Outlines',
      summarization: 'Summarization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunStepByStepWritingRequestReferenceDataArticles },
      miniDoc: { 'type': 'array', 'itemType': 'string' },
      outlines: { 'type': 'array', 'itemType': RunStepByStepWritingRequestReferenceDataOutlines },
      summarization: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.miniDoc)) {
      $dara.Model.validateArray(this.miniDoc);
    }
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    if(Array.isArray(this.summarization)) {
      $dara.Model.validateArray(this.summarization);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequestWritingConfigPromptTag extends $dara.Model {
  /**
   * @remarks
   * Necessary tips.
   * 
   * @example
   * 必要提示
   */
  necessaryTips?: string;
  /**
   * @remarks
   * The position or stance.
   * 
   * @example
   * 立场
   */
  position?: string;
  /**
   * @remarks
   * Reverse the words.
   * 
   * @example
   * 反向词
   */
  reverseWords?: string;
  /**
   * @remarks
   * The theme.
   * 
   * @example
   * 主题
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      necessaryTips: 'NecessaryTips',
      position: 'Position',
      reverseWords: 'ReverseWords',
      theme: 'Theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      necessaryTips: 'string',
      position: 'string',
      reverseWords: 'string',
      theme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequestWritingConfigTags extends $dara.Model {
  /**
   * @remarks
   * The value of the option.
   * 
   * @example
   * 10
   */
  keyword?: string;
  /**
   * @remarks
   * The tag of the option. For example, gcNumberSizeTag=10.
   * 
   * @example
   * gcNumberSizeTag
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingRequestWritingConfig extends $dara.Model {
  /**
   * @remarks
   * The writing domain.
   * 
   * - media (default): Media writing.
   * 
   * - government: Official document writing.
   * 
   * @example
   * media
   */
  domain?: string;
  /**
   * @remarks
   * The keywords. This affects article retrieval.
   */
  keywords?: string[];
  /**
   * @remarks
   * The prompt assistant.
   */
  promptTag?: RunStepByStepWritingRequestWritingConfigPromptTag;
  /**
   * @remarks
   * The step-by-step writing scenario.
   * 
   * - Scenarios supported for media writing: News Writing (default), News Commentary, and General Style.
   * 
   * - Scenarios supported for official document writing: Notification (default), Announcement, Bulletin, Request for Instruction, Decision, Letter, and General Style.
   * 
   * @example
   * 新闻写作
   */
  scene?: string;
  /**
   * @remarks
   * The writing step.
   * 
   * - Generate outline: OutlineGenerate
   * 
   * - Generate summary: MiniDocSummary
   * 
   * - Writing (default): Generate article
   * 
   * @example
   * Writing
   */
  step?: string;
  /**
   * @remarks
   * The return type of the summary result.<br>
   * 
   * - Structure:
   *   Returns a JSON string in payload.output.text. Example format: `{"event":"{outline}","message":"{message}"}`
   * 
   * - Content: Returns only the plain text summary content in payload.output.text. Example format:
   *   `Outline: {outline}
   * 
   * {message}
   * 
   * 
   *  Outline: {outline}
   * 
   * {message}`
   * 
   * - Event: Returns only the outline content itself in payload.output.text each time an outline is completed. Typically, six describes are returned.
   * 
   * @example
   * Structure
   */
  summaryReturnType?: string;
  /**
   * @remarks
   * Control parameters for writing, such as style, length, and output language.
   */
  tags?: RunStepByStepWritingRequestWritingConfigTags[];
  /**
   * @remarks
   * Specifies whether to automatically supplement materials.
   * 
   * @example
   * true
   */
  useSearch?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      keywords: 'Keywords',
      promptTag: 'PromptTag',
      scene: 'Scene',
      step: 'Step',
      summaryReturnType: 'SummaryReturnType',
      tags: 'Tags',
      useSearch: 'UseSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      promptTag: RunStepByStepWritingRequestWritingConfigPromptTag,
      scene: 'string',
      step: 'string',
      summaryReturnType: 'string',
      tags: { 'type': 'array', 'itemType': RunStepByStepWritingRequestWritingConfigTags },
      useSearch: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    if(this.promptTag && typeof (this.promptTag as any).validate === 'function') {
      (this.promptTag as any).validate();
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

export class RunStepByStepWritingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the original conversation when regenerating content.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * The prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  /**
   * @remarks
   * The reference article data for writing.
   */
  referenceData?: RunStepByStepWritingRequestReferenceData;
  /**
   * @remarks
   * The ID of a single-turn conversation.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * The task ID. You can reuse the same task ID for a multi-turn conversation.
   * 
   * > By default, you do not need to specify this parameter. The system automatically generates a task ID. If you specify the same TaskId for subsequent tasks, the tasks are considered part of the same conversation group.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Obtain a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  /**
   * @remarks
   * The writing configuration.
   */
  writingConfig?: RunStepByStepWritingRequestWritingConfig;
  static names(): { [key: string]: string } {
    return {
      originSessionId: 'OriginSessionId',
      prompt: 'Prompt',
      referenceData: 'ReferenceData',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
      writingConfig: 'WritingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originSessionId: 'string',
      prompt: 'string',
      referenceData: RunStepByStepWritingRequestReferenceData,
      sessionId: 'string',
      taskId: 'string',
      workspaceId: 'string',
      writingConfig: RunStepByStepWritingRequestWritingConfig,
    };
  }

  validate() {
    if(this.referenceData && typeof (this.referenceData as any).validate === 'function') {
      (this.referenceData as any).validate();
    }
    if(this.writingConfig && typeof (this.writingConfig as any).validate === 'function') {
      (this.writingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

