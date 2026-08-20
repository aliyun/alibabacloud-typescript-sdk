// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthorizationResourceRequestConditionCredentialCondition extends $dara.Model {
  /**
   * @remarks
   * Specifies whether same-name identity accounts are supported.
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

export class CreateAuthorizationResourceRequestCondition extends $dara.Model {
  /**
   * @remarks
   * The effective condition when used as a credential.
   */
  credentialCondition?: CreateAuthorizationResourceRequestConditionCredentialCondition;
  static names(): { [key: string]: string } {
    return {
      credentialCondition: 'CredentialCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialCondition: CreateAuthorizationResourceRequestConditionCredentialCondition,
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

export class CreateAuthorizationResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource entity associated with the authorization resource.
   * 
   * This parameter is required.
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  authorizationResourceEntityId?: string;
  /**
   * @remarks
   * The type of the resource entity associated with the authorization resource. Valid values:
   * 
   * - cloud_account_role: cloud role
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_account_role
   */
  authorizationResourceEntityType?: string;
  /**
   * @remarks
   * The authorization rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate a parameter value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see References [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The effective condition.
   */
  condition?: CreateAuthorizationResourceRequestCondition;
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
  static names(): { [key: string]: string } {
    return {
      authorizationResourceEntityId: 'AuthorizationResourceEntityId',
      authorizationResourceEntityType: 'AuthorizationResourceEntityType',
      authorizationRuleId: 'AuthorizationRuleId',
      clientToken: 'ClientToken',
      condition: 'Condition',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceEntityId: 'string',
      authorizationResourceEntityType: 'string',
      authorizationRuleId: 'string',
      clientToken: 'string',
      condition: CreateAuthorizationResourceRequestCondition,
      instanceId: 'string',
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

