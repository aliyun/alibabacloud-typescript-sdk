// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoreAPIKeysResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The complete API key value.
   * 
   * @example
   * sk-3ac8d45d741e4f31b81aa6ee984ce9fd
   */
  apiKey?: string;
  /**
   * @remarks
   * The name of the context store.
   * 
   * @example
   * test-context-Store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The time when the API key was created, represented as a Unix timestamp.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1778205145
   */
  createTime?: string;
  /**
   * @remarks
   * The display name of the API key. This name helps you identify the purpose of the key.
   * 
   * @example
   * Production Service Key
   */
  name?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * test-workspace
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      contextStoreName: 'contextStoreName',
      createTime: 'createTime',
      name: 'name',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      contextStoreName: 'string',
      createTime: 'string',
      name: 'string',
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

export class ListContextStoreAPIKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. To retrieve the next page of results, include this value in the `nextToken` parameter of your next request. If this parameter is not returned, there are no more results.
   * 
   * @example
   * xCs4wJD41qEejNkappMSJ1OL2Ky2GeKLqmBLJrC61WrgUOj9F-31jHbo5Kgqzifv
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of API keys.
   */
  results?: ListContextStoreAPIKeysResponseBodyResults[];
  /**
   * @remarks
   * The total count of entries that match the query.
   * 
   * @example
   * 454
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
      results: { 'type': 'array', 'itemType': ListContextStoreAPIKeysResponseBodyResults },
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

