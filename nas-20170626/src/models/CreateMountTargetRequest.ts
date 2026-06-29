// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required if the file system is a General-purpose NAS or Extreme NAS file system.
   * 
   * Default permission group: DEFAULT_VPC_GROUP_NAME (the default permission group for VPCs).
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * Specifies whether to check for existing mount targets. Only CPFS file systems are supported.
   * 
   * A dry run checks parameter validity and inventory without actually creating a mount target or incurring fees.
   * 
   * - true: sends a dry run request without creating a mount target. The check items include required parameters, request format, business limits, and CPFS inventory. If the check fails, the corresponding error is returned. If the check passes, `200 HttpCode` is returned, but `MountTargetDomain` is empty.
   * - false (default): sends a normal request. After the check passes, a mount target is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to create an IPv6 mount target.
   * 
   * Valid values:
   * 
   * - true: creates an IPv6 mount target.
   * - false (default): does not create an IPv6 mount target.
   * 
   * > IPv6 is supported only by Extreme NAS file systems in all regions in the Chinese mainland. The file system must have IPv6 enabled.
   * 
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - General-purpose NAS: 31a8e4\\*\\*\\*\\*.
   * 
   * - Extreme NAS: The ID must start with `extreme-`, such as extreme-0015\\*\\*\\*\\*.
   * 
   * - Cloud Parallel File Storage (CPFS): The ID must start with `cpfs-`, such as cpfs-125487\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * 174494****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The network type of the mount target. Set the value to **Vpc**, which indicates a virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * Vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp1fg655nh68xyz9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required and valid only when the network type is VPC.
   * For example:
   * If NetworkType is set to VPC, VSwitchId is required.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required and valid only when the network type is VPC.
   * For example:
   * If NetworkType is set to VPC, VpcId is required.
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

