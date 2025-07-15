// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem extends $dara.Model {
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
   * API operation
   * 
   * @example
   * testapi
   */
  apiName?: string;
  /**
   * @remarks
   * The binding time of the throttling policy.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  boundTime?: string;
  /**
   * @remarks
   * The ID of the throttling policy.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  trafficControlId?: string;
  /**
   * @remarks
   * The name of the throttling policy.
   * 
   * @example
   * backendsignature
   */
  trafficControlName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      trafficControlId: 'string',
      trafficControlName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficControlsResponseBodyApiTrafficControls extends $dara.Model {
  apiTrafficControlItem?: DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem[];
  static names(): { [key: string]: string } {
    return {
      apiTrafficControlItem: 'ApiTrafficControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiTrafficControlItem: { 'type': 'array', 'itemType': DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem },
    };
  }

  validate() {
    if(Array.isArray(this.apiTrafficControlItem)) {
      $dara.Model.validateArray(this.apiTrafficControlItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiTrafficControlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned throttling policy information. It is an array consisting of ApiTrafficControlItem data.
   */
  apiTrafficControls?: DescribeApiTrafficControlsResponseBodyApiTrafficControls;
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
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiTrafficControls: 'ApiTrafficControls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiTrafficControls: DescribeApiTrafficControlsResponseBodyApiTrafficControls,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiTrafficControls && typeof (this.apiTrafficControls as any).validate === 'function') {
      (this.apiTrafficControls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

