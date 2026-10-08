// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the whitelist group.
   * 
   * - (Default) If you do not specify this parameter, the group is a common group.
   * - If you set this parameter to `hidden`, the group is a system default group used by services such as DMS, DTS, and DAS. These groups are not displayed in the console. Deleting or modifying these groups may prevent DMS, DTS, and DAS from accessing ApsaraDB RDS. Proceed with caution.
   * 
   * @example
   * hidden
   */
  DBInstanceIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the whitelist group to modify. Default value: Default. If the specified group does not exist, a new group is automatically created.
   * 
   * >Each instance supports up to 200 whitelist groups.
   * 
   * @example
   * test
   */
  DBInstanceIPArrayName?: string;
  /**
   * @remarks
   * The target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp18n0c8zt45****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of read-only instances to which the whitelist is synchronized.
   * 
   * - This parameter is applicable only to ApsaraDB RDS for PostgreSQL instances that have read-only instances.
   * - Separate multiple read-only instances with commas (,).
   * 
   * @example
   * pgr-bp17yuz4dn3d****,pgr-bp1vn2ph54u1****
   */
  freshWhiteListReadins?: string;
  /**
   * @remarks
   * The modification mode. Valid values:
   * * **Cover** (default): overwrites the original IP whitelist with the value of the **SecurityIps** parameter.
   * * **Append**: appends the IP addresses specified in the **SecurityIps** parameter to the original IP whitelist.
   * * **Delete**: removes the IP addresses specified in the **SecurityIps** parameter from the original IP whitelist. At least one IP address must be retained.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of IP address. The value is fixed as IPv4. IPv6 is not supported.
   * 
   * @example
   * IPv4
   */
  securityIPType?: string;
  /**
   * @remarks
   * The IP whitelist. Before you modify the IP whitelist, call the [DescribeDBInstanceIPArrayList](https://help.aliyun.com/document_detail/610518.html) operation to query the existing IP whitelist information of the instance.
   * 
   * <details>
   * <summary>Configuration rules</summary>
   * 
   * - IP addresses (such as 10.23.XX.XX) and CIDR blocks (such as 10.23.XX.XX/24) are supported.
   * 
   * - Separate multiple IP addresses or CIDR blocks with commas (,). No spaces are allowed before or after the commas.
   * 
   * - Each instance can contain up to 1,000 IP addresses or CIDR blocks. If you have a large number of IP addresses, merge them into CIDR blocks, such as 10.23.XX.XX/24.
   * </details>
   * 
   * This parameter is required.
   * 
   * @example
   * 10.23.XX.XX
   */
  securityIps?: string;
  /**
   * @remarks
   * The network type of the whitelist. Valid values:
   * 
   * * **MIX** (default): general mode.
   * * **Classic**: the classic network in enhanced whitelist mode.
   * * **VPC**: the virtual private cloud (VPC) in enhanced whitelist mode.
   * 
   * > * ApsaraDB RDS for PostgreSQL instances with cloud disks use only the general mode (MIX). If you set this parameter to another mode, the value is automatically converted to MIX.
   * > * Only ApsaraDB RDS for MySQL 5.1, 5.5, 5.6, and 5.7 instances with Premium Local SSDs and ApsaraDB RDS for PostgreSQL 9.4 and 10 instances with Premium Local SSDs support the enhanced whitelist mode.
   * 
   * @example
   * MIX
   */
  whitelistNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      DBInstanceId: 'DBInstanceId',
      freshWhiteListReadins: 'FreshWhiteListReadins',
      modifyMode: 'ModifyMode',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPType: 'SecurityIPType',
      securityIps: 'SecurityIps',
      whitelistNetworkType: 'WhitelistNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayAttribute: 'string',
      DBInstanceIPArrayName: 'string',
      DBInstanceId: 'string',
      freshWhiteListReadins: 'string',
      modifyMode: 'string',
      resourceOwnerId: 'number',
      securityIPType: 'string',
      securityIps: 'string',
      whitelistNetworkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

