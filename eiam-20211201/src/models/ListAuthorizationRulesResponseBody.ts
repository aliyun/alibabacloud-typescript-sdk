// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizationRulesResponseBodyAuthorizationRules extends $dara.Model {
  /**
   * @remarks
   * The scope of resources to authorize. Valid values:
   * 
   * - global: global resources in the project
   * 
   * - custom: resources in a specific project
   * 
   * @example
   * global
   */
  authorizationResourceScope?: string;
  /**
   * @remarks
   * The type of authorization rule creation. Valid values:
   * 
   * - system_init: created by the system
   * 
   * - user_custom: created by a user
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
   * The ID of the subject associated with the authorization rule.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  authorizationRuleSubjectId?: string;
  /**
   * @remarks
   * The scope of subjects for the authorization rule. Valid values:
   * 
   * - shared: applies to all subjects, such as accounts and applications
   * 
   * - exclusive: applies only to a specific subject
   * 
   * @example
   * shared
   */
  authorizationRuleSubjectScope?: string;
  /**
   * @remarks
   * The type of subject associated with the authorization rule. This parameter takes effect only when AuthorizationRuleSubjectScope is exclusive. Valid values:
   * 
   * - application
   * 
   * - user
   * 
   * @example
   * user
   */
  authorizationRuleSubjectType?: string;
  /**
   * @remarks
   * The time when the authorization rule was created, in Unix timestamp format. Unit: milliseconds.
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
   * The ID of the instance.
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
   * 
   * - enabled
   * 
   * - disabled
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the authorization rule was last updated, in Unix timestamp format. Unit: milliseconds.
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

export class ListAuthorizationRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of authorization rules.
   */
  authorizationRules?: ListAuthorizationRulesResponseBodyAuthorizationRules[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token returned by this call. Use it in the next call to retrieve the next page of results.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
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

