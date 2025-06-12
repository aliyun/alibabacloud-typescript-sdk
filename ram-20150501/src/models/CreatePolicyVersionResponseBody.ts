// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePolicyVersionResponseBodyPolicyVersion } from "./CreatePolicyVersionResponseBodyPolicyVersion";


export class CreatePolicyVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the policy version.
   */
  policyVersion?: CreatePolicyVersionResponseBodyPolicyVersion;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: CreatePolicyVersionResponseBodyPolicyVersion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policyVersion && typeof (this.policyVersion as any).validate === 'function') {
      (this.policyVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

