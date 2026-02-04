// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdentityProviderAuthnConfigurationRequestAutoCreateUserConfig extends $dara.Model {
  /**
   * @remarks
   * 自动创建账户是否开启
   * 
   * @example
   * disabled
   */
  autoCreateUserStatus?: string;
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
   * 表达式的类型
   * 
   * This parameter is required.
   * 
   * @example
   * filed
   */
  expressionMappingType?: string;
  /**
   * @remarks
   * 映射属性取值表达式
   * 
   * This parameter is required.
   * 
   * @example
   * idpUser.userId
   */
  sourceValueExpression?: string;
  /**
   * @remarks
   * 映射目标属性名称
   * 
   * This parameter is required.
   * 
   * @example
   * user.username
   */
  targetField?: string;
  /**
   * @remarks
   * 映射目标属性名称
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
   * 自动匹配账户的规则
   */
  autoMatchUserProfileExpressions?: SetIdentityProviderAuthnConfigurationRequestBindingConfigAutoMatchUserProfileExpressions[];
  /**
   * @remarks
   * 自动匹配账户是否开启
   * 
   * @example
   * disabled
   */
  autoMatchUserStatus?: string;
  /**
   * @remarks
   * 用户手动绑定账户功能是否开启
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
   * 是否支持自动更新密码
   * 
   * @example
   * enabled
   */
  autoUpdatePasswordStatus?: string;
  /**
   * @remarks
   * 用户登录标识
   * 
   * @example
   * email
   */
  userLoginIdentifier?: string;
  /**
   * @remarks
   * 用户ObjectClass
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
   * 自动创建账户账户规则配置。
   */
  autoCreateUserConfig?: SetIdentityProviderAuthnConfigurationRequestAutoCreateUserConfig;
  autoUpdateUserConfig?: SetIdentityProviderAuthnConfigurationRequestAutoUpdateUserConfig;
  /**
   * @remarks
   * 账户绑定规则配置
   */
  bindingConfig?: SetIdentityProviderAuthnConfigurationRequestBindingConfig;
  /**
   * @remarks
   * IDaaS的身份提供方主键id
   * 
   * This parameter is required.
   * 
   * @example
   * idp_11111
   */
  identityProviderId?: string;
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
   * AD/LDAP配置
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

