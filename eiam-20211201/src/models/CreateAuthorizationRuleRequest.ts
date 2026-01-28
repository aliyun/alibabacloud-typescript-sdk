// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthorizationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * 授权资源范围，枚举值：global（Project下的所有资源）、custom（自定义资源范围）。
   * 
   * @example
   * global
   */
  authorizationResourceScope?: string;
  /**
   * @remarks
   * 授权规则名称，长度限制最大64个字符。
   * 
   * This parameter is required.
   * 
   * @example
   * test_rule
   */
  authorizationRuleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * 授权规则备注描述，长度限制最大128个字符。
   * 
   * @example
   * this is a test rule
   */
  description?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 授权规则关联的项目标识。
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

