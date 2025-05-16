// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableFileSystemsResponseBodyFileSystemListMountTargetList extends $dara.Model {
  /**
   * @remarks
   * The address of the mount target.
   * 
   * @example
   * c0967****.cn-hangzhou.cpfs.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The network type. Valid values: Valid values:
   * 
   * *   vpc
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The state of the mount target. Valid values:
   * 
   * *   Active: The mount target is available.
   * *   Inactive: The mount target is unavailable.
   * *   Pending: The mount target is being mounted.
   * *   Deleting: The mount target is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze0c41hwu7lc29ris***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-8vbvb34rtyh6xb3zrehs1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargetDomain: 'string',
      networkType: 'string',
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

