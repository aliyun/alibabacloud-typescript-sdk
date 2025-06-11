// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPermissionPoliciesInAccessConfigurationResponseBodyPermissionPolicies } from "./ListPermissionPoliciesInAccessConfigurationResponseBodyPermissionPolicies";


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

