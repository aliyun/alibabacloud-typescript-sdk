// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersResponseBodyIdentityProviders extends $dara.Model {
  allowedAudience?: string[];
  createTime?: string;
  description?: string;
  discoveryURL?: string;
  identityProviderArn?: string;
  identityProviderName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      allowedAudience: 'AllowedAudience',
      createTime: 'CreateTime',
      description: 'Description',
      discoveryURL: 'DiscoveryURL',
      identityProviderArn: 'IdentityProviderArn',
      identityProviderName: 'IdentityProviderName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedAudience: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      discoveryURL: 'string',
      identityProviderArn: 'string',
      identityProviderName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedAudience)) {
      $dara.Model.validateArray(this.allowedAudience);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersResponseBody extends $dara.Model {
  identityProviders?: ListIdentityProvidersResponseBodyIdentityProviders[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      identityProviders: 'IdentityProviders',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviders: { 'type': 'array', 'itemType': ListIdentityProvidersResponseBodyIdentityProviders },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identityProviders)) {
      $dara.Model.validateArray(this.identityProviders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

