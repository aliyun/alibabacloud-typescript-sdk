// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfosAppApiRelationInfo extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * c625795a1e664782a918eaa629e96ab5
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * sd2_h5_player_history_competition
   */
  apiName?: string;
  /**
   * @remarks
   * The authorization source.
   * 
   * @example
   * SELF
   */
  authorizationSource?: string;
  /**
   * @remarks
   * The time when the authorization was created.
   * 
   * @example
   * Sun, 02 Jan 2022 16:00:00 GMT
   */
  createdTime?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * b1008kz
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 38bed48d664149e4b9b5ea576319673f
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * manager_vehicles
   */
  groupName?: string;
  /**
   * @remarks
   * The request HTTP method of the API.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The authorizer. Valid values:
   * 
   * *   **PROVIDER:** the API owner
   * *   **CONSUMER:** the API caller
   * 
   * @example
   * PROVIDER
   */
  operator?: string;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /api/offline/cacheData
   */
  path?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The mapping information between environments and authorizations.
   */
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
  /**
   * @remarks
   * The authorization information of the API.
   */
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

