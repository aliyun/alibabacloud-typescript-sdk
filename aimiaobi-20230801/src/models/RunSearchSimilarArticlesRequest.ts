// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources extends $dara.Model {
  /**
   * @example
   * SystemSearch
   */
  code?: string;
  datasetName?: string;
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
  categoryUuids?: string[];
  createTimeEnd?: number;
  createTimeStart?: number;
  docIds?: string[];
  docTypes?: string[];
  docUuids?: string[];
  endTime?: number;
  extend1?: string;
  extend2?: string;
  extend3?: string;
  searchSources?: RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources[];
  startTime?: number;
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
  chatConfig?: RunSearchSimilarArticlesRequestChatConfig;
  /**
   * @example
   * html
   */
  docType?: string;
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxx/xxx
   */
  url?: string;
  /**
   * @remarks
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

