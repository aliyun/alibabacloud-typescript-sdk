// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePolicyDescriptionResponseBodyPolicy } from "./UpdatePolicyDescriptionResponseBodyPolicy";


export class UpdatePolicyDescriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the policy.
   */
  policy?: UpdatePolicyDescriptionResponseBodyPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7572DEBD-0ECE-518E-8682-D8CB82F8FE8E
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
      policy: UpdatePolicyDescriptionResponseBodyPolicy,
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

