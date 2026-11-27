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
   * - standard: General-purpose NAS. This is the default value.
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
   * > - Only Extreme NAS file systems in regions in the Chinese mainland support IPv6, and the IPv6 feature must be enabled for the file system.
   * > - Only VPCs are supported.
   * > - IPv4 and IPv6 are mutually exclusive.
   * 
   * @example
   * 2001:250:6000::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The priority of the permission group rule.
   * 
   * If an authorized object matches multiple rules, the rule with the highest priority takes effect.
   * 
   * Valid values: 1 to 100. The value 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The read and write permissions of the authorized object on the file system.
   * 
   * Valid values:
   * - RDWR: read and write. This is the default value.
   * - RDONLY: read-only.
   * 
   * @example
   * RDWR
   */
  RWAccessType?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the authorized object.
   * 
   * The format must be a single IP address or a CIDR block.
   * > Permission groups of the classic network type support only IP addresses.
   * 
   * @example
   * 192.0.2.0/16
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The access permissions of system users of the authorization object on the file system.
   * 
   * Valid values:
   * - no_squash: allows access to the file system by using the root user. This is the default value.
   * - root_squash: maps the root user to the nobody user when the file system is accessed as the root user.
   * - all_squash: maps all users to the nobody user regardless of the user identity used to access the file system.
   * 
   * The nobody user is the default user in Linux systems. This user can only access public content on the server and features low permissions and high security.
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

