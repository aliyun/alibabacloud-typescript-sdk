// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiProductApisResponseBodyApiInfoListApiInfo extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * dd46297680014a7e8e318308f3345951
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * testApi
   */
  apiName?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 1e377f18142345dfb700cd8911c2463a
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group to which the API belongs.
   * 
   * @example
   * testApiGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The request method of the API.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The ID of the region where the API is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The environment to which the API is published. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the staging environment
   * *   **TEST**: the test environment
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      method: 'Method',
      path: 'Path',
      regionId: 'RegionId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      method: 'string',
      path: 'string',
      regionId: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiProductApisResponseBodyApiInfoList extends $dara.Model {
  apiInfo?: DescribeApiProductApisResponseBodyApiInfoListApiInfo[];
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'ApiInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: { 'type': 'array', 'itemType': DescribeApiProductApisResponseBodyApiInfoListApiInfo },
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

export class DescribeApiProductApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the returned APIs.
   */
  apiInfoList?: DescribeApiProductApisResponseBodyApiInfoList;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 03442A3D-3B7D-434C-8A95-A5FEB989B519
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfoList: 'ApiInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfoList: DescribeApiProductApisResponseBodyApiInfoList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiInfoList && typeof (this.apiInfoList as any).validate === 'function') {
      (this.apiInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

