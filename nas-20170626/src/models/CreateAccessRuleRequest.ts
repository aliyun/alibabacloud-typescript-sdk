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
   * *   standard (default): General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The IPv6 address or CIDR block of the authorized object.
   * 
   * You must set this parameter to an IPv6 address or CIDR block.
   * 
   * > *   Only Extreme NAS file systems that reside in the Chinese mainland support IPv6. If you specify this parameter, you must enable IPv6 for the file system.
   * >*   Only permission groups that reside in virtual private clouds (VPCs) support IPv6.
   * >*   You cannot specify an IPv4 address and an IPv6 address at the same time.
   * 
   * @example
   * 2001:250:6000::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The priority of the rule.
   * 
   * The rule with the highest priority takes effect if multiple rules are attached to the authorized object.
   * 
   * Valid values: 1 to 100. The value 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The access permissions of the authorized object on the file system.
   * 
   * Valid values:
   * 
   * *   RDWR (default): the read and write permissions
   * *   RDONLY: the read-only permissions
   * 
   * @example
   * RDWR
   */
  RWAccessType?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the authorized object.
   * 
   * You must set this parameter to an IP address or CIDR block.
   * 
   * > If the permission group resides in the classic network, you must set this parameter to an IP address.
   * 
   * @example
   * 192.0.2.0/16
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The access permissions for different types of users in the authorized object.
   * 
   * Valid values:
   * 
   * *   no_squash (default): grants root users the permissions to access the file system.
   * *   root_squash: grants root users the least permissions as the nobody user.
   * *   all_squash: grants all users the least permissions as the nobody user.
   * 
   * The nobody user has the least permissions in Linux and can access only the public content of the file system. This ensures the security of the file system.
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

