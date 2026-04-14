// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpControlsResponseBodyIpControlInfosIpControlInfo extends $dara.Model {
  createTime?: string;
  description?: string;
  ipControlId?: string;
  ipControlName?: string;
  ipControlType?: string;
  modifiedTime?: string;
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

