// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 46fbb52840d146f186e38e8e70fc8c90
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * testapi
   */
  apiName?: string;
  /**
   * @remarks
   * The time of binding.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  boundTime?: string;
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  ipControlId?: string;
  /**
   * @remarks
   * The name of the ACL.
   * 
   * @example
   * testControlName
   */
  ipControlName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiIpControlsResponseBodyApiIpControls extends $dara.Model {
  apiIpControlItem?: DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem[];
  static names(): { [key: string]: string } {
    return {
      apiIpControlItem: 'ApiIpControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIpControlItem: { 'type': 'array', 'itemType': DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem },
    };
  }

  validate() {
    if(Array.isArray(this.apiIpControlItem)) {
      $dara.Model.validateArray(this.apiIpControlItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiIpControlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ACLs. The information is an array of ApiIpControlItem data.
   */
  apiIpControls?: DescribeApiIpControlsResponseBodyApiIpControls;
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
      apiIpControls: 'ApiIpControls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIpControls: DescribeApiIpControlsResponseBodyApiIpControls,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiIpControls && typeof (this.apiIpControls as any).validate === 'function') {
      (this.apiIpControls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

