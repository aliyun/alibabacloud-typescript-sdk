// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountPointsVscAttachInfoResponseBodyAttachInfos extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the ECS instance on which the HDFS file system is mounted.
   * 
   * @example
   * vsc-agent-f5a9bb4b041541f595a0c239c9e0f971-cn-shanghai
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the mount point.
   * 
   * @example
   * f-9dd3c6bajmy110.cn-zhangjiakou.dfs.aliyuncs.com
   */
  mountPointId?: string;
  /**
   * @remarks
   * The ID of the VSC on which the HDFS file system is mounted.
   * 
   * @example
   * vsc-bp18fhqie89loyqixyieal
   */
  vscId?: string;
  /**
   * @remarks
   * The custom name of the VSC.
   * 
   * @example
   * cxc
   */
  vscName?: string;
  /**
   * @remarks
   * The mount status of the VSC.
   * 
   * @example
   * - NORMAL: Mounted successfully.
   * - CREATING: Mounting.
   * - INVALID: Mount failed
   */
  vscStatus?: string;
  /**
   * @remarks
   * The type of the VSC. Valid values: 
   *  
   * - Primary (default): the default reserved VSC on the ECS instance. 
   * - Secondary: a reusable VSC on the ECS instance.
   * 
   * @example
   * Primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mountPointId: 'MountPointId',
      vscId: 'VscId',
      vscName: 'VscName',
      vscStatus: 'VscStatus',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mountPointId: 'string',
      vscId: 'string',
      vscName: 'string',
      vscStatus: 'string',
      vscType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountPointsVscAttachInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of mount information.
   */
  attachInfos?: DescribeMountPointsVscAttachInfoResponseBodyAttachInfos[];
  /**
   * @remarks
   * The maximum number of entries to return per page during paging in a paged query. Maximum value: 100. Default value: 10. If you do not specify a value in the Settings or the value in the Settings is less than 10, the default value 10 is used. If the value in the Settings is greater than 100, the default value 100 is used.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If a query does not return all results, a non-empty NextToken is returned. You can use the returned NextToken in a subsequent query to retrieve the remaining results.
   * 
   * @example
   * asd0daj****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of mount points.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      attachInfos: 'AttachInfos',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInfos: { 'type': 'array', 'itemType': DescribeMountPointsVscAttachInfoResponseBodyAttachInfos },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachInfos)) {
      $dara.Model.validateArray(this.attachInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

