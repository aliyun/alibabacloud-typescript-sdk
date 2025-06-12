// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPolicyResponseBodyDefaultPolicyVersion } from "./GetPolicyResponseBodyDefaultPolicyVersion";
import { GetPolicyResponseBodyPolicy } from "./GetPolicyResponseBodyPolicy";


export class GetPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the default policy version.
   */
  defaultPolicyVersion?: GetPolicyResponseBodyDefaultPolicyVersion;
  /**
   * @remarks
   * The basic information about the policy.
   */
  policy?: GetPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPolicyVersion: 'DefaultPolicyVersion',
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPolicyVersion: GetPolicyResponseBodyDefaultPolicyVersion,
      policy: GetPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.defaultPolicyVersion && typeof (this.defaultPolicyVersion as any).validate === 'function') {
      (this.defaultPolicyVersion as any).validate();
    }
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

