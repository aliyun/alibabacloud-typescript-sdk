// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthorizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of authorized resources. Valid values:
   * - global: global resources under the project
   * - custom: resources under a specified project scope
   * 
   * @example
   * global
   */
  authorizationResourceScope?: string;
  /**
   * @remarks
   * The name of the authorization rule. The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_rule
   */
  authorizationRuleName?: string;
  /**
   * @remarks
   * The scenario label of the authorization rule. The label can be up to 64 characters in length.
   * 
   * @example
   * privileged_cloud_account
   */
  authorizationRuleScenarioLabel?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value from your client and make sure that the value is unique across different requests. The ClientToken parameter only supports ASCII characters and cannot exceed 64 characters in length. For more information, see References: [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the authorization rule. The description can be up to 128 characters in length.
   * 
   * @example
   * this is a test rule
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the project associated with the authorization rule. If you are unsure about the project to associate, you can use the default project. The ID of the default project is iprj_system_default.
   * 
   * This parameter is required.
   * 
   * @example
   * iprj_system_default
   */
  projectId?: string;
  /**
   * @remarks
   * The type of subject to which the authorization rule applies, such as user (for human users) or application (for machine users). When explicitly specified, only privileged cloud account rules with a custom resource scope are supported. If this field is omitted for custom scope rules in this scenario, the default value is user.
   * 
   * @example
   * application
   */
  subjectType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceScope: 'AuthorizationResourceScope',
      authorizationRuleName: 'AuthorizationRuleName',
      authorizationRuleScenarioLabel: 'AuthorizationRuleScenarioLabel',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      subjectType: 'SubjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceScope: 'string',
      authorizationRuleName: 'string',
      authorizationRuleScenarioLabel: 'string',
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      projectId: 'string',
      subjectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

