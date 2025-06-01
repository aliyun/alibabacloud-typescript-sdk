// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRegistrationPolicyResponseBodyPolicy } from "./CreateRegistrationPolicyResponseBodyPolicy";


export class CreateRegistrationPolicyResponseBody extends $dara.Model {
  policy?: CreateRegistrationPolicyResponseBodyPolicy;
  /**
   * @example
   * FEF1144C-95D1-5F7C-81EF-9DB70EA49FCE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: CreateRegistrationPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

