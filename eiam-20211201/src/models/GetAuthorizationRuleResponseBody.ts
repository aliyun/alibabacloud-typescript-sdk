// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationRuleResponseBodyAuthorizationRule extends $dara.Model {
  /**
   * @remarks
   * Authorization resource scope. Valid values:
   * 
   * - global: Global resources under the project
   * 
   * - custom: Resources within the specified project scope
   * 
   * @example
   * global
   */
  authorizationResourceScope?: string;
  /**
   * @remarks
   * Authorization rule creation type. Valid values:
   * 
   * - system_init: System created
   * 
   * - user_custom: User created
   * 
   * @example
   * user_custom
   */
  authorizationRuleCreationType?: string;
  /**
   * @remarks
   * Authorization rule ID.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * Authorization rule name.
   * 
   * @example
   * test-name
   */
  authorizationRuleName?: string;
  /**
   * @remarks
   * Subject ID associated with the authorization rule.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  authorizationRuleSubjectId?: string;
  /**
   * @remarks
   * Authorization rule subject scope. Valid values:
   * 
   * - shared: Shared type, supports all subjects, including accounts and applications
   * 
   * - exclusive: Exclusive type
   * 
   * @example
   * shared
   */
  authorizationRuleSubjectScope?: string;
  /**
   * @remarks
   * Subject type associated with the authorization rule. Valid when the authorization rule subject scope is exclusive. Valid values:
   * 
   * - application: Application
   * 
   * - user: Account
   * 
   * @example
   * user
   */
  authorizationRuleSubjectType?: string;
  /**
   * @remarks
   * Creation time, in UNIX timestamp format, in milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * Authorization rule description.
   * 
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Project ID associated with the authorization rule.
   * 
   * @example
   * iprj_system_default
   */
  projectId?: string;
  /**
   * @remarks
   * Authorization rule status. Valid values:
   * 
   * - enabled: Enabled
   * 
   * - disabled: Disabled
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * Last update time, in UNIX timestamp format, in milliseconds.
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
      authorizationRuleSubjectId: 'AuthorizationRuleSubjectId',
      authorizationRuleSubjectScope: 'AuthorizationRuleSubjectScope',
      authorizationRuleSubjectType: 'AuthorizationRuleSubjectType',
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
      authorizationRuleSubjectId: 'string',
      authorizationRuleSubjectScope: 'string',
      authorizationRuleSubjectType: 'string',
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
  /**
   * @remarks
   * Authorization rule object.
   */
  authorizationRule?: GetAuthorizationRuleResponseBodyAuthorizationRule;
  /**
   * @remarks
   * Request ID.
   * 
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

