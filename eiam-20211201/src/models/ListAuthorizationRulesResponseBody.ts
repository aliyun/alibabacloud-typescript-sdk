// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizationRulesResponseBodyAuthorizationRules extends $dara.Model {
  /**
   * @remarks
   * The scope of authorized resources. Valid values:
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
   * - user_custom: Created by a user.
   * 
   * @example
   * user_custom
   */
  authorizationRuleCreationType?: string;
  /**
   * @remarks
   * The ID of the authorization rule.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * The name of the authorization rule.
   * 
   * @example
   * test-name
   */
  authorizationRuleName?: string;
  /**
   * @remarks
   * The scenario label of the authorization rule. Valid values:
   * - privileged_cloud_account: Privileged cloud account scenario.
   * - asset: Asset scenario.
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
   * The subject type applicable to the authorization rule. For an exclusive rule, this field indicates the type of the specified subject. For a shared rule with a specified subject type, this field indicates the subject types that the rule can be associated with. Valid values:
   * - application: Application.
   * - user: Account. For a shared privileged cloud account rule, this value indicates the human user type and can be associated with accounts, user groups, and organizational units.
   * > If the subject type is not specified for the rule, this field may be empty. The actual subjects associated with a shared rule are subject to the query results of subject associations.
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
   * The status of the authorization rule. Valid values:
   * - enabled: The rule is enabled.
   * - disabled: The rule is disabled.
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

export class ListAuthorizationRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of authorization rules.
   */
  authorizationRules?: ListAuthorizationRulesResponseBodyAuthorizationRules[];
  /**
   * @remarks
   * The maximum number of entries per page for paging in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token returned in the current response for querying the next page.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

