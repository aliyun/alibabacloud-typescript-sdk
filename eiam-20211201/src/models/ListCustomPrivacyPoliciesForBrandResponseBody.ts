// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomPrivacyPoliciesForBrandResponseBodyBrandCustomPrivacyPolicies extends $dara.Model {
  /**
   * @remarks
   * The privacy policy ID.
   * 
   * @example
   * pp_xxxx
   */
  customPrivacyPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      customPrivacyPolicyId: 'CustomPrivacyPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPrivacyPoliciesForBrandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of custom privacy policies associated with the brand.
   */
  brandCustomPrivacyPolicies?: ListCustomPrivacyPoliciesForBrandResponseBodyBrandCustomPrivacyPolicies[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The token to retrieve the previous page of results.
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      brandCustomPrivacyPolicies: 'BrandCustomPrivacyPolicies',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandCustomPrivacyPolicies: { 'type': 'array', 'itemType': ListCustomPrivacyPoliciesForBrandResponseBodyBrandCustomPrivacyPolicies },
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.brandCustomPrivacyPolicies)) {
      $dara.Model.validateArray(this.brandCustomPrivacyPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

