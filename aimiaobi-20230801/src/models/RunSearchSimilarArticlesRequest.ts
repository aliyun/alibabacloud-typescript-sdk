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
  searchSources?: RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources[];
  static names(): { [key: string]: string } {
    return {
      searchSources: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSources: { 'type': 'array', 'itemType': RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources },
    };
  }

  validate() {
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
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

