// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationRuleResponseBodyAuthorizationRule extends $dara.Model {
  /**
   * @remarks
   * The authorization resource scope. Valid values:
   * - global: All resources under the project.
   * - custom: Specified resources within the project scope.
   * 
   * @example
   * global
   */
  authorizationResourceScope?: string;
  /**
   * @remarks
   * The creation type of the authorization rule. Valid values:
   * - system_init: Created by the system.
   * - user_custom: Created by the user.
   * 
   * @example
   * user_custom
   */
  authorizationRuleCreationType?: string;
  /**
   * @remarks
   * The authorization rule ID.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * The authorization rule name.
   * 
   * @example
   * test-name
   */
  authorizationRuleName?: string;
  /**
   * @remarks
   * The scenario label of the authorization rule.
   */
  authorizationRuleScenarioLabel?: string;
  /**
   * @remarks
   * The subject ID associated with the authorization rule.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  authorizationRuleSubjectId?: string;
  /**
   * @remarks
   * The subject scope of the authorization rule. Valid values:
   * - shared: Shared type, which supports all subjects, including accounts and applications.
   * - exclusive: Exclusive type.
   * 
   * @example
   * shared
   */
  authorizationRuleSubjectScope?: string;
  /**
   * @remarks
   * The subject type associated with the authorization rule. This parameter is valid only when the authorization rule subject scope is exclusive. Valid values:
   * - application: Application.
   * - user: Account.
   * 
   * @example
   * user
   */
  authorizationRuleSubjectType?: string;
  /**
   * @remarks
   * The creation time, in UNIX timestamp format, measured in milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the authorization rule.
   * 
   * @example
   * this is a test
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID associated with the authorization rule.
   * 
   * @example
   * iprj_system_default
   */
  projectId?: string;
  /**
   * @remarks
   * The authorization rule status. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The last update time, in UNIX timestamp format, measured in milliseconds.
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
      authorizationRuleScenarioLabel: 'AuthorizationRuleScenarioLabel',
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
      authorizationRuleScenarioLabel: 'string',
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
   * The authorization rule object.
   */
  authorizationRule?: GetAuthorizationRuleResponseBodyAuthorizationRule;
  /**
   * @remarks
   * The request ID.
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

