// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizationResourcesResponseBodyAuthorizationResources extends $dara.Model {
  /**
   * @remarks
   * 资源实体标识
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  authorizationResourceEntityId?: string;
  /**
   * @remarks
   * 资源实体类型，枚举类型：asset（资产）、credential（凭据）、cloud_identity_role（云账号角色）
   * 
   * @example
   * cloud_account_role
   */
  authorizationResourceEntityType?: string;
  /**
   * @remarks
   * 授权资源标识
   * 
   * @example
   * arres_01kgh3jvt7pk093rv6giu0c0qxxxx
   */
  authorizationResourceId?: string;
  /**
   * @remarks
   * 授权规则标识
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * 云账号ID。
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceEntityId: 'AuthorizationResourceEntityId',
      authorizationResourceEntityType: 'AuthorizationResourceEntityType',
      authorizationResourceId: 'AuthorizationResourceId',
      authorizationRuleId: 'AuthorizationRuleId',
      cloudAccountId: 'CloudAccountId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceEntityId: 'string',
      authorizationResourceEntityType: 'string',
      authorizationResourceId: 'string',
      authorizationRuleId: 'string',
      cloudAccountId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationResourcesResponseBody extends $dara.Model {
  authorizationResources?: ListAuthorizationResourcesResponseBodyAuthorizationResources[];
  /**
   * @remarks
   * 分页查询时每页行数。
   * 
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
      authorizationResources: 'AuthorizationResources',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResources: { 'type': 'array', 'itemType': ListAuthorizationResourcesResponseBodyAuthorizationResources },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationResources)) {
      $dara.Model.validateArray(this.authorizationResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

