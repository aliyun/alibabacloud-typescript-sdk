// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAuthnSourceMappingsResponseBodyUserAuthnSourceMappings extends $dara.Model {
  /**
   * @remarks
   * 来源Idp类型
   * 
   * @example
   * urn:alibaba:idaas:authntype:oidc
   */
  authnSourceType?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1762309642177
   */
  createTime?: number;
  externalData?: string;
  /**
   * @remarks
   * 来源Idp Id
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * 实例Id
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 最近一次更新时间
   * 
   * @example
   * 1762309642177
   */
  updateTime?: number;
  /**
   * @remarks
   * 外部ID
   * 
   * @example
   * xxxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * 用户ID
   * 
   * @example
   * user_ue2jvisn35exxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authnSourceType: 'AuthnSourceType',
      createTime: 'CreateTime',
      externalData: 'ExternalData',
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnSourceType: 'string',
      createTime: 'number',
      externalData: 'string',
      identityProviderId: 'string',
      instanceId: 'string',
      updateTime: 'number',
      userExternalId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAuthnSourceMappingsResponseBody extends $dara.Model {
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
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于上一次翻页查询。
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
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
  userAuthnSourceMappings?: ListUserAuthnSourceMappingsResponseBodyUserAuthnSourceMappings[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userAuthnSourceMappings: 'UserAuthnSourceMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      userAuthnSourceMappings: { 'type': 'array', 'itemType': ListUserAuthnSourceMappingsResponseBodyUserAuthnSourceMappings },
    };
  }

  validate() {
    if(Array.isArray(this.userAuthnSourceMappings)) {
      $dara.Model.validateArray(this.userAuthnSourceMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

