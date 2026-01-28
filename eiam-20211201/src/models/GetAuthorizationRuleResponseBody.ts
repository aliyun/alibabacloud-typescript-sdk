// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationRuleResponseBodyAuthorizationRule extends $dara.Model {
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

export class GetAuthorizationRuleResponseBody extends $dara.Model {
  authorizationRule?: GetAuthorizationRuleResponseBodyAuthorizationRule;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRule: 'AuthorizationRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRule: GetAuthorizationRuleResponseBodyAuthorizationRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.authorizationRule && typeof (this.authorizationRule as any).validate === 'function') {
      (this.authorizationRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

