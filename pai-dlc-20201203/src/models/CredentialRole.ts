// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssumeUserInfo } from "./AssumeUserInfo";


export class CredentialRole extends $dara.Model {
  /**
   * @remarks
   * The account on whose behalf the role is assumed.
   */
  assumeRoleFor?: string;
  /**
   * @remarks
   * The user identity information used for role assumption.
   */
  assumeUserInfo?: AssumeUserInfo;
  /**
   * @remarks
   * The access policy attached during role assumption.
   */
  policy?: string;
  /**
   * @remarks
   * The ARN of the RAM role.
   * 
   * @example
   * acs:ram::1872xxxxxxxxx:role/account-pai-prod
   */
  roleArn?: string;
  /**
   * @remarks
   * The role type. Valid values: service and user.
   * 
   * @example
   * service
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      assumeUserInfo: 'AssumeUserInfo',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      assumeUserInfo: AssumeUserInfo,
      policy: 'string',
      roleArn: 'string',
      roleType: 'string',
    };
  }

  validate() {
    if(this.assumeUserInfo && typeof (this.assumeUserInfo as any).validate === 'function') {
      (this.assumeUserInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

