// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPoolClientsResponseBodyClientsClientScopes extends $dara.Model {
  description?: string;
  scopeName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      scopeName: 'ScopeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      scopeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPoolClientsResponseBodyClients extends $dara.Model {
  accessTokenValidity?: string;
  clientId?: string;
  clientName?: string;
  clientScopes?: ListUserPoolClientsResponseBodyClientsClientScopes[];
  clientType?: string;
  createTime?: string;
  enforcePKCE?: boolean;
  redirectURIs?: string[];
  refreshTokenValidity?: string;
  secretRequired?: boolean;
  updateTime?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientScopes: 'ClientScopes',
      clientType: 'ClientType',
      createTime: 'CreateTime',
      enforcePKCE: 'EnforcePKCE',
      redirectURIs: 'RedirectURIs',
      refreshTokenValidity: 'RefreshTokenValidity',
      secretRequired: 'SecretRequired',
      updateTime: 'UpdateTime',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValidity: 'string',
      clientId: 'string',
      clientName: 'string',
      clientScopes: { 'type': 'array', 'itemType': ListUserPoolClientsResponseBodyClientsClientScopes },
      clientType: 'string',
      createTime: 'string',
      enforcePKCE: 'boolean',
      redirectURIs: { 'type': 'array', 'itemType': 'string' },
      refreshTokenValidity: 'string',
      secretRequired: 'boolean',
      updateTime: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientScopes)) {
      $dara.Model.validateArray(this.clientScopes);
    }
    if(Array.isArray(this.redirectURIs)) {
      $dara.Model.validateArray(this.redirectURIs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPoolClientsResponseBody extends $dara.Model {
  clients?: ListUserPoolClientsResponseBodyClients[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': ListUserPoolClientsResponseBodyClients },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

