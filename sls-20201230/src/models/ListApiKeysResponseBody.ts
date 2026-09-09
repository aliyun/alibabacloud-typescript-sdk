// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysResponseBodyApiKeys extends $dara.Model {
  /**
   * @remarks
   * The list of Logstores that the API key is allowed to write to.
   */
  allowedStores?: string[];
  /**
   * @remarks
   * The plaintext of the API key.
   * 
   * @example
   * <apiKey-plaintext>
   */
  apiKey?: string;
  /**
   * @remarks
   * The name of the API key.
   * 
   * @example
   * demo-apikey-001
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The time when the API key was created.
   * 
   * @example
   * 1788420000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the API key.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The status of the API key.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the API key was last updated.
   * 
   * @example
   * 1788420000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      allowedStores: 'allowedStores',
      apiKey: 'apiKey',
      apiKeyName: 'apiKeyName',
      createTime: 'createTime',
      description: 'description',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedStores: { 'type': 'array', 'itemType': 'string' },
      apiKey: 'string',
      apiKeyName: 'string',
      createTime: 'number',
      description: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowedStores)) {
      $dara.Model.validateArray(this.allowedStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of API keys.
   */
  apiKeys?: ListApiKeysResponseBodyApiKeys[];
  /**
   * @remarks
   * The number of API keys on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The total number of API keys.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'apiKeys',
      count: 'count',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: { 'type': 'array', 'itemType': ListApiKeysResponseBodyApiKeys },
      count: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

