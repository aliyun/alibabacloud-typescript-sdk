// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 5af418828f0344a3b588c0cc1331a3bc
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * CreateObject
   */
  apiName?: string;
  /**
   * @remarks
   * The publishing time (UTC) of the API.
   * 
   * @example
   * 2016-07-20T08:28:48Z
   */
  deployedTime?: string;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * Creates an object
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 1084f9034c744137901057206b39d2b6
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * myGroup2
   */
  groupName?: string;
  /**
   * @remarks
   * The historical version of the API.
   * 
   * @example
   * 20160705104552393
   */
  historyVersion?: string;
  /**
   * @remarks
   * The region in which the API is located.
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
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * Indicates whether an API version is effective. Valid values: **ONLINE** and **OFFLINE**.
   * 
   * @example
   * ONLINE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      deployedTime: 'DeployedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      historyVersion: 'HistoryVersion',
      regionId: 'RegionId',
      stageName: 'StageName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      deployedTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      historyVersion: 'string',
      regionId: 'string',
      stageName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoriesResponseBodyApiHisItems extends $dara.Model {
  apiHisItem?: DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem[];
  static names(): { [key: string]: string } {
    return {
      apiHisItem: 'ApiHisItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItem: { 'type': 'array', 'itemType': DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem },
    };
  }

  validate() {
    if(Array.isArray(this.apiHisItem)) {
      $dara.Model.validateArray(this.apiHisItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiHistoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned API information. It is an array consisting of ApiHisItem data.
   */
  apiHisItems?: DescribeApiHistoriesResponseBodyApiHisItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 15
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ003
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 32
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiHisItems: 'ApiHisItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItems: DescribeApiHistoriesResponseBodyApiHisItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiHisItems && typeof (this.apiHisItems as any).validate === 'function') {
      (this.apiHisItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

