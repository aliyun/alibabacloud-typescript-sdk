// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionPoliciesInAccessConfigurationResponseBodyPermissionPolicies extends $dara.Model {
  /**
   * @remarks
   * The time when the policy was created for the access configuration.
   * 
   * @example
   * 2021-11-03T06:37:25Z
   */
  addTime?: string;
  /**
   * @remarks
   * The configurations of the inline policy.
   * 
   * >  This parameter is returned only when the value of the PermissionPolicyType parameter is Inline.
   * 
   * @example
   * {\\"Statement\\": [{\\"Action\\": \\"*\\",\\"Effect\\": \\"Allow\\",\\"Resource\\": \\"*\\"}],\\"Version\\": \\"1\\"}
   */
  permissionPolicyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * AliyunECSFullAccess
   */
  permissionPolicyName?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * System
   */
  permissionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      permissionPolicyDocument: 'PermissionPolicyDocument',
      permissionPolicyName: 'PermissionPolicyName',
      permissionPolicyType: 'PermissionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      permissionPolicyDocument: 'string',
      permissionPolicyName: 'string',
      permissionPolicyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionPoliciesInAccessConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policies.
   */
  permissionPolicies?: ListPermissionPoliciesInAccessConfigurationResponseBodyPermissionPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3A5E771F-1F5A-5555-A64E-579748AAFD98
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of policies.
   * 
   * @example
   * 2
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      permissionPolicies: 'PermissionPolicies',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionPolicies: { 'type': 'array', 'itemType': ListPermissionPoliciesInAccessConfigurationResponseBodyPermissionPolicies },
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.permissionPolicies)) {
      $dara.Model.validateArray(this.permissionPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

