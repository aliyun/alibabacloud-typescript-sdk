// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAuthorizationResourceRequest extends $dara.Model {
  /**
   * @remarks
   * 授权资源标识。
   * 
   * This parameter is required.
   * 
   * @example
   * arres_01kgh3jvt7pk093rv6giu0c0qxxxx
   */
  authorizationResourceId?: string;
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
      authorizationResourceId: 'AuthorizationResourceId',
      authorizationRuleId: 'AuthorizationRuleId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceId: 'string',
      authorizationRuleId: 'string',
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

