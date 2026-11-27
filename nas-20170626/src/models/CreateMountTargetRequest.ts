// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required when the target file system is a General-purpose NAS file system or an Extreme NAS file system.
   * 
   * Default permission group: DEFAULT_VPC_GROUP_NAME (the default permission group for VPCs).
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run to check for existing mount targets. Only CPFS file systems are supported.
   * 
   * A dry run checks the validity of parameters and inventory without actually creating a mount target or incurring fees.
   * 
   * - true: Perform a dry run. No mount target is created. The system checks whether required parameters are specified, the request format, service limits, and CPFS inventory. If the dry run fails, the corresponding error is returned. If the dry run succeeds, the HTTP status code `200` is returned, but `MountTargetDomain` is empty.
   * - false: Perform a standard request. If the check succeeds, a mount target is directly created. This is the default value.
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
   * - true: Create an IPv6 mount target.
   * - false: Do not create an IPv6 mount target. This is the default value.
   * 
   * > Currently, IPv6 is supported only for Extreme NAS file systems in regions in the Chinese mainland, and the IPv6 feature must be enabled for the file system.
   * 
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - General-purpose NAS file system: 31a8e4\*\*\*\*.
   * 
   * - Extreme NAS file system: The ID must start with `extreme-`, for example, extreme-0015\*\*\*\*.
   * 
   * - Cloud Parallel File Storage (CPFS): The ID must start with `cpfs-`, for example, cpfs-125487\*\*\*\*.
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
   * This parameter is required and valid only when the network type is VPC.
   * Example:
   * When NetworkType is set to VPC, VSwitchId is required.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required and valid only when the network type is VPC.
   * Example:
   * When NetworkType is set to VPC, VpcId is required.
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

