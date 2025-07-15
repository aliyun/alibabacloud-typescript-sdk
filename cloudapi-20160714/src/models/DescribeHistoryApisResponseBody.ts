// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryApisResponseBodyApiHisItemsApiHisItem extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * 5af418828f0344a3b588c0cc1331a3bc
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * v2_role_assign
   */
  apiName?: string;
  /**
   * @remarks
   * The time when the API was published. The time is displayed in UTC.
   * 
   * @example
   * 2016-07-20T08:28:48Z
   */
  deployedTime?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * Creates an object
   */
  description?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * @example
   * 1084f9034c744137901057206b39d2b6
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group to which the API belongs.
   * 
   * @example
   * myGroup2
   */
  groupName?: string;
  /**
   * @remarks
   * The historical version of the API definition.
   * 
   * @example
   * 20210915101416294
   */
  historyVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The environment alias.
   * 
   * @example
   * Online
   */
  stageAlias?: string;
  /**
   * @remarks
   * The environment name. Valid values:
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
   * Indicates whether an API version is effective. Valid values: ONLINE and OFFLINE.
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
      stageAlias: 'StageAlias',
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
      stageAlias: 'string',
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

export class DescribeHistoryApisResponseBodyApiHisItems extends $dara.Model {
  apiHisItem?: DescribeHistoryApisResponseBodyApiHisItemsApiHisItem[];
  static names(): { [key: string]: string } {
    return {
      apiHisItem: 'ApiHisItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItem: { 'type': 'array', 'itemType': DescribeHistoryApisResponseBodyApiHisItemsApiHisItem },
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

export class DescribeHistoryApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned API information. It is an array consisting of ApiHisItems.
   */
  apiHisItems?: DescribeHistoryApisResponseBodyApiHisItems;
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
   * The number of entries to return on each page. Maximum value: 50. Default value: 10.
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
   * 6C87A26A-6A18-4B8E-8099-705278381A2C
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
      apiHisItems: 'ApiHisItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItems: DescribeHistoryApisResponseBodyApiHisItems,
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

