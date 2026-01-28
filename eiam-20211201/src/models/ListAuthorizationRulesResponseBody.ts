// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizationRulesResponseBodyAuthorizationRules extends $dara.Model {
  /**
   * @remarks
   * 授权资源范围，枚举值：global（项目下所有资源）、custom（指定资源）。
   * 
   * @example
   * global
   */
  authorizationResourceScope?: string;
  /**
   * @remarks
   * 授权规则的创建类型，枚举类型：user_created（用户创建)，approval_created（审批创建)。
   * 
   * @example
   * user_custom
   */
  authorizationRuleCreationType?: string;
  /**
   * @remarks
   * 授权规则标识。
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * 授权规则名称。
   * 
   * @example
   * test-name
   */
  authorizationRuleName?: string;
  /**
   * @remarks
   * 创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * 授权规则描述，长度限制为128字符。
   * 
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 授权规则关联的项目标识。
   * 
   * @example
   * iprj_system_default
   */
  projectId?: string;
  /**
   * @remarks
   * 授权规则状态，枚举值：enabled（启用）、disabled（禁用）。
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 最近一次更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceScope: 'AuthorizationResourceScope',
      authorizationRuleCreationType: 'AuthorizationRuleCreationType',
      authorizationRuleId: 'AuthorizationRuleId',
      authorizationRuleName: 'AuthorizationRuleName',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceScope: 'string',
      authorizationRuleCreationType: 'string',
      authorizationRuleId: 'string',
      authorizationRuleName: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      projectId: 'string',
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

export class ListAuthorizationRulesResponseBody extends $dara.Model {
  authorizationRules?: ListAuthorizationRulesResponseBodyAuthorizationRules[];
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
      authorizationRules: 'AuthorizationRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRules: { 'type': 'array', 'itemType': ListAuthorizationRulesResponseBodyAuthorizationRules },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationRules)) {
      $dara.Model.validateArray(this.authorizationRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

