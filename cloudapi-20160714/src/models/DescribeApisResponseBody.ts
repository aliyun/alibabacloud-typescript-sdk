// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo extends $dara.Model {
  /**
   * @remarks
   * The deployment status. Valid values: DEPLOYED and NONDEPLOYED.
   * 
   * @example
   * DEPLOYED
   */
  deployedStatus?: string;
  /**
   * @remarks
   * The deployed version.
   * 
   * @example
   * 20220103170737313
   */
  effectiveVersion?: string;
  /**
   * @remarks
   * Stage Name:
   * 
   * *   **RELEASE**: production environment
   * *   **PRE**: staging environment
   * *   **TEST**: test environment
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      deployedStatus: 'DeployedStatus',
      effectiveVersion: 'EffectiveVersion',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedStatus: 'string',
      effectiveVersion: 'string',
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

export class DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfos extends $dara.Model {
  deployedInfo?: DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo[];
  static names(): { [key: string]: string } {
    return {
      deployedInfo: 'DeployedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedInfo: { 'type': 'array', 'itemType': DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo },
    };
  }

  validate() {
    if(Array.isArray(this.deployedInfo)) {
      $dara.Model.validateArray(this.deployedInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBodyApiSummarysApiSummaryTagListTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tagKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tagValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBodyApiSummarysApiSummaryTagList extends $dara.Model {
  tag?: DescribeApisResponseBodyApiSummarysApiSummaryTagListTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeApisResponseBodyApiSummarysApiSummaryTagListTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBodyApiSummarysApiSummary extends $dara.Model {
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
   * The HTTP method of the API request.
   * 
   * @example
   * GET
   */
  apiMethod?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * CreateObject
   */
  apiName?: string;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /sqb/
   */
  apiPath?: string;
  /**
   * @remarks
   * The time when the API was created. The time is displayed in UTC.
   * 
   * @example
   * 2016-05-20T18:18:25Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The API publishing statuses.
   */
  deployedInfos?: DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfos;
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
   * The time when the API was modified. The time is displayed in UTC.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the region to which the API belongs.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The tags that are added to the APIs.
   */
  tagList?: DescribeApisResponseBodyApiSummarysApiSummaryTagList;
  /**
   * @remarks
   * Indicates whether the API is public. Valid values:
   * 
   * *   **PUBLIC**: The API is public.
   * *   **PRIVATE**: The API is private.
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMethod: 'ApiMethod',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      deployedInfos: 'DeployedInfos',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      tagList: 'TagList',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiMethod: 'string',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      deployedInfos: DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfos,
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      tagList: DescribeApisResponseBodyApiSummarysApiSummaryTagList,
      visibility: 'string',
    };
  }

  validate() {
    if(this.deployedInfos && typeof (this.deployedInfos as any).validate === 'function') {
      (this.deployedInfos as any).validate();
    }
    if(this.tagList && typeof (this.tagList as any).validate === 'function') {
      (this.tagList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBodyApiSummarys extends $dara.Model {
  apiSummary?: DescribeApisResponseBodyApiSummarysApiSummary[];
  static names(): { [key: string]: string } {
    return {
      apiSummary: 'ApiSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSummary: { 'type': 'array', 'itemType': DescribeApisResponseBodyApiSummarysApiSummary },
    };
  }

  validate() {
    if(Array.isArray(this.apiSummary)) {
      $dara.Model.validateArray(this.apiSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried API definitions.
   */
  apiSummarys?: DescribeApisResponseBodyApiSummarys;
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
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ002
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
      apiSummarys: 'ApiSummarys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSummarys: DescribeApisResponseBodyApiSummarys,
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

