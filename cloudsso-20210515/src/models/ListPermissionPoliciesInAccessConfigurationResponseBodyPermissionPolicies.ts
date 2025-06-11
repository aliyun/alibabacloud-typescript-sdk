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

