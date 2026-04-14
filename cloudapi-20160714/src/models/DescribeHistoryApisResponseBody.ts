// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryApisResponseBodyApiHisItemsApiHisItem extends $dara.Model {
  apiId?: string;
  apiName?: string;
  deployedTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  historyVersion?: string;
  regionId?: string;
  stageAlias?: string;
  stageName?: string;
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

