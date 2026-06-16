// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoreAPIKeysResponseBodyResults extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @example
   * sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  results?: ListContextStoreAPIKeysResponseBodyResults[];
  /**
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

