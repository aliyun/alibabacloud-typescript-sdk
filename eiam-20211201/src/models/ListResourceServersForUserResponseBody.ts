// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceServersForUserResponseBodyResourceServersResourceServerScopes extends $dara.Model {
  /**
   * @remarks
   * Indicates whether direct authorization exists. Valid values:
   * - true: Direct authorization exists.
   * - false: Direct authorization does not exist.
   * 
   * @example
   * true
   */
  hasDirectAuthorization?: boolean;
  /**
   * @remarks
   * Indicates whether inherited authorization exists.
   * 
   * @example
   * false
   */
  hasInheritAuthorization?: boolean;
  /**
   * @remarks
   * The Scope permission ID.
   * 
   * @example
   * ress_nbte4bb3qqqnaq73rlmkqixxxx
   */
  resourceServerScopeId?: string;
  /**
   * @remarks
   * The Scope permission name.
   * 
   * @example
   * Read All User
   */
  resourceServerScopeName?: string;
  static names(): { [key: string]: string } {
    return {
      hasDirectAuthorization: 'HasDirectAuthorization',
      hasInheritAuthorization: 'HasInheritAuthorization',
      resourceServerScopeId: 'ResourceServerScopeId',
      resourceServerScopeName: 'ResourceServerScopeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasDirectAuthorization: 'boolean',
      hasInheritAuthorization: 'boolean',
      resourceServerScopeId: 'string',
      resourceServerScopeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceServersForUserResponseBodyResourceServers extends $dara.Model {
  /**
   * @remarks
   * The ResourceServer application ID.
   * 
   * @example
   * app_nbsomva32b6utec3hgi7scxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_qsw77zl5vrllwzyrrfwbmpxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The unique identifier of the ResourceServer.
   * 
   * @example
   * urn:idaas:test
   */
  resourceServerIdentifier?: string;
  /**
   * @remarks
   * The list of authorized Scope permissions.
   */
  resourceServerScopes?: ListResourceServersForUserResponseBodyResourceServersResourceServerScopes[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      resourceServerIdentifier: 'ResourceServerIdentifier',
      resourceServerScopes: 'ResourceServerScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      resourceServerIdentifier: 'string',
      resourceServerScopes: { 'type': 'array', 'itemType': ListResourceServersForUserResponseBodyResourceServersResourceServerScopes },
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

export class ListResourceServersForUserResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The list of ResourceServer applications.
   */
  resourceServers?: ListResourceServersForUserResponseBodyResourceServers[];
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
      requestId: 'RequestId',
      resourceServers: 'ResourceServers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceServers: { 'type': 'array', 'itemType': ListResourceServersForUserResponseBodyResourceServers },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceServers)) {
      $dara.Model.validateArray(this.resourceServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

