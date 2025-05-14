// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfigConfigsRolesUserInfo } from "./CredentialConfigConfigsRolesUserInfo";


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

