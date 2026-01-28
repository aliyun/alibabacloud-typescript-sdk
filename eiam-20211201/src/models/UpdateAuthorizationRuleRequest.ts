// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthorizationRuleRequest extends $dara.Model {
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
   * 授权规则标识。
   * 
   * This parameter is required.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * 授权规则名称，长度限制最大64个字符。
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
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceScope: 'AuthorizationResourceScope',
      authorizationRuleId: 'AuthorizationRuleId',
      authorizationRuleName: 'AuthorizationRuleName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceScope: 'string',
      authorizationRuleId: 'string',
      authorizationRuleName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

