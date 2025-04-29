// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpControlPolicyItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL. The ID is unique.
   * 
   * @example
   * 7ea91319a34d48a09b5c9c871d9768b1
   */
  ipControlId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * P151617000829241
   */
  policyItemId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyItemId: 'PolicyItemId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyItemId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

