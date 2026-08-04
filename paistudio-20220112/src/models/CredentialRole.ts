// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssumeUserInfo } from "./AssumeUserInfo";


export class CredentialRole extends $dara.Model {
  assumeRoleFor?: string;
  assumeUserInfo?: AssumeUserInfo;
  policy?: string;
  roleArn?: string;
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

