// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag policy.
   * 
   * @example
   * p-5732750813924f90****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the tag policy.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FDBE270D-C491-5EEC-A5CD-98245422D3F7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      policyName: 'string',
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

