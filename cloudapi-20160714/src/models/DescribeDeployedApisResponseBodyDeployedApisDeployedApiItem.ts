// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * c076144d7878437b8f82fb85890ce6a0
   */
  apiId?: string;
  /**
   * @remarks
   * The HTTP method of the API request.
   * 
   * @example
   * POST
   */
  apiMethod?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * DescribeObjects
   */
  apiName?: string;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /trademark/search
   */
  apiPath?: string;
  /**
   * @remarks
   * The publising time (UTC) of the API.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  deployedTime?: string;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * Queries objects by pages
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 63be9002440b4778a61122f14c2b2bbb
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group to which the API belongs.
   * 
   * @example
   * myGroup3
   */
  groupName?: string;
  /**
   * @remarks
   * The region where the API is located.
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
   * Indicates whether the API is public. Valid values:
   * 
   * *   **PUBLIC**
   * *   **PRIVATE**
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

