// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CredentialConfigConfigsRolesUserInfo extends $dara.Model {
  /**
   * @example
   * LT********
   */
  accessKeyId?: string;
  /**
   * @example
   * 456******
   */
  id?: string;
  /**
   * @example
   * ********
   */
  securityToken?: string;
  /**
   * @example
   * sub
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      id: 'Id',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      id: 'string',
      securityToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfigConfigsRoles extends $dara.Model {
  /**
   * @example
   * 123******
   */
  assumeRoleFor?: string;
  /**
   * @example
   * {}
   */
  policy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123******:role/****
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * service
   */
  roleType?: string;
  userInfo?: CredentialConfigConfigsRolesUserInfo;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleType: 'RoleType',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      policy: 'string',
      roleArn: 'string',
      roleType: 'string',
      userInfo: CredentialConfigConfigsRolesUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfigConfigs extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  key?: string;
  roles?: CredentialConfigConfigsRoles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Role
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      roles: 'Roles',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      roles: { 'type': 'array', 'itemType': CredentialConfigConfigsRoles },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfig extends $dara.Model {
  /**
   * @example
   * 0
   */
  aliyunEnvRoleKey?: string;
  configs?: CredentialConfigConfigs[];
  /**
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunEnvRoleKey: 'AliyunEnvRoleKey',
      configs: 'Configs',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunEnvRoleKey: 'string',
      configs: { 'type': 'array', 'itemType': CredentialConfigConfigs },
      enable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

