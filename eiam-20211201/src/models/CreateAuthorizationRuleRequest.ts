// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthorizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of authorized resources. Valid values:
   * 
   * - global: all resources within the project.
   * 
   * - custom: specified resources within the project.
   * 
   * @example
   * global
   */
  authorizationResourceScope?: string;
  /**
   * @remarks
   * The name of the authorization rule. The name can be up to 64 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * test_rule
   */
  authorizationRuleName?: string;
  /**
   * @remarks
   * A unique identifier that you provide to ensure the idempotence of the request. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the authorization rule. The description can be up to 128 characters long.
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
   * The ID of the project to associate with the authorization rule. If you are unsure which project to use, you can associate the rule with the default project, iprj_system_default.
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

