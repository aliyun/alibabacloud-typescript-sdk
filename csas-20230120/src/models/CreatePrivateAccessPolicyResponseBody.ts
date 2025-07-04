// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrivateAccessPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the private access policy.
   * 
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  /**
   * @remarks
   * The ID of the current request.
   * 
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

