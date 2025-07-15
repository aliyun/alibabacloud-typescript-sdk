// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginApisResponseBodyApiSummarysApiPluginSummary extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * accc8c68b7294b1cb4928741********
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * fhosQueryDayOfStock_V2
   */
  apiName?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * API description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 5f51f89261854fd9ad5116be********
   */
  groupId?: string;
  /**
   * @remarks
   * The API group to which the API belongs.
   * 
   * @example
   * myGroup2
   */
  groupName?: string;
  /**
   * @remarks
   * The HTTP method of the API.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /mqTest
   */
  path?: string;
  /**
   * @remarks
   * The ID of the region in which the API resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The environment alias.
   * 
   * @example
   * Production
   */
  stageAlias?: string;
  /**
   * @remarks
   * The environment to which the API is published. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the pre-release environment
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
      stageAlias: 'StageAlias',
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
      stageAlias: 'string',
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

export class DescribePluginApisResponseBodyApiSummarys extends $dara.Model {
  apiPluginSummary?: DescribePluginApisResponseBodyApiSummarysApiPluginSummary[];
  static names(): { [key: string]: string } {
    return {
      apiPluginSummary: 'ApiPluginSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPluginSummary: { 'type': 'array', 'itemType': DescribePluginApisResponseBodyApiSummarysApiPluginSummary },
    };
  }

  validate() {
    if(Array.isArray(this.apiPluginSummary)) {
      $dara.Model.validateArray(this.apiPluginSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about APIs.
   */
  apiSummarys?: DescribePluginApisResponseBodyApiSummarys;
  /**
   * @remarks
   * The page number of the page to return.
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
   * The request ID.
   * 
   * @example
   * F9C5C4A5-BC6C-57A3-839F-AB08********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiSummarys: 'ApiSummarys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSummarys: DescribePluginApisResponseBodyApiSummarys,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiSummarys && typeof (this.apiSummarys as any).validate === 'function') {
      (this.apiSummarys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

