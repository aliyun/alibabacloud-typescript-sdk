// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomPrivacyPoliciesResponseBodyCustomPrivacyPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom privacy policy.
   * 
   * @example
   * pp_xxxxx
   */
  customPrivacyPolicyId?: string;
  /**
   * @remarks
   * The name of the custom privacy policy.
   * 
   * @example
   * Custom Privacy Policy Name
   */
  customPrivacyPolicyName?: string;
  /**
   * @remarks
   * The default language of the policy. The value is the LanguageCode returned by the ListLanguages operation.
   * 
   * @example
   * zh-Hans-CN
   */
  defaultLanguageCode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the custom privacy policy.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The user consent type for the policy.
   * 
   * @example
   * implied_consent
   */
  userConsentType?: string;
  static names(): { [key: string]: string } {
    return {
      customPrivacyPolicyId: 'CustomPrivacyPolicyId',
      customPrivacyPolicyName: 'CustomPrivacyPolicyName',
      defaultLanguageCode: 'DefaultLanguageCode',
      instanceId: 'InstanceId',
      status: 'Status',
      userConsentType: 'UserConsentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicyId: 'string',
      customPrivacyPolicyName: 'string',
      defaultLanguageCode: 'string',
      instanceId: 'string',
      status: 'string',
      userConsentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPrivacyPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of custom privacy policies.
   */
  customPrivacyPolicies?: ListCustomPrivacyPoliciesResponseBodyCustomPrivacyPolicies[];
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The token that is used to retrieve the previous page of results.
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
      customPrivacyPolicies: 'CustomPrivacyPolicies',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrivacyPolicies: { 'type': 'array', 'itemType': ListCustomPrivacyPoliciesResponseBodyCustomPrivacyPolicies },
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customPrivacyPolicies)) {
      $dara.Model.validateArray(this.customPrivacyPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

