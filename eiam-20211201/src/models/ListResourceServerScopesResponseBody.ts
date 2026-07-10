// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceServerScopesResponseBodyResourceServerScopes extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_xxxxxxxxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The authorization type.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_xxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The scope permission ID.
   * 
   * @example
   * rss_xxxxxxxxxxx
   */
  resourceServerScopeId?: string;
  /**
   * @remarks
   * The scope permission name.
   * 
   * @example
   * 读取全部用户
   */
  resourceServerScopeName?: string;
  /**
   * @remarks
   * The scope permission type.
   * 
   * @example
   * urn:alibaba:idaas:resourceserver:scope:delegated
   */
  resourceServerScopeType?: string;
  /**
   * @remarks
   * The scope permission value.
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
   * The number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination token for the previous page.
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
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
   * The list of scope permissions under the ResourceServer.
   */
  resourceServerScopes?: ListResourceServerScopesResponseBodyResourceServerScopes[];
  /**
   * @remarks
   * The total number of entries in the list.
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

