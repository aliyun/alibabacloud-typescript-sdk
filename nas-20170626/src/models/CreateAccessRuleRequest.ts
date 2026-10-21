// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * - standard (default): General-purpose NAS.
   * - extreme: Extreme NAS.
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block.
   * 
   * CIDR blocks and IPv6 address ranges are supported.
   * 
   * > - IPv6 is supported only by Extreme NAS file systems in regions in the Chinese mainland, and IPv6 must be enabled for the file system.
   * >- Only VPC networks are supported.
   * >- IPv4 and IPv6 are mutually exclusive.
   * 
   * @example
   * 2001:250:6000::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The priority of the permission rule.
   * 
   * If an authorized address matches multiple rules, the rule with the highest priority takes effect.
   * 
   * Valid values: 1 to 100. The value 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The read and write permissions of the authorized address on the file system.
   * 
   * Valid values:
   * - RDWR (default): Read and write.
   * - RDONLY: Read-only.
   * 
   * @example
   * RDWR
   */
  RWAccessType?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the authorized address.
   * 
   * The value must be a single IP address or a CIDR block.
   * > Permission groups of the classic network type support only IP addresses.
   * 
   * @example
   * 192.0.2.0/16
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The authorization of the system user of the authorized address on the file system.
   * 
   * Valid values:
   * - no_squash (default): Allows access to the file system as the root user.
   * - root_squash: Maps the root user to the nobody user when the file system is accessed as the root user.
   * - all_squash: Maps all users to the nobody user regardless of the user identity used to access the file system.
   * 
   * The nobody user is the default user in Linux. The nobody user can access only public content on the server and has low privileges and high security.
   * 
   * @example
   * no_squash
   */
  userAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      fileSystemType: 'FileSystemType',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
      sourceCidrIp: 'SourceCidrIp',
      userAccessType: 'UserAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      fileSystemType: 'string',
      ipv6SourceCidrIp: 'string',
      priority: 'number',
      RWAccessType: 'string',
      sourceCidrIp: 'string',
      userAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

