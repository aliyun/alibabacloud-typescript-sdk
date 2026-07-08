// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources extends $dara.Model {
  /**
   * @remarks
   * Search source type:
   * 
   * - SystemSearch: Built-in system search.
   * 
   * - CustomSemanticSearch: Custom semantic index search.
   * 
   * - ThirdSearch: Third-party API search.
   * 
   * @example
   * SystemSearch
   */
  code?: string;
  /**
   * @remarks
   * Unique identifier of the search source.
   * 
   * @example
   * QuarkCommonNews
   */
  datasetName?: string;
  /**
   * @remarks
   * Search source name (optional).
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

export class RunSearchSimilarArticlesRequestChatConfigSearchParam extends $dara.Model {
  /**
   * @remarks
   * Category UUID
   */
  categoryUuids?: string[];
  /**
   * @remarks
   * Creation Time cutoff, in UNIX timestamp format.
   * 
   * @example
   * 111
   */
  createTimeEnd?: number;
  /**
   * @remarks
   * Start Creation Time.
   * 
   * @example
   * 111
   */
  createTimeStart?: number;
  /**
   * @remarks
   * Document ID
   */
  docIds?: string[];
  /**
   * @remarks
   * Document types: text, image, video, audio, pdf, word, ppt, etc.
   */
  docTypes?: string[];
  /**
   * @remarks
   * Document UUID
   */
  docUuids?: string[];
  /**
   * @remarks
   * End Time
   * 
   * @example
   * 111
   */
  endTime?: number;
  /**
   * @remarks
   * Extension Field 1
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension Field 2
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension Field 3
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Search sources.
   */
  searchSources?: RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources[];
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 1725983999999
   */
  startTime?: number;
  /**
   * @remarks
   * Tag Name
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryUuids: 'CategoryUuids',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      docIds: 'DocIds',
      docTypes: 'DocTypes',
      docUuids: 'DocUuids',
      endTime: 'EndTime',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      searchSources: 'SearchSources',
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
      docTypes: { 'type': 'array', 'itemType': 'string' },
      docUuids: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      searchSources: { 'type': 'array', 'itemType': RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources },
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
    if(Array.isArray(this.docTypes)) {
      $dara.Model.validateArray(this.docTypes);
    }
    if(Array.isArray(this.docUuids)) {
      $dara.Model.validateArray(this.docUuids);
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

export class RunSearchSimilarArticlesRequestChatConfig extends $dara.Model {
  /**
   * @remarks
   * Search configuration parameters.
   */
  searchParam?: RunSearchSimilarArticlesRequestChatConfigSearchParam;
  static names(): { [key: string]: string } {
    return {
      searchParam: 'SearchParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchParam: RunSearchSimilarArticlesRequestChatConfigSearchParam,
    };
  }

  validate() {
    if(this.searchParam && typeof (this.searchParam as any).validate === 'function') {
      (this.searchParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchSimilarArticlesRequest extends $dara.Model {
  /**
   * @remarks
   * Communication configuration parameters.
   */
  chatConfig?: RunSearchSimilarArticlesRequestChatConfig;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * html
   */
  docType?: string;
  /**
   * @remarks
   * Article title.
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxx/xxx
   */
  url?: string;
  /**
   * @remarks
   * Unique identifier of the Alibaba Cloud Model Studio workspace. To get this ID, see [Get the workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      chatConfig: 'ChatConfig',
      docType: 'DocType',
      title: 'Title',
      url: 'Url',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfig: RunSearchSimilarArticlesRequestChatConfig,
      docType: 'string',
      title: 'string',
      url: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.chatConfig && typeof (this.chatConfig as any).validate === 'function') {
      (this.chatConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

