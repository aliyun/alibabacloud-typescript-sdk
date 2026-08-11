// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthorizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization resource scope. Valid values:
   * 
   * - global: all resources under the project.
   * - custom: specified resources under the project.
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
   * Ensures the idempotence of the request. Generate a parameter value from your client to ensure that the value is unique across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see References [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
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
   * The ID of the project associated with the authorization rule. If you are unsure which project to associate, you can associate the default project. The default project ID is iprj_system_default.
   * 
   * This parameter is required.
   * 
   * @example
   * iprj_system_default
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceScope: 'AuthorizationResourceScope',
      authorizationRuleName: 'AuthorizationRuleName',
      authorizationRuleScenarioLabel: 'AuthorizationRuleScenarioLabel',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

