// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationRuleResponseBodyAuthorizationRule extends $dara.Model {
  /**
   * @remarks
   * The authorization resource scope. Valid values:
   * - custom: Resources within the specified project scope.
   * 
   * @example
   * custom
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
   * The scenario label of the authorization rule. Valid values:
   * - privileged_cloud_account (Privileged cloud account scenario)
   * - asset (Asset scenario)
   * 
   * @example
   * privileged_cloud_account
   */
  authorizationRuleScenarioLabel?: string;
  /**
   * @remarks
   * The ID of the subject associated with the authorization rule.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  authorizationRuleSubjectId?: string;
  /**
   * @remarks
   * The subject scope of the authorization rule. Valid values:
   * - shared: Shared. A single rule can be used by multiple subjects that meet the rule constraints.
   * - exclusive: Exclusive. A single rule can only be used by the specified subject.
   * 
   * @example
   * shared
   */
  authorizationRuleSubjectScope?: string;
  /**
   * @remarks
   * The subject category to which the authorization rule applies. For an exclusive rule, this field indicates the type of the specified subject. For a shared rule with a configured subject category, this field indicates the subject category that the rule allows to be associated with. Valid values:
   * - application: Application.
   * - user: Account. For a shared privileged cloud account rule, this value indicates the human user category, which can be associated with accounts, user groups, and organizations.
   * If no subject category is configured for the rule, this field may be empty. The actual subjects associated with a shared rule are determined by the subject association query results.
   * 
   * @example
   * user
   */
  authorizationRuleSubjectType?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * The ID of the project associated with the authorization rule.
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
   * The last update time. The value is a UNIX timestamp in milliseconds.
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

