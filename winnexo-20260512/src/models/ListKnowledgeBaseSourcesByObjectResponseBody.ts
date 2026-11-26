// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseSourcesByObjectResponseBodySources extends $dara.Model {
  /**
   * @remarks
   * The description of the to-do card type.
   * 
   * @example
   * user-data test user_data_test fa6c967-20260928141235
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * oort
   */
  directoryId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * openapi-feishu-personal-2ec49p76
   */
  name?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * read:user,read:repo,write:repo,read:org,read:group
   */
  scope?: string;
  /**
   * @remarks
   * The ID of the enterprise knowledge base FILE data source to be replaced.
   * 
   * @example
   * 2001188
   */
  sourceId?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * BUILTIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The data source status after re-parsing.
   * 
   * @example
   * Stopped
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      name: 'name',
      scope: 'scope',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      name: 'string',
      scope: 'string',
      sourceId: 'string',
      sourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeBaseSourcesByObjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The subject type filter.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The referenced sources. The key is the project name, and the value is the list of selected Logstores under the project, which is consistent with the structure submitted during creation. `["*"]` indicates all Logstores under the project. Otherwise, it is a list of exact Logstore names. If no sources are referenced, an empty object `{}` is returned.
   */
  sources?: ListKnowledgeBaseSourcesByObjectResponseBodySources[];
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      sources: 'sources',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      sources: { 'type': 'array', 'itemType': ListKnowledgeBaseSourcesByObjectResponseBodySources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

