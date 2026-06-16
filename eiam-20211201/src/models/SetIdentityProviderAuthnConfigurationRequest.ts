// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdentityProviderAuthnConfigurationRequestAutoCreateUserConfig extends $dara.Model {
  /**
   * @remarks
   * Automatic account creation status.
   * 
   * @example
   * disabled
   */
  autoCreateUserStatus?: string;
  /**
   * @remarks
   * Organization ID
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
   * Specifies whether to enable automatic account updates.
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
   * Type of expression.
   * 
   * This parameter is required.
   * 
   * @example
   * field
   */
  expressionMappingType?: string;
  /**
   * @remarks
   * Expression for mapping attribute value.
   * 
   * This parameter is required.
   * 
   * @example
   * idpUser.userId
   */
  sourceValueExpression?: string;
  /**
   * @remarks
   * Target attribute name for mapping.
   * 
   * This parameter is required.
   * 
   * @example
   * user.username
   */
  targetField?: string;
  /**
   * @remarks
   * Target attribute name for mapping.
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
   * Automatic account matching status.
   * 
   * @example
   * disabled
   */
  autoMatchUserStatus?: string;
  /**
   * @remarks
   * Specifies whether the manual account binding feature is enabled.
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
   * Specifies whether to automatically update passwords.
   * 
   * @example
   * enabled
   */
  autoUpdatePasswordStatus?: string;
  /**
   * @remarks
   * User Login Identifier
   * 
   * @example
   * email
   */
  userLoginIdentifier?: string;
  /**
   * @remarks
   * User ObjectClass
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
   * Automatic Account Creation Rule Configuration.
   */
  autoCreateUserConfig?: SetIdentityProviderAuthnConfigurationRequestAutoCreateUserConfig;
  /**
   * @remarks
   * Automatic Account Update Configuration
   */
  autoUpdateUserConfig?: SetIdentityProviderAuthnConfigurationRequestAutoUpdateUserConfig;
  /**
   * @remarks
   * Account Binding Rule Configuration
   */
  bindingConfig?: SetIdentityProviderAuthnConfigurationRequestBindingConfig;
  /**
   * @remarks
   * Identity Provider ID
   * 
   * This parameter is required.
   * 
   * @example
   * idp_11111
   */
  identityProviderId?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * AD/LDAP Authentication Configuration
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

