// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersForResourceServerResponseBodyUsersResourceServerScopes extends $dara.Model {
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
      resourceServerScopeId: 'ResourceServerScopeId',
      resourceServerScopeName: 'ResourceServerScopeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListUsersForResourceServerResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * 实例唯一标识
   * 
   * @example
   * idaas_qsw77zl5vrllwzyrrfwbmpxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 资源服务Scope权限集合
   */
  resourceServerScopes?: ListUsersForResourceServerResponseBodyUsersResourceServerScopes[];
  /**
   * @remarks
   * 用户的唯一标识
   * 
   * @example
   * user_nbsomva32b6utec3hgi7scxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceServerScopes: 'ResourceServerScopes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceServerScopes: { 'type': 'array', 'itemType': ListUsersForResourceServerResponseBodyUsersResourceServerScopes },
      userId: 'string',
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

export class ListUsersForResourceServerResponseBody extends $dara.Model {
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
  /**
   * @example
   * 100
   */
  totalCount?: number;
  users?: ListUsersForResourceServerResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersForResourceServerResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

