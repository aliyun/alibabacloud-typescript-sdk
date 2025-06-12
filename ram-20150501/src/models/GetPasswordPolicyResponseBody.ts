// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPasswordPolicyResponseBodyPasswordPolicy } from "./GetPasswordPolicyResponseBodyPasswordPolicy";


export class GetPasswordPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password policy.
   */
  passwordPolicy?: GetPasswordPolicyResponseBodyPasswordPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordPolicy: 'PasswordPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordPolicy: GetPasswordPolicyResponseBodyPasswordPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordPolicy && typeof (this.passwordPolicy as any).validate === 'function') {
      (this.passwordPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

