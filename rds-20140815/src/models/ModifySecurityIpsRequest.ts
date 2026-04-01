// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist. By default, this parameter is empty.
   * 
   * > The IP address whitelists that have the hidden attribute are not displayed in the ApsaraDB RDS console. These IP address whitelists are used to access Alibaba Cloud services, such as Data Transmission Service (DTS).
   * 
   * @example
   * hidden
   */
  DBInstanceIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist that you want to modify. Default value: **Default**.
   * 
   * > A maximum of 200 IP address whitelists can be configured for each instance.
   * 
   * @example
   * test
   */
  DBInstanceIPArrayName?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp18n0c8zt45****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The read-only instances to which you want to synchronize the IP address whitelist.
   * 
   * *   This parameter applies only to ApsaraDB RDS for PostgreSQL instances.
   * *   If the instance is attached with a read-only instance, you can use this parameter to synchronize the IP address whitelist to the read-only instance. If the instance is attached with multiple read-only instances, separate the read-only instances with commas (,).
   * *   If the instance is not attached with a read-only instance, leave this parameter empty.
   * 
   * @example
   * pgr-bp17yuz4dn3d****,pgr-bp1vn2ph54u1****
   */
  freshWhiteListReadins?: string;
  /**
   * @remarks
   * The method that is used to modify the whitelist. Valid values:
   * 
   * *   **Cover**: Use the IP addresses and CIDR blocks that are specified in the **SecurityIps** parameter to overwrite the existing IP addresses and CIDR blocks in the IP address whitelist.
   * *   **Append**: Add the IP addresses and CIDR blocks that are specified in the **SecurityIps** parameter to the IP address whitelist.
   * *   **Delete**: Delete the IP addresses and CIDR blocks that are specified in the **SecurityIps** parameter from the IP address whitelist. You must retain at least one IP address or CIDR block.
   * 
   * Default value: **Cover**.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address type. The value is fixed as IPv4.
   * 
   * @example
   * IPv4
   */
  securityIPType?: string;
  /**
   * @remarks
   * The IP addresses in an IP address whitelist. Separate multiple IP addresses with commas (,). Each IP address in the IP address whitelist must be unique. The entries in the IP address whitelist must be in one of the following formats:
   * 
   * *   IP addresses, such as 10.23.XX.XX.
   * *   CIDR blocks, such as 10.23.XX.XX/24. In this example, 24 indicates that the prefix of each IP address in the IP address whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.
   * 
   * > A maximum of 1,000 IP addresses or CIDR blocks can be added for each instance. If you want to add a large number of IP addresses, we recommend that you merge them into CIDR blocks, such as 10.23.XX.XX/24.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.23.XX.XX
   */
  securityIps?: string;
  /**
   * @remarks
   * The network type of the IP address whitelist. Valid values:
   * 
   * *   **Classic**: classic network in enhanced whitelist mode
   * *   **VPC**: virtual private cloud (VPC) network type in enhanced whitelist mode.
   * *   **MIX**: standard whitelist mode
   * 
   * Default value: **MIX**.
   * 
   * > 
   * 
   * *   In standard whitelist mode, IP addresses and CIDR blocks are added only to the default IP address whitelist. In enhanced whitelist mode, IP addresses and CIDR blocks are added to the IP address whitelists of the classic network type and the VPC network type.
   * 
   * *   If your RDS instance runs PostgreSQL and uses cloud disks, set this parameter to MIX. If you set it to another value, the system automatically changes the value to MIX.
   * 
   * @example
   * Classic
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

