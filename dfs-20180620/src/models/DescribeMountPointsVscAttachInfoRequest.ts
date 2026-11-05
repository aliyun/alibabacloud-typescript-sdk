// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMountPointsVscAttachInfoRequestQueryInfos extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the ECS instance on which the HDFS file system is mounted.
   * 
   * @example
   * i-2zehyz70ednszl6rrfj6
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
   * The ID of the VSC on which the HDFS file system is mounted. You must specify either InstanceId or VscId, but not both.
   * 
   * @example
   * vsc-bp19yqmujug2r18z0h9qal
   */
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mountPointId: 'MountPointId',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mountPointId: 'string',
      vscId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMountPointsVscAttachInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The region where the file system resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
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
   * MYR6sz6qkmauspAy8oxjHP-tOLtD4KSv3DzI7G6iywTx1ZCExO50GtSuiTB9z0JppvYQ2iUa8s4HbcFanMQfDIlds4da87_Ax4UJMva****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of query information.
   */
  queryInfos?: DescribeMountPointsVscAttachInfoRequestQueryInfos[];
  /**
   * @remarks
   * Specifies whether to use the assumed role to check the permissions of the compute node. Valid values:
   * 
   * - true: Yes.
   * - false (default): No.
   * 
   * @example
   * false
   */
  useAssumeRoleChkServerPerm?: boolean;
  static names(): { [key: string]: string } {
    return {
      inputRegionId: 'InputRegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queryInfos: 'QueryInfos',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRegionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queryInfos: { 'type': 'array', 'itemType': DescribeMountPointsVscAttachInfoRequestQueryInfos },
      useAssumeRoleChkServerPerm: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.queryInfos)) {
      $dara.Model.validateArray(this.queryInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

