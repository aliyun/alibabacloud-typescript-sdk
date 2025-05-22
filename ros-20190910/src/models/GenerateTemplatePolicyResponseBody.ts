// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateTemplatePolicyResponseBodyPolicy } from "./GenerateTemplatePolicyResponseBodyPolicy";


export class GenerateTemplatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the policy.
   */
  policy?: GenerateTemplatePolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
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
      policy: GenerateTemplatePolicyResponseBodyPolicy,
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

