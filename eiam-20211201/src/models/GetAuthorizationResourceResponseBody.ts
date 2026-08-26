// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationResourceResponseBodyAuthorizationResourceConditionCredentialCondition extends $dara.Model {
  /**
   * @remarks
   * Specifies whether same-name identity accounts are supported.
   * 
   * @example
   * true
   */
  allowSameNameIdentity?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowSameNameIdentity: 'AllowSameNameIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSameNameIdentity: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationResourceResponseBodyAuthorizationResourceCondition extends $dara.Model {
  /**
   * @remarks
   * The credential condition.
   */
  credentialCondition?: GetAuthorizationResourceResponseBodyAuthorizationResourceConditionCredentialCondition;
  static names(): { [key: string]: string } {
    return {
      credentialCondition: 'CredentialCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialCondition: GetAuthorizationResourceResponseBodyAuthorizationResourceConditionCredentialCondition,
    };
  }

  validate() {
    if(this.credentialCondition && typeof (this.credentialCondition as any).validate === 'function') {
      (this.credentialCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationResourceResponseBodyAuthorizationResource extends $dara.Model {
  /**
   * @remarks
   * The resource entity ID associated with the authorization resource.
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  authorizationResourceEntityId?: string;
  /**
   * @remarks
   * The resource entity type associated with the authorization resource. Valid values:
   * - cloud_account_role: cloud role.
   * 
   * @example
   * cloud_account_role
   */
  authorizationResourceEntityType?: string;
  /**
   * @remarks
   * The authorization resource ID.
   * 
   * @example
   * arres_01kgh3jvt7pk093rv6giu0c0qxxxx
   */
  authorizationResourceId?: string;
  /**
   * @remarks
   * The authorization rule ID.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * The cloud account ID to which the resource entity associated with the authorization resource belongs.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The condition restriction.
   */
  condition?: GetAuthorizationResourceResponseBodyAuthorizationResourceCondition;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1787023451494
   */
  createTime?: number;
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
   * The update time.
   * 
   * @example
   * 1787023451494
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceEntityId: 'AuthorizationResourceEntityId',
      authorizationResourceEntityType: 'AuthorizationResourceEntityType',
      authorizationResourceId: 'AuthorizationResourceId',
      authorizationRuleId: 'AuthorizationRuleId',
      cloudAccountId: 'CloudAccountId',
      condition: 'Condition',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceEntityId: 'string',
      authorizationResourceEntityType: 'string',
      authorizationResourceId: 'string',
      authorizationRuleId: 'string',
      cloudAccountId: 'string',
      condition: GetAuthorizationResourceResponseBodyAuthorizationResourceCondition,
      createTime: 'number',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization resource.
   */
  authorizationResource?: GetAuthorizationResourceResponseBodyAuthorizationResource;
  /**
   * @remarks
   * The request ID.
   * 
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

