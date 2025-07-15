// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpControlsResponseBodyIpControlInfosIpControlInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the ACL was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-17T05:48:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the ACL.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * @example
   * 7ea91319a34d48a09b5c9c871d9768b1
   */
  ipControlId?: string;
  /**
   * @remarks
   * The name of the ACL.
   * 
   * @example
   * testControl11
   */
  ipControlName?: string;
  /**
   * @remarks
   * The type of the ACL.
   * 
   * @example
   * ALLOW
   */
  ipControlType?: string;
  /**
   * @remarks
   * The time when the ACL was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-17T06:00:38Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the region in which the ACL is deployed.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
      ipControlType: 'IpControlType',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
      ipControlType: 'string',
      modifiedTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlsResponseBodyIpControlInfos extends $dara.Model {
  ipControlInfo?: DescribeIpControlsResponseBodyIpControlInfosIpControlInfo[];
  static names(): { [key: string]: string } {
    return {
      ipControlInfo: 'IpControlInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlInfo: { 'type': 'array', 'itemType': DescribeIpControlsResponseBodyIpControlInfosIpControlInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ipControlInfo)) {
      $dara.Model.validateArray(this.ipControlInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpControlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ACL. The information is an array that consists of IpControlInfo data. The information does not include specific policies.
   */
  ipControlInfos?: DescribeIpControlsResponseBodyIpControlInfos;
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
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipControlInfos: 'IpControlInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlInfos: DescribeIpControlsResponseBodyIpControlInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipControlInfos && typeof (this.ipControlInfos as any).validate === 'function') {
      (this.ipControlInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

