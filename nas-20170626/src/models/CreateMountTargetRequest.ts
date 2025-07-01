// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required if you create a mount target for a General-purpose NAS file system or an Extreme NAS file system.
   * 
   * The default permission group for virtual private clouds (VPCs) is named DEFAULT_VPC_GROUP_NAME.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run to check for existing mount targets. This parameter is valid only for CPFS file systems.
   * 
   * If you set this parameter to true, the system checks whether the request parameters are valid and whether the requested resources are available. In this case, no mount target is created and no fee is incurred.
   * 
   * *   true: performs a dry run but does not create a mount target. In the dry run, the system checks the request format, service limits, available CPFS resources, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code `200` is returned. No value is returned for the `MountTargetDomain` parameter.
   * *   false (default): sends the request. If the request passes the dry run, a mount target is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to create an IPv6 domain name for the mount target.
   * 
   * Valid values:
   * 
   * *   true: An IPv6 domain name is created for the mount target.
   * *   false (default): No IPv6 domain name is created for the mount target.
   * 
   * > Only Extreme NAS file systems that reside in the Chinese mainland support IPv6. If you want to create an IPv6 domain name for the mount target, you must enable IPv6 for the file system.
   * 
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   Sample ID of a General-purpose NAS file system: 31a8e4\\*\\*\\*\\*.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * *   The IDs of Cloud Parallel File Storage (CPFS) file systems must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 174494****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The network type of the mount target. Valid value: **Vpc**.
   * 
   * This parameter is required.
   * 
   * @example
   * Vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1fg655nh68xyz9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is valid and required if the mount target resides in a VPC. Example: If you set the NetworkType parameter to VPC, you must specify the VSwitchId parameter.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is valid and required if the mount target resides in a VPC. Example: If you set the NetworkType parameter to VPC, you must specify the VpcId parameter.
   * 
   * @example
   * vpc-2zesj9afh3y518k9o****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      dryRun: 'DryRun',
      enableIpv6: 'EnableIpv6',
      fileSystemId: 'FileSystemId',
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      dryRun: 'boolean',
      enableIpv6: 'boolean',
      fileSystemId: 'string',
      networkType: 'string',
      securityGroupId: 'string',
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

