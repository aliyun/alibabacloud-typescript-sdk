// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRegistrationPolicyResponseBodyPolicy } from "./UpdateRegistrationPolicyResponseBodyPolicy";


export class UpdateRegistrationPolicyResponseBody extends $dara.Model {
  policy?: UpdateRegistrationPolicyResponseBodyPolicy;
  /**
   * @example
   * 27064ECA-0936-59F3-8A98-EC821E5BD08F
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
      policy: UpdateRegistrationPolicyResponseBodyPolicy,
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

