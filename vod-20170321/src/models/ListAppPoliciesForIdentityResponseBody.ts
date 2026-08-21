// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppPoliciesForIdentityResponseBodyAppPolicyList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the application policy was granted to the role. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2019-01-01T01:01:01Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * App full access permission
   */
  description?: string;
  /**
   * @remarks
   * The time when the application policy granted to the role was last modified. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2019-01-01T01:08:01Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * VODAppFullAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * - **System**: system policy.
   * - **Custom**: user-defined policy.
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The policy value.
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
   * The list of access policy names.
   * 
   * > A maximum of 100 entries are returned.
   */
  appPolicyList?: ListAppPoliciesForIdentityResponseBodyAppPolicyList[];
  /**
   * @remarks
   * The request ID.
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

