// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVerificationInfoRequest extends $dara.Model {
  email?: string;
  mobilePhone?: string;
  userPrincipalName?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      mobilePhone: 'MobilePhone',
      userPrincipalName: 'UserPrincipalName',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      mobilePhone: 'string',
      userPrincipalName: 'string',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

