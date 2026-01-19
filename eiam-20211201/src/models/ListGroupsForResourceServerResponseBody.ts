// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForResourceServerResponseBodyGroupsResourceServerScopes extends $dara.Model {
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
   * 获取资源信息
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

export class ListGroupsForResourceServerResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * 用户组的唯一标识
   * 
   * @example
   * group_nbsomva32b6utec3hgi7scxxxx
   */
  groupId?: string;
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
  resourceServerScopes?: ListGroupsForResourceServerResponseBodyGroupsResourceServerScopes[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      resourceServerScopes: 'ResourceServerScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      resourceServerScopes: { 'type': 'array', 'itemType': ListGroupsForResourceServerResponseBodyGroupsResourceServerScopes },
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

export class ListGroupsForResourceServerResponseBody extends $dara.Model {
  groups?: ListGroupsForResourceServerResponseBodyGroups[];
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
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsForResourceServerResponseBodyGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

