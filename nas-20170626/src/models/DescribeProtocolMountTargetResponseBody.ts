// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProtocolMountTargetResponseBodyProtocolMountTargets extends $dara.Model {
  /**
   * @remarks
   * The permission group associated with the protocol service export directory.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The time when the protocol service export directory was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2018-12-12T07:28:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the protocol service export directory.
   * 
   * @example
   * 此协议服务导出目录的描述。
   */
  description?: string;
  /**
   * @remarks
   * The ID of the protocol service export directory.
   * 
   * @example
   * exp-19abf5beab8d****
   */
  exportId?: string;
  /**
   * @remarks
   * The fileset ID of the protocol service export directory.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The exported directory of the protocol service.
   * 
   * @example
   * /path/
   */
  path?: string;
  /**
   * @remarks
   * The domain name of the protocol service export directory.
   * 
   * @example
   * cpfs-123****.cn-hangzhou.cpfs.aliyuncs.com
   */
  protocolMountTargetDomain?: string;
  /**
   * @remarks
   * The protocol service ID.
   * 
   * @example
   * ptc-123****
   */
  protocolServiceId?: string;
  /**
   * @remarks
   * The protocol type supported by the protocol service.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The mount target status.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID of the protocol service export directory.
   * 
   * @example
   * vsw-2vc3c2lybvdllxyq4****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The list of zone-redundant vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID of the protocol service export directory.
   * 
   * @example
   * vpc-2vct297b8157bth9z****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      createTime: 'CreateTime',
      description: 'Description',
      exportId: 'ExportId',
      fsetId: 'FsetId',
      path: 'Path',
      protocolMountTargetDomain: 'ProtocolMountTargetDomain',
      protocolServiceId: 'ProtocolServiceId',
      protocolType: 'ProtocolType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      createTime: 'string',
      description: 'string',
      exportId: 'string',
      fsetId: 'string',
      path: 'string',
      protocolMountTargetDomain: 'string',
      protocolServiceId: 'string',
      protocolType: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The marker used to retrieve the remaining export directories in subsequent queries.
   * 
   * @example
   * aBcdeg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The collection of protocol service export directories.
   */
  protocolMountTargets?: DescribeProtocolMountTargetResponseBodyProtocolMountTargets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      protocolMountTargets: 'ProtocolMountTargets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      protocolMountTargets: { 'type': 'array', 'itemType': DescribeProtocolMountTargetResponseBodyProtocolMountTargets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protocolMountTargets)) {
      $dara.Model.validateArray(this.protocolMountTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

