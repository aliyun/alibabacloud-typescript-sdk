// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoriesResponseBodyApiHisItemsApiHisItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 5af418828f0344a3b588c0cc1331a3bc
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * CreateObject
   */
  apiName?: string;
  /**
   * @remarks
   * The publishing time (UTC) of the API.
   * 
   * @example
   * 2016-07-20T08:28:48Z
   */
  deployedTime?: string;
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * Creates an object
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 1084f9034c744137901057206b39d2b6
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * myGroup2
   */
  groupName?: string;
  /**
   * @remarks
   * The historical version of the API.
   * 
   * @example
   * 20160705104552393
   */
  historyVersion?: string;
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
   * *   **TEST**
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * Indicates whether an API version is effective. Valid values: **ONLINE** and **OFFLINE**.
   * 
   * @example
   * ONLINE
   */
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

