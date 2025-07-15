// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStepByStepWritingRequestReferenceDataArticles extends $dara.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
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
   * 8a20e007a6174522af4d6a2657d5526f
   */
  docUuid?: string;
  /**
   * @example
   * http://www.example.com
   */
  mediaUrl?: string;
  /**
   * @example
   * 2024-09-10 14:17:54
   */
  pubTime?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标签
   */
  tag?: string;
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
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
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
  articles?: RunStepByStepWritingRequestReferenceDataOutlinesArticles[];
  /**
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
  articles?: RunStepByStepWritingRequestReferenceDataArticles[];
  miniDoc?: string[];
  outlines?: RunStepByStepWritingRequestReferenceDataOutlines[];
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
   * @example
   * 必要提示
   */
  necessaryTips?: string;
  /**
   * @example
   * 立场
   */
  position?: string;
  /**
   * @example
   * 反向词
   */
  reverseWords?: string;
  /**
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
   * @example
   * 10
   */
  keyword?: string;
  /**
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
   * @example
   * media
   */
  domain?: string;
  keywords?: string[];
  promptTag?: RunStepByStepWritingRequestWritingConfigPromptTag;
  /**
   * @example
   * 分步骤写作场景，传媒写作支持的写作场景:新闻写作(默认),新闻评论,通用文体，公文写作支持的写作场景:通知(默认),通告,通报,请示,决定,函,通用文体
   */
  scene?: string;
  /**
   * @example
   * Writing
   */
  step?: string;
  summaryReturnType?: string;
  tags?: RunStepByStepWritingRequestWritingConfigTags[];
  /**
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
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 提示词
   */
  prompt?: string;
  referenceData?: RunStepByStepWritingRequestReferenceData;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
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

