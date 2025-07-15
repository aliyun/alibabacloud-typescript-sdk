// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingRequestReferenceDataArticles extends $dara.Model {
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
   * 2124ca4d48a542d788aa86151e1a8c8b
   */
  docUuid?: string;
  /**
   * @example
   * 2024-08-28 11:38:28
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

export class RunWritingRequestWritingConfigTags extends $dara.Model {
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

export class RunWritingRequestWritingConfig extends $dara.Model {
  /**
   * @example
   * 写作领域，media:传媒,government:政务,market:营销
   */
  domain?: string;
  promptTag?: RunWritingRequestWritingConfigPromptTag;
  tags?: RunWritingRequestWritingConfigTags[];
  /**
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
  referenceData?: RunWritingRequestReferenceData;
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

