// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationResourceResponseBodyAuthorizationResource extends $dara.Model {
  /**
   * @remarks
   * 资源实体标识
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  authorizationResourceEntityId?: string;
  /**
   * @remarks
   * 资源实体类型，枚举类型：asset（资产）、credential（凭据）、cloud_identity_role（云账号角色）
   * 
   * @example
   * cloud_account_role
   */
  authorizationResourceEntityType?: string;
  /**
   * @remarks
   * 授权资源标识
   * 
   * @example
   * arres_01kgh3jvt7pk093rv6giu0c0qxxxx
   */
  authorizationResourceId?: string;
  /**
   * @remarks
   * 授权规则标识
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * 云账号ID。
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceEntityId: 'AuthorizationResourceEntityId',
      authorizationResourceEntityType: 'AuthorizationResourceEntityType',
      authorizationResourceId: 'AuthorizationResourceId',
      authorizationRuleId: 'AuthorizationRuleId',
      cloudAccountId: 'CloudAccountId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceEntityId: 'string',
      authorizationResourceEntityType: 'string',
      authorizationResourceId: 'string',
      authorizationRuleId: 'string',
      cloudAccountId: 'string',
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

export class GetAuthorizationResourceResponseBody extends $dara.Model {
  authorizationResource?: GetAuthorizationResourceResponseBodyAuthorizationResource;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationResource: 'AuthorizationResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResource: GetAuthorizationResourceResponseBodyAuthorizationResource,
      requestId: 'string',
    };
  }

  validate() {
    if(this.authorizationResource && typeof (this.authorizationResource as any).validate === 'function') {
      (this.authorizationResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

