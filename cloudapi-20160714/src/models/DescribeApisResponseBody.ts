// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo extends $dara.Model {
  deployedStatus?: string;
  effectiveVersion?: string;
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
  tagKey?: string;
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
  apiId?: string;
  apiMethod?: string;
  apiName?: string;
  apiPath?: string;
  createdTime?: string;
  deployedInfos?: DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfos;
  description?: string;
  groupId?: string;
  groupName?: string;
  modifiedTime?: string;
  regionId?: string;
  tagList?: DescribeApisResponseBodyApiSummarysApiSummaryTagList;
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

