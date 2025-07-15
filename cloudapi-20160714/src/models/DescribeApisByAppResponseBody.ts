// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo extends $dara.Model {
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
   * The validity period of the authorization.
   * 
   * @example
   * Sun, 02 Jan 2022 16:00:00 GMT
   */
  authVaildTime?: string;
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
   * The authorization description.
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
   * wb2022012101605749
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
   * The authorizer. Valid values:
   * 
   * *   **PROVIDER**: API owner
   * *   **CONSUMER**: API caller
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
   * The environment alias.
   * 
   * @example
   * Online
   */
  stageAlias?: string;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      authVaildTime: 'AuthVaildTime',
      authorizationSource: 'AuthorizationSource',
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      method: 'Method',
      operator: 'Operator',
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
      authVaildTime: 'string',
      authorizationSource: 'string',
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      method: 'string',
      operator: 'string',
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

export class DescribeApisByAppResponseBodyAppApiRelationInfos extends $dara.Model {
  appApiRelationInfo?: DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo[];
  static names(): { [key: string]: string } {
    return {
      appApiRelationInfo: 'AppApiRelationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApiRelationInfo: { 'type': 'array', 'itemType': DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo },
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

export class DescribeApisByAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API authorizations.
   */
  appApiRelationInfos?: DescribeApisByAppResponseBodyAppApiRelationInfos;
  /**
   * @remarks
   * The number of pages to return the results on.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
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
      appApiRelationInfos: DescribeApisByAppResponseBodyAppApiRelationInfos,
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

