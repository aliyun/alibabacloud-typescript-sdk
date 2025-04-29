// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisByIpControlResponseBodyApiInfosApiInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 3b81fd160f5645e097cc8855d75a1cf6
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API
   * 
   * @example
   * testapi
   */
  apiName?: string;
  /**
   * @remarks
   * The time of API binding.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  boundTime?: string;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 0009db9c828549768a200320714b8930
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * mygroup
   */
  groupName?: string;
  /**
   * @remarks
   * The region in which the API is located.
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
   * *   **TEST.
   * 
   * @example
   * TEST
   */
  stageName?: string;
  /**
   * @remarks
   * The visibility of the API. Valid values:
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
      apiName: 'ApiName',
      boundTime: 'BoundTime',
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
      apiName: 'string',
      boundTime: 'string',
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

