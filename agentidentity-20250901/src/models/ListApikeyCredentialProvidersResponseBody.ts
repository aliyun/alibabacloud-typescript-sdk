// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAPIKeyCredentialProvidersResponseBodyAPIKeyCredentialProviders extends $dara.Model {
  /**
   * @example
   * api-key-dash-scope
   */
  APIKeyCredentialProviderName?: string;
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:tokenvault/default/apikeycredentialprovider/api-key-dash-scope
   */
  credentialProviderArn?: string;
  /**
   * @example
   * example provider
   */
  description?: string;
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProviderName: 'APIKeyCredentialProviderName',
      createTime: 'CreateTime',
      credentialProviderArn: 'CredentialProviderArn',
      description: 'Description',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProviderName: 'string',
      createTime: 'string',
      credentialProviderArn: 'string',
      description: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAPIKeyCredentialProvidersResponseBody extends $dara.Model {
  APIKeyCredentialProviders?: ListAPIKeyCredentialProvidersResponseBodyAPIKeyCredentialProviders[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAWbTEdBU0yvszsl8EEXALb8=
   */
  nextToken?: string;
  /**
   * @example
   * 4D51596A-8A87-565B-8EDE-45141A02F11C
   */
  requestId?: string;
  /**
   * @example
   * 452
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProviders: 'APIKeyCredentialProviders',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProviders: { 'type': 'array', 'itemType': ListAPIKeyCredentialProvidersResponseBodyAPIKeyCredentialProviders },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.APIKeyCredentialProviders)) {
      $dara.Model.validateArray(this.APIKeyCredentialProviders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

