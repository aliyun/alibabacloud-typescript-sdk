// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisByTrafficControlResponseBodyApiInfosApiInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 3b81fd160f5645e097cc8855d75a1cf6
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API
   * 
   * @example
   * testapi
   */
  apiName?: string;
  /**
   * @remarks
   * The binding time of the API.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  boundTime?: string;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 0009db9c828549768a200320714b8930
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group to which an API belongs.
   * 
   * @example
   * mygroup
   */
  groupName?: string;
  /**
   * @remarks
   * The region where the API is located.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **TEST**
   * 
   * @example
   * TEST
   */
  stageName?: string;
  /**
   * @remarks
   * Indicates whether the API is public. Valid values:
   * 
   * *   **PUBLIC**
   * *   **PRIVATE**
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      stageName: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByTrafficControlResponseBodyApiInfos extends $dara.Model {
  apiInfo?: DescribeApisByTrafficControlResponseBodyApiInfosApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApisByTrafficControlResponseBodyApiInfosApiInfo },
    };
  }

  validate() {
    if(Array.isArray(this.apiInfo)) {
      $dara.Model.validateArray(this.apiInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisByTrafficControlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned API information. It is an array consisting of ApiInfo data.
   */
  apiInfos?: DescribeApisByTrafficControlResponseBodyApiInfos;
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
      apiInfos: 'ApiInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfos: DescribeApisByTrafficControlResponseBodyApiInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiInfos && typeof (this.apiInfos as any).validate === 'function') {
      (this.apiInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

