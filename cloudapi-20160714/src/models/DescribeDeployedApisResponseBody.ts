// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem extends $dara.Model {
  apiId?: string;
  apiMethod?: string;
  apiName?: string;
  apiPath?: string;
  deployedTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  regionId?: string;
  stageName?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMethod: 'ApiMethod',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      deployedTime: 'DeployedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiMethod: 'string',
      apiName: 'string',
      apiPath: 'string',
      deployedTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      stageName: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApisResponseBodyDeployedApis extends $dara.Model {
  deployedApiItem?: DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem[];
  static names(): { [key: string]: string } {
    return {
      deployedApiItem: 'DeployedApiItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedApiItem: { 'type': 'array', 'itemType': DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem },
    };
  }

  validate() {
    if(Array.isArray(this.deployedApiItem)) {
      $dara.Model.validateArray(this.deployedApiItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployedApisResponseBody extends $dara.Model {
  deployedApis?: DescribeDeployedApisResponseBodyDeployedApis;
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ002
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
      deployedApis: 'DeployedApis',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedApis: DescribeDeployedApisResponseBodyDeployedApis,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.deployedApis && typeof (this.deployedApis as any).validate === 'function') {
      (this.deployedApis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

