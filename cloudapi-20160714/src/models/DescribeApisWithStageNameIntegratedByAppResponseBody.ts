// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfosAppApiRelationInfo extends $dara.Model {
  apiId?: string;
  apiName?: string;
  authorizationSource?: string;
  createdTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  method?: string;
  operator?: string;
  path?: string;
  regionId?: string;
  stageNameAndAuth?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authorizationSource: 'AuthorizationSource',
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      method: 'Method',
      operator: 'Operator',
      path: 'Path',
      regionId: 'RegionId',
      stageNameAndAuth: 'StageNameAndAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      authorizationSource: 'string',
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      method: 'string',
      operator: 'string',
      path: 'string',
      regionId: 'string',
      stageNameAndAuth: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.stageNameAndAuth) {
      $dara.Model.validateMap(this.stageNameAndAuth);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfos extends $dara.Model {
  appApiRelationInfo?: DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfosAppApiRelationInfo[];
  static names(): { [key: string]: string } {
    return {
      appApiRelationInfo: 'AppApiRelationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApiRelationInfo: { 'type': 'array', 'itemType': DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfosAppApiRelationInfo },
    };
  }

  validate() {
    if(Array.isArray(this.appApiRelationInfo)) {
      $dara.Model.validateArray(this.appApiRelationInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisWithStageNameIntegratedByAppResponseBody extends $dara.Model {
  appApiRelationInfos?: DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfos;
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
   * 6C87A26A-6A18-4B8E-8099-705278381A2C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appApiRelationInfos: 'AppApiRelationInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApiRelationInfos: DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.appApiRelationInfos && typeof (this.appApiRelationInfos as any).validate === 'function') {
      (this.appApiRelationInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

