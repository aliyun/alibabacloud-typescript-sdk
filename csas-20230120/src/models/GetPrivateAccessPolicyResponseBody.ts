// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPrivateAccessPolicyResponseBodyPolicy } from "./GetPrivateAccessPolicyResponseBodyPolicy";


export class GetPrivateAccessPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Intranet access policy.
   */
  policy?: GetPrivateAccessPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the current request.
   * 
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
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
      policy: GetPrivateAccessPolicyResponseBodyPolicy,
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

