// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingRequestReferenceDataArticles extends $dara.Model {
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
   * 2124ca4d48a542d788aa86151e1a8c8b
   */
  docUuid?: string;
  /**
   * @remarks
   * The publication time.
   * 
   * @example
   * 2024-08-28 11:38:28
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

export class RunWritingRequestReferenceData extends $dara.Model {
  /**
   * @remarks
   * The reference article data for writing.
   */
  articles?: RunWritingRequestReferenceDataArticles[];
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingRequestReferenceDataArticles },
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

export class RunWritingRequestWritingConfigPromptTag extends $dara.Model {
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
   * The stance.
   * 
   * @example
   * 立场
   */
  position?: string;
  /**
   * @remarks
   * Negative keywords.
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

export class RunWritingRequestWritingConfigTags extends $dara.Model {
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
   * The tag of the option. Example: gcNumberSizeTag=10.
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

export class RunWritingRequestWritingConfig extends $dara.Model {
  /**
   * @remarks
   * The writing domain.
   * 
   * - media: Media
   * 
   * - government: Government
   * 
   * - market: Marketing
   * 
   * @example
   * media
   */
  domain?: string;
  /**
   * @remarks
   * The prompt assistant.
   */
  promptTag?: RunWritingRequestWritingConfigPromptTag;
  /**
   * @remarks
   * Control parameters for writing, such as the style, length, and output language.
   */
  tags?: RunWritingRequestWritingConfigTags[];
  /**
   * @remarks
   * Specifies whether to automatically add reference materials.
   * 
   * @example
   * true
   */
  useSearch?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      promptTag: 'PromptTag',
      tags: 'Tags',
      useSearch: 'UseSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      promptTag: RunWritingRequestWritingConfigPromptTag,
      tags: { 'type': 'array', 'itemType': RunWritingRequestWritingConfigTags },
      useSearch: 'boolean',
    };
  }

  validate() {
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

export class RunWritingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the original conversation to use for regeneration.
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
  referenceData?: RunWritingRequestReferenceData;
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
   * The ID of the task. You can reuse the same task ID in a multi-turn conversation.
   * 
   * > You do not need to specify TaskId. The system generates one automatically. If you use the same TaskId for multiple tasks, they are grouped into a single conversation.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Get a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
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
  writingConfig?: RunWritingRequestWritingConfig;
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
      referenceData: RunWritingRequestReferenceData,
      sessionId: 'string',
      taskId: 'string',
      workspaceId: 'string',
      writingConfig: RunWritingRequestWritingConfig,
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

