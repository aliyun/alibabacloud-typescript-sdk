// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProtocolMountTargetResponseBodyProtocolMountTargets extends $dara.Model {
  /**
   * @remarks
   * The permission group that is associated with the export directory of the protocol service.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The time when the export directory of the protocol service was created.
   * 
   * @example
   * 2018-12-12T07:28:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the export directory for the protocol service.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the export directory for the protocol service.
   * 
   * @example
   * exp-19abf5beab8d****
   */
  exportId?: string;
  /**
   * @remarks
   * The fileset ID of the export directory for the protocol service.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The export directory of the protocol service.
   * 
   * @example
   * /path/
   */
  path?: string;
  /**
   * @remarks
   * The domain name of the export directory for the protocol service.
   * 
   * @example
   * cpfs-123****.cn-hangzhou.cpfs.aliyuncs.com
   */
  protocolMountTargetDomain?: string;
  /**
   * @remarks
   * The ID of the protocol service.
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
   * The status of the mount target.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID of the export directory for the protocol service.
   * 
   * @example
   * vsw-2vc3c2lybvdllxyq4****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID of the export directory for the protocol service.
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
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

