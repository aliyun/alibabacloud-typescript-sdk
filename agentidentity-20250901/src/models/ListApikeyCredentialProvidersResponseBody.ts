// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAPIKeyCredentialProvidersResponseBodyAPIKeyCredentialProviders extends $dara.Model {
  APIKeyCredentialProviderName?: string;
  createTime?: string;
  credentialProviderArn?: string;
  description?: string;
  tokenVaultName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      APIKeyCredentialProviderName: 'APIKeyCredentialProviderName',
      createTime: 'CreateTime',
      credentialProviderArn: 'CredentialProviderArn',
      description: 'Description',
      tokenVaultName: 'TokenVaultName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKeyCredentialProviderName: 'string',
      createTime: 'string',
      credentialProviderArn: 'string',
      description: 'string',
      tokenVaultName: 'string',
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
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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

