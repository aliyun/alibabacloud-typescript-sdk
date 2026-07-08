// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunQuickWritingRequestArticles extends $dara.Model {
  /**
   * @remarks
   * Article content
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * Article title
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * Article URL
   * 
   * @example
   * https://www.example.com/aaa.docx
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

export class RunQuickWritingRequestSearchSources extends $dara.Model {
  /**
   * @remarks
   * SystemSearch: system-built-in search. CustomSemanticSearch: custom semantic index search. ThirdSearch: third-party API search.
   * 
   * @example
   * SystemSearch
   */
  code?: string;
  /**
   * @remarks
   * Unique identifier of the data source
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

export class RunQuickWritingRequest extends $dara.Model {
  /**
   * @remarks
   * Referenced articles
   * 
   * @example
   * 集合
   */
  articles?: RunQuickWritingRequestArticles[];
  /**
   * @remarks
   * Other writing parameters. Choose either prompt or writingParams.
   * 
   * This parameter is required.
   * 
   * @example
   * 请按英文输出
   */
  prompt?: string;
  /**
   * @remarks
   * Use the specified search source list.
   */
  searchSources?: RunQuickWritingRequestSearchSources[];
  /**
   * @remarks
   * Task ID. Reuse the same task ID for multi-turn conversations.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      prompt: 'Prompt',
      searchSources: 'SearchSources',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunQuickWritingRequestArticles },
      prompt: 'string',
      searchSources: { 'type': 'array', 'itemType': RunQuickWritingRequestSearchSources },
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
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

