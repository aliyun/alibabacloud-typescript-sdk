// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthorizationResourceRequest extends $dara.Model {
  /**
   * @remarks
   * 授权资源关联的资源标识。
   * 
   * This parameter is required.
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  authorizationResourceEntityId?: string;
  /**
   * @remarks
   * 授权资源的资源类型。枚举取值:asset(资产)、credential(凭据)、cloudAccountRole(云账号角色)。
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_account_role
   */
  authorizationResourceEntityType?: string;
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
      authorizationResourceEntityId: 'AuthorizationResourceEntityId',
      authorizationResourceEntityType: 'AuthorizationResourceEntityType',
      authorizationRuleId: 'AuthorizationRuleId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceEntityId: 'string',
      authorizationResourceEntityType: 'string',
      authorizationRuleId: 'string',
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

