// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizationServersResponseBodyAuthorizationServers extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the authorization server.
   * 
   * @example
   * iauths_system
   */
  authorizationServerId?: string;
  /**
   * @remarks
   * The name of the authorization server.
   * 
   * @example
   * my_authorization_server
   */
  authorizationServerName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * user_custom
   */
  creationType?: string;
  /**
   * @remarks
   * The description of the authorization server.
   * 
   * @example
   * description of authorization server
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The currently active issuer address.
   * 
   * @example
   * https://xxxx.aliyunidaas.com/api/v2/iauths_system/oauth2/token
   */
  issuer?: string;
  /**
   * @remarks
   * The domain name used by the issuer.
   * 
   * @example
   * xxxx.aliyunidaas.com
   */
  issuerDomain?: string;
  /**
   * @remarks
   * The issuer mode.
   * 
   * @example
   * static
   */
  issuerMode?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationServerId: 'AuthorizationServerId',
      authorizationServerName: 'AuthorizationServerName',
      createTime: 'CreateTime',
      creationType: 'CreationType',
      description: 'Description',
      instanceId: 'InstanceId',
      issuer: 'Issuer',
      issuerDomain: 'IssuerDomain',
      issuerMode: 'IssuerMode',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationServerId: 'string',
      authorizationServerName: 'string',
      createTime: 'number',
      creationType: 'string',
      description: 'string',
      instanceId: 'string',
      issuer: 'string',
      issuerDomain: 'string',
      issuerMode: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of authorization servers.
   */
  authorizationServers?: ListAuthorizationServersResponseBodyAuthorizationServers[];
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned in this call.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of authorization servers.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationServers: 'AuthorizationServers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationServers: { 'type': 'array', 'itemType': ListAuthorizationServersResponseBodyAuthorizationServers },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationServers)) {
      $dara.Model.validateArray(this.authorizationServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

