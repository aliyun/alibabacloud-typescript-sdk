// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCheckPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Array of policies to delete
   * 
   * This parameter is required.
   */
  policyIds?: number[];
  /**
   * @remarks
   * Policy type for custom check rule:
   * 
   * *   **STANDARD**: Standard-level policy
   * *   **REQUIREMENT**: Requirement-level policy
   * *   **SECTION**: Section-level policy
   * 
   * This parameter is required.
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'number' },
      policyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

