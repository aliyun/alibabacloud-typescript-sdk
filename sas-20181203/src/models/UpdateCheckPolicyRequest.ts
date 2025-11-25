// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCheckPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the associated parent policy.
   * 
   * (The specific dependency hierarchy, from low to high, is Section -> Requirement -> Standard).
   * 
   * @example
   * 1000000000002
   */
  dependentPolicyId?: number;
  /**
   * @remarks
   * ID of the custom policy.
   * > You can obtain this parameter by calling the [ListCheckPolicies](~~ListCheckPolicies~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000000001
   */
  policyId?: number;
  /**
   * @remarks
   * Name of the custom classification.
   * 
   * @example
   * testPolicyName
   */
  policyShowName?: string;
  /**
   * @remarks
   * Classification type of the custom check item rule:
   * - **STANDARD**: Add to standard.
   * - **REQUIREMENT**: Add to requirement.
   * - **SECTION**: Add to section.
   * 
   * This parameter is required.
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * Name of the associated major policy category (required when PolicyType is STANDARD):
   * - **AISPM**: AI Configuration Management (AISPM).
   * - **RISK**: Security Risk.
   * - **COMPLIANCE**: Compliance Risk.
   * 
   * @example
   * AISPM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dependentPolicyId: 'DependentPolicyId',
      policyId: 'PolicyId',
      policyShowName: 'PolicyShowName',
      policyType: 'PolicyType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentPolicyId: 'number',
      policyId: 'number',
      policyShowName: 'string',
      policyType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

