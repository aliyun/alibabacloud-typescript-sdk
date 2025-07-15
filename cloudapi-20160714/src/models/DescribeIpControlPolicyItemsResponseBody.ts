// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 11112
   */
  appId?: string;
  /**
   * @remarks
   * The IP addresses or CIDR blocks.
   * 
   * @example
   * 113.125.XX.XX;101.11.XX.XX
   */
  cidrIp?: string;
  /**
   * @remarks
   * The time when the policy was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-17T06:20:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the policy was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-17T06:25:13Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * P151617000829241
   */
  policyItemId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cidrIp: 'CidrIp',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      policyItemId: 'PolicyItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cidrIp: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      policyItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItems extends $dara.Model {
  ipControlPolicyItem?: DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem[];
  static names(): { [key: string]: string } {
    return {
      ipControlPolicyItem: 'IpControlPolicyItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlPolicyItem: { 'type': 'array', 'itemType': DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem },
    };
  }

  validate() {
    if(Array.isArray(this.ipControlPolicyItem)) {
      $dara.Model.validateArray(this.ipControlPolicyItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlPolicyItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about policies. The information is an array of IpControlPolicyItem data.
   */
  ipControlPolicyItems?: DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipControlPolicyItems: 'IpControlPolicyItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlPolicyItems: DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipControlPolicyItems && typeof (this.ipControlPolicyItems as any).validate === 'function') {
      (this.ipControlPolicyItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

