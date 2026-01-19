// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceServersForUserResponseBodyResourceServersResourceServerScopes extends $dara.Model {
  /**
   * @remarks
   * 直接分配给当前用户的权限，视为直接授权。
   * 
   * @example
   * true
   */
  hasDirectAuthorization?: boolean;
  /**
   * @remarks
   * 通过用户隶属的组织、组获取的权限，视为继承权限。
   * 
   * @example
   * false
   */
  hasInheritAuthorization?: boolean;
  /**
   * @remarks
   * ResourceServerScope唯一标识
   * 
   * @example
   * ress_nbte4bb3qqqnaq73rlmkqixxxx
   */
  resourceServerScopeId?: string;
  /**
   * @remarks
   * ResourceServerScope名称
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
   * 资源服务应用的唯一标识
   * 
   * @example
   * app_nbsomva32b6utec3hgi7scxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 实例唯一标识
   * 
   * @example
   * idaas_qsw77zl5vrllwzyrrfwbmpxxxx
   */
  instanceId?: string;
  /**
   * @example
   * urn:idaas:test
   */
  resourceServerIdentifier?: string;
  /**
   * @remarks
   * 资源服务Scope权限集合
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  resourceServers?: ListResourceServersForUserResponseBodyResourceServers[];
  /**
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

