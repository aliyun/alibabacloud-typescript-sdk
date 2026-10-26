// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the whitelist group.
   * 
   * - If you do not specify this parameter, the group is a regular group. This is the default value.
   * - If you set this parameter to `hidden`, the group is a hidden group that is automatically created by the system for services such as DMS, DTS, and DAS. Hidden groups are not displayed in the console. If you delete or modify a hidden group, services such as DMS, DTS, and DAS cannot access the ApsaraDB RDS instance. Proceed with caution.
   * 
   * @example
   * hidden
   */
  DBInstanceIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist group to be modified. Default value: Default. If the specified group does not exist, the system automatically creates the group.
   * 
   * >You can create up to 200 whitelist groups for a single instance.
   * 
   * @example
   * test
   */
  DBInstanceIPArrayName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp18n0c8zt45****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The read-only instances to which the whitelist is synchronized.
   * 
   * - This parameter is applicable only to ApsaraDB RDS for PostgreSQL instances that have read-only instances.
   * - If multiple read-only instances exist, separate their IDs with commas (,).
   * 
   * @example
   * pgr-bp17yuz4dn3d****,pgr-bp1vn2ph54u1****
   */
  freshWhiteListReadins?: string;
  /**
   * @remarks
   * The modification mode. Valid values:
   * * **Cover**: overwrites the original IP address whitelist with the IP addresses specified by the **SecurityIps** parameter. This is the default value.
   * * **Append**: appends the IP addresses specified by the **SecurityIps** parameter to the original IP address whitelist.
   * * **Delete**: deletes the IP addresses specified by the **SecurityIps** parameter from the original IP address whitelist. You must retain at least one IP address in the whitelist.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the IP address. Set the value to IPv4. IPv6 is not supported.
   * 
   * @example
   * IPv4
   */
  securityIPType?: string;
  /**
   * @remarks
   * The IP address whitelist. Before you modify the IP address whitelist, call the [DescribeDBInstanceIPArrayList](https://help.aliyun.com/document_detail/610518.html) operation to query the existing IP address whitelist of the instance.
   * 
   * <details>
   * <summary>Configuration rules</summary>
   * 
   * - You can enter IP addresses (such as 10.23.XX.XX) or CIDR blocks (such as 10.23.XX.XX/24).
   * 
   * - Separate multiple IP addresses or CIDR blocks with commas (,). Do not add spaces before or after the commas.
   * 
   * - You can add up to 1,000 IP addresses or CIDR blocks to the whitelist of a single instance. If you have a large number of IP addresses, we recommend that you merge them into CIDR blocks, such as 10.23.XX.XX/24.
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
   * * **MIX**: the general mode. This is the default value.
   * * **Classic**: the classic network in the enhanced whitelist mode.
   * * **VPC**: the VPC in the enhanced whitelist mode.
   * 
   * > * For ApsaraDB RDS for PostgreSQL instances with cloud disks, the network type is fixed to the general mode (MIX). If you configure another mode, the system automatically changes it to the general mode.
   * > * The enhanced whitelist mode is supported only by ApsaraDB RDS for MySQL 5.1, 5.5, 5.6, and 5.7 instances with premium local SSDs, and ApsaraDB RDS for PostgreSQL 9.4 and 10 instances with premium local SSDs.
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

