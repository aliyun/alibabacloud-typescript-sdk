// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoresResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The name of the context store.
   * 
   * @example
   * test-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The context type.
   * 
   * @example
   * memory
   */
  contextType?: string;
  /**
   * @remarks
   * The creation time of the context store. The value is a Unix timestamp in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 173847364841938
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the context store.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the context store.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The last update time of the context store. The value is a Unix timestamp in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 173847364841938
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      createTime: 'createTime',
      description: 'description',
      regionId: 'regionId',
      status: 'status',
      updateTime: 'updateTime',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextStoreName: 'string',
      contextType: 'string',
      createTime: 'string',
      description: 'string',
      regionId: 'string',
      status: 'string',
      updateTime: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextStoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results returned per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this field is empty, all results have been returned.
   * 
   * @example
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of context stores.
   */
  results?: ListContextStoresResponseBodyResults[];
  /**
   * @remarks
   * The total number of context stores.
   * 
   * @example
   * 56
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ListContextStoresResponseBodyResults },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

