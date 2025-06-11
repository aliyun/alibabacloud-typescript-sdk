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
   * B7C6E839-FB65-59BE-B753-003AA8AF7DF7
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

