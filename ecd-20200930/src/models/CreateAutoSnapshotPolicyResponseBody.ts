// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-3hpa78d0qyt99****
   */
  policyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51592A88-0F2C-55E6-AD2C-2AD9C10D****
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

