// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPoliciesForIdentityResponseBodyAppPolicyList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the application policy was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-01T01:01:01Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * App full access permission
   */
  description?: string;
  /**
   * @remarks
   * The last time when the application policy was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-01T01:08:01Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * VODAppFullAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **System**
   * *   **Custom**
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The content of the policy.
   * 
   * @example
   * ****
   */
  policyValue?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      description: 'Description',
      modificationTime: 'ModificationTime',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      policyValue: 'PolicyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      description: 'string',
      modificationTime: 'string',
      policyName: 'string',
      policyType: 'string',
      policyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppPoliciesForIdentityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of each policy.
   * 
   * > A maximum of 100 entries can be returned.
   */
  appPolicyList?: ListAppPoliciesForIdentityResponseBodyAppPolicyList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C9F3E715-B3B8-4D*****27-3A70346F0E04
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appPolicyList: 'AppPolicyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPolicyList: { 'type': 'array', 'itemType': ListAppPoliciesForIdentityResponseBodyAppPolicyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appPolicyList)) {
      $dara.Model.validateArray(this.appPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

