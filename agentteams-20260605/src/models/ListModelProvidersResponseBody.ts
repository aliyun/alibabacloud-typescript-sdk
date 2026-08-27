// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProvidersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The model provider address.
   * 
   * @example
   * https://api.example.com
   */
  address?: string;
  /**
   * @remarks
   * The list of API keys.
   * 
   * @example
   * ["sk-xxx"]
   */
  apiKeys?: string[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-06-11T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deployment status.
   * 
   * @example
   * DEPLOYED
   */
  deployStatus?: string;
  /**
   * @remarks
   * The model provider description.
   * 
   * @example
   * my provider
   */
  description?: string;
  /**
   * @remarks
   * The model provider ID.
   * 
   * @example
   * p-xxx
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The model provider name.
   * 
   * @example
   * my-provider
   */
  name?: string;
  /**
   * @remarks
   * The list of protocols supported by the model provider.
   * 
   * @example
   * ["openai"]
   */
  protocols?: string[];
  /**
   * @remarks
   * The provider identifier.
   * 
   * @example
   * openai
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      apiKeys: 'ApiKeys',
      createTime: 'CreateTime',
      deployStatus: 'DeployStatus',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      protocols: 'Protocols',
      provider: 'Provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      deployStatus: 'string',
      description: 'string',
      id: 'string',
      instanceId: 'string',
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelProvidersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The list of model providers.
   * 
   * @example
   * [...]
   */
  items?: ListModelProvidersResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * nt-xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListModelProvidersResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

