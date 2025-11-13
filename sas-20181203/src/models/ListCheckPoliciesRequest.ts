// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The types of policies to be queried (default queries both custom and system predefined policies).
   */
  checkTypes?: string[];
  /**
   * @remarks
   * Specifies the page number from which to start displaying the query results. The starting value is **1**. The default value is **1**, indicating that the display starts from the **1st** page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * ID of the associated parent policy.
   * 
   * (The specific dependency relationship from low to high is: Section -> Requirement -> Standard)
   * 
   * @example
   * 1000000000002
   */
  dependentPolicyId?: number;
  /**
   * @remarks
   * Language type for request and response messages, with a default value of **zh**. Possible values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Number of check item information entries displayed per page during pagination. The default value is **50**, indicating 50 entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of the newly added classification setting.
   * 
   * @example
   * 1000000000001
   */
  policyId?: number;
  /**
   * @remarks
   * Name of the newly added classification setting.
   * 
   * @example
   * testPolicyName
   */
  policyShowName?: string;
  /**
   * @remarks
   * Policy type of the custom check item rule:
   * - **STANDARD**: New standard
   * - **REQUIREMENT**: New requirement
   * - **SECTION**: New section
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
   * - **AISPM**: AI Configuration Management (AI-SPM)
   * - **IDENTITY_PERMISSION**: Identity and Permission Management (CIEM)
   * - **RISK**: Security Risk
   * - **COMPLIANCE**: Compliance Risk
   * 
   * @example
   * AISPM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkTypes: 'CheckTypes',
      currentPage: 'CurrentPage',
      dependentPolicyId: 'DependentPolicyId',
      lang: 'Lang',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policyShowName: 'PolicyShowName',
      policyType: 'PolicyType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkTypes: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      dependentPolicyId: 'number',
      lang: 'string',
      pageSize: 'number',
      policyId: 'number',
      policyShowName: 'string',
      policyType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkTypes)) {
      $dara.Model.validateArray(this.checkTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

