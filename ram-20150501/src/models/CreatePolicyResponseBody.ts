// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePolicyResponseBodyPolicy } from "./CreatePolicyResponseBodyPolicy";


export class CreatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the policy.
   */
  policy?: CreatePolicyResponseBodyPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA34C54A-C2B1-5A65-B6B0-B5842C1DB4DA
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
      policy: CreatePolicyResponseBodyPolicy,
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

