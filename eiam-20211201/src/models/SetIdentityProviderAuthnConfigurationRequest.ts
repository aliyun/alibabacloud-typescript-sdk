// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdentityProviderAuthnConfigurationRequestAutoCreateUserConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic account creation is enabled.
   * 
   * @example
   * disabled
   */
  autoCreateUserStatus?: string;
  /**
   * @remarks
   * The organizational unit IDs.
   */
  targetOrganizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoCreateUserStatus: 'AutoCreateUserStatus',
      targetOrganizationalUnitIds: 'TargetOrganizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateUserStatus: 'string',
      targetOrganizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetOrganizationalUnitIds)) {
      $dara.Model.validateArray(this.targetOrganizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderAuthnConfigurationRequestAutoUpdateUserConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic account update is enabled.
   * 
   * @example
   * disabled
   */
  autoUpdateUserStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpdateUserStatus: 'AutoUpdateUserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpdateUserStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderAuthnConfigurationRequestBindingConfigAutoMatchUserProfileExpressions extends $dara.Model {
  /**
   * @remarks
   * The type of the expression.
   * 
   * This parameter is required.
   * 
   * @example
   * field
   */
  expressionMappingType?: string;
  /**
   * @remarks
   * The value expression of the mapping attribute.
   * 
   * This parameter is required.
   * 
   * @example
   * idpUser.userId
   */
  sourceValueExpression?: string;
  /**
   * @remarks
   * The name of the mapping target attribute.
   * 
   * This parameter is required.
   * 
   * @example
   * user.username
   */
  targetField?: string;
  /**
   * @remarks
   * The description of the mapping target attribute.
   * 
   * @example
   * username
   */
  targetFieldDescription?: string;
  static names(): { [key: string]: string } {
    return {
      expressionMappingType: 'ExpressionMappingType',
      sourceValueExpression: 'SourceValueExpression',
      targetField: 'TargetField',
      targetFieldDescription: 'TargetFieldDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionMappingType: 'string',
      sourceValueExpression: 'string',
      targetField: 'string',
      targetFieldDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderAuthnConfigurationRequestBindingConfig extends $dara.Model {
  /**
   * @remarks
   * Rules for automatic account matching.
   */
  autoMatchUserProfileExpressions?: SetIdentityProviderAuthnConfigurationRequestBindingConfigAutoMatchUserProfileExpressions[];
  /**
   * @remarks
   * Indicates whether automatic account matching is enabled.
   * 
   * @example
   * disabled
   */
  autoMatchUserStatus?: string;
  /**
   * @remarks
   * Indicates whether the manual account binding feature is enabled.
   * 
   * @example
   * enabled
   */
  mappingBindingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoMatchUserProfileExpressions: 'AutoMatchUserProfileExpressions',
      autoMatchUserStatus: 'AutoMatchUserStatus',
      mappingBindingStatus: 'MappingBindingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoMatchUserProfileExpressions: { 'type': 'array', 'itemType': SetIdentityProviderAuthnConfigurationRequestBindingConfigAutoMatchUserProfileExpressions },
      autoMatchUserStatus: 'string',
      mappingBindingStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.autoMatchUserProfileExpressions)) {
      $dara.Model.validateArray(this.autoMatchUserProfileExpressions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderAuthnConfigurationRequestLdapAuthnConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic password update is supported.
   * 
   * @example
   * enabled
   */
  autoUpdatePasswordStatus?: string;
  /**
   * @remarks
   * The user login identifier.
   * 
   * @example
   * email
   */
  userLoginIdentifier?: string;
  /**
   * @remarks
   * The user ObjectClass.
   * 
   * @example
   * posixAccount
   */
  userObjectClass?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpdatePasswordStatus: 'AutoUpdatePasswordStatus',
      userLoginIdentifier: 'UserLoginIdentifier',
      userObjectClass: 'UserObjectClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpdatePasswordStatus: 'string',
      userLoginIdentifier: 'string',
      userObjectClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderAuthnConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * Automatic account creation rule configuration.
   */
  autoCreateUserConfig?: SetIdentityProviderAuthnConfigurationRequestAutoCreateUserConfig;
  /**
   * @remarks
   * Automatic account update configuration.
   */
  autoUpdateUserConfig?: SetIdentityProviderAuthnConfigurationRequestAutoUpdateUserConfig;
  /**
   * @remarks
   * Account binding rule configuration.
   */
  bindingConfig?: SetIdentityProviderAuthnConfigurationRequestBindingConfig;
  /**
   * @remarks
   * Identity provider ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idp_11111
   */
  identityProviderId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * AD/LDAP authentication configuration.
   */
  ldapAuthnConfig?: SetIdentityProviderAuthnConfigurationRequestLdapAuthnConfig;
  static names(): { [key: string]: string } {
    return {
      autoCreateUserConfig: 'AutoCreateUserConfig',
      autoUpdateUserConfig: 'AutoUpdateUserConfig',
      bindingConfig: 'BindingConfig',
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
      ldapAuthnConfig: 'LdapAuthnConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateUserConfig: SetIdentityProviderAuthnConfigurationRequestAutoCreateUserConfig,
      autoUpdateUserConfig: SetIdentityProviderAuthnConfigurationRequestAutoUpdateUserConfig,
      bindingConfig: SetIdentityProviderAuthnConfigurationRequestBindingConfig,
      identityProviderId: 'string',
      instanceId: 'string',
      ldapAuthnConfig: SetIdentityProviderAuthnConfigurationRequestLdapAuthnConfig,
    };
  }

  validate() {
    if(this.autoCreateUserConfig && typeof (this.autoCreateUserConfig as any).validate === 'function') {
      (this.autoCreateUserConfig as any).validate();
    }
    if(this.autoUpdateUserConfig && typeof (this.autoUpdateUserConfig as any).validate === 'function') {
      (this.autoUpdateUserConfig as any).validate();
    }
    if(this.bindingConfig && typeof (this.bindingConfig as any).validate === 'function') {
      (this.bindingConfig as any).validate();
    }
    if(this.ldapAuthnConfig && typeof (this.ldapAuthnConfig as any).validate === 'function') {
      (this.ldapAuthnConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

