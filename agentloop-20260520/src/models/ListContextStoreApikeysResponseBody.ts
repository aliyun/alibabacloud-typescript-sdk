// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoreAPIKeysResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace to which the API key belongs.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The full value of the API key. The plaintext value is returned only when the API key is created. In list scenarios, the value is masked based on business rules.
   * 
   * @example
   * sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The name of the context store to which the API key belongs.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The time when the API key was created, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The display name of the API key.
   * 
   * @example
   * my-api-key
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      apiKey: 'apiKey',
      contextStoreName: 'contextStoreName',
      createTime: 'createTime',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      apiKey: 'string',
      contextStoreName: 'string',
      createTime: 'string',
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

export class ListContextStoreAPIKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page that was specified in the request. This value is echoed back.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. An empty string indicates that the current page is the last page.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The list of API keys.
   */
  results?: ListContextStoreAPIKeysResponseBodyResults[];
  /**
   * @remarks
   * The total number of API keys that match the query conditions.
   * 
   * @example
   * 3
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

