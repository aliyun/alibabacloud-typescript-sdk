// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCheckPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the parent policy.
   *       
   * (The specific dependency order from low to high is Section -> Requirement -> Standard)
   * 
   * @example
   * 123
   */
  dependentPolicyId?: number;
  /**
   * @remarks
   * The name of the custom policy.
   * 
   * This parameter is required.
   * 
   * @example
   * TestPolicyName
   */
  policyShowName?: string;
  /**
   * @remarks
   * The policy category type for custom check rules:
   * - **STANDARD**: Add to a standard.
   * - **REQUIREMENT**: Add to a requirement.
   * - **SECTION**: Add to a section.
   * 
   * This parameter is required.
   * 
   * @example
   * STANDARD
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the major policy category (required when PolicyType is STANDARD):
   * - **AISPM**: AI Configuration Management (AISPM).
   * - **IDENTITY_PERMISSION**: Identity and Permission Management (CIEM).
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
      policyShowName: 'PolicyShowName',
      policyType: 'PolicyType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentPolicyId: 'number',
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

