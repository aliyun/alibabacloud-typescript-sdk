// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCheckPolicyResponseBodyPolicys extends $dara.Model {
  /**
   * @remarks
   * Deleted policy ID.
   * 
   * @example
   * 1000000000001
   */
  policyId?: number;
  /**
   * @remarks
   * The name of the custom policy.
   * 
   * @example
   * testPolicyName
   */
  policyShowName?: string;
  /**
   * @remarks
   * Policy type for custom check rule:
   * 
   * *   **STANDARD**: Standard-level policy
   * *   **REQUIREMENT**: Requirement-level policy
   * *   **SECTION**: Section-level policy
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyShowName: 'PolicyShowName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyShowName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCheckPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of deleted policy details.
   */
  policys?: DeleteCheckPolicyResponseBodyPolicys[];
  /**
   * @remarks
   * The unique ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policys: 'Policys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policys: { 'type': 'array', 'itemType': DeleteCheckPolicyResponseBodyPolicys },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policys)) {
      $dara.Model.validateArray(this.policys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

