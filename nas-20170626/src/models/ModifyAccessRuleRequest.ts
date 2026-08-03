// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessRuleRequest extends $dara.Model {
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
   * The ID of the permission rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  accessRuleId?: string;
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
   * IPv6 addresses and CIDR blocks are supported.
   * 
   * > - Only Extreme NAS file systems in the China (Hohhot) region support IPv6 CIDR blocks.
   * > - Only VPCs are supported.
   * > - IPv4 and IPv6 are mutually exclusive. You cannot convert between the two types.
   * > - You must specify either SourceCidrIp or Ipv6SourceCidrIp. You cannot leave both parameters empty, and you cannot specify both parameters at the same time.
   * 
   * @example
   * fe80::3d4a:80fd:f05d:****
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The priority of the permission rule.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 1 (highest priority).
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The read and write permission that the authorized object has on the file system.
   * 
   * Valid values:
   * 
   * - RDWR (default): read and write.
   * - RDONLY: read-only.
   * 
   * @example
   * RDWR
   */
  RWAccessType?: string;
  /**
   * @remarks
   * The IP address or CIDR block.
   * 
   * The value must be a single IP address or a CIDR block.
   * 
   * > You must specify either SourceCidrIp or Ipv6SourceCidrIp. You cannot leave both parameters empty, and you cannot specify both parameters at the same time.
   * 
   * @example
   * ``192.0.**.**``
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The access permissions that the system user of the authorization object has on the file system.
   * 
   * Valid values:
   * 
   * - no_squash: allows access to the file system as the root user.
   * - root_squash: maps the root user to the nobody user when the root user accesses the file system.
   * - all_squash: maps all users to the nobody user regardless of the user identity used to access the file system.
   * 
   * The nobody user is a default user in Linux. This user can access only public content on the server and has low privileges and high security.
   * 
   * @example
   * all_squash
   */
  userAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessRuleId: 'AccessRuleId',
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
      accessRuleId: 'string',
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

