// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceServerScopesResponseBodyResourceServerScopes extends $dara.Model {
  /**
   * @remarks
   * Application ID.
   * 
   * @example
   * app_xxxxxxxxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * Authorization type.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * idaas_xxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Scope permission ID.
   * 
   * @example
   * rss_xxxxxxxxxxx
   */
  resourceServerScopeId?: string;
  /**
   * @remarks
   * Scope permission name.
   * 
   * @example
   * 读取全部用户
   */
  resourceServerScopeName?: string;
  /**
   * @remarks
   * Scope permission type.
   * 
   * @example
   * urn:alibaba:idaas:resourceserver:scope:delegated
   */
  resourceServerScopeType?: string;
  /**
   * @remarks
   * Scope permission value.
   * 
   * @example
   * User:Write:ALL
   */
  resourceServerScopeValue?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      authorizationType: 'AuthorizationType',
      instanceId: 'InstanceId',
      resourceServerScopeId: 'ResourceServerScopeId',
      resourceServerScopeName: 'ResourceServerScopeName',
      resourceServerScopeType: 'ResourceServerScopeType',
      resourceServerScopeValue: 'ResourceServerScopeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      authorizationType: 'string',
      instanceId: 'string',
      resourceServerScopeId: 'string',
      resourceServerScopeName: 'string',
      resourceServerScopeType: 'string',
      resourceServerScopeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceServerScopesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of rows per page in paginated queries.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next page query.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * Token for the previous page query.
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * List of Scope permissions under the ResourceServer.
   */
  resourceServerScopes?: ListResourceServerScopesResponseBodyResourceServerScopes[];
  /**
   * @remarks
   * Total number of items in the list.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      resourceServerScopes: 'ResourceServerScopes',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      resourceServerScopes: { 'type': 'array', 'itemType': ListResourceServerScopesResponseBodyResourceServerScopes },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceServerScopes)) {
      $dara.Model.validateArray(this.resourceServerScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

