// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachAppPolicyToIdentityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Policy Name of the failed policy.
   */
  failedPolicyNames?: string[];
  /**
   * @remarks
   * The list of non-existent policy names.
   */
  nonExistPolicyNames?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A13-****-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedPolicyNames: 'FailedPolicyNames',
      nonExistPolicyNames: 'NonExistPolicyNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPolicyNames: { 'type': 'array', 'itemType': 'string' },
      nonExistPolicyNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedPolicyNames)) {
      $dara.Model.validateArray(this.failedPolicyNames);
    }
    if(Array.isArray(this.nonExistPolicyNames)) {
      $dara.Model.validateArray(this.nonExistPolicyNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

