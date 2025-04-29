// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfos } from "./DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfos";
import { DescribeApisResponseBodyApiSummarysApiSummaryTagList } from "./DescribeApisResponseBodyApiSummarysApiSummaryTagList";


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

