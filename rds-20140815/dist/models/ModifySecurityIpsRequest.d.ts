import * as $dara from '@darabonba/typescript';
export declare class ModifySecurityIpsRequestGroupItems extends $dara.Model {
    /**
     * @remarks
     * The name of the whitelist group. This parameter is required in batch mode and must be unique within the same GroupItems list.
     *
     * @example
     * default
     */
    groupName?: string;
    /**
     * @remarks
     * The attribute of the whitelist group. If you set this parameter to hidden, the group is a system-generated group used by services such as DMS, DTS, and DAS. These groups are not displayed in the console. Proceed with caution. Generally, you do not need to specify this parameter. You must specify at least one of this parameter and SecurityIPList.
     *
     * @example
     * hidden
     */
    groupTag?: string;
    /**
     * @remarks
     * The modified IP address whitelist of the group. Separate multiple IP addresses with commas (,). You must specify at least one of this parameter and GroupTag.
     *
     * @example
     * 10.23.XX.XX,10.24.XX.XX
     */
    securityIPList?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ModifySecurityIpsRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable the batch modification mode. Valid values:
     *
     * true: batch mode. Modifies multiple whitelist groups at a time based on the GroupItems parameter. In this case, the single-group parameters such as SecurityIps, DBInstanceIPArrayName, and DBInstanceIPArrayAttribute do not take effect.
     *
     * false: single-group mode. Modifies a single whitelist group based on parameters such as SecurityIps. This is the default value.
     *
     * @example
     * false
     */
    batchMode?: boolean;
    /**
     * @remarks
     * The attribute of the IP whitelist group.
     *
     * - If you do not specify this parameter, the group is a regular group. This is the default value.
     * - If you set this parameter to `hidden`, the group is a system-generated group used by services such as DMS, DTS, and DAS. These groups are not displayed in the console. Deleting or modifying these groups causes services such as DMS, DTS, and DAS to fail to access the ApsaraDB RDS instance. Proceed with caution.
     *
     * @example
     * hidden
     */
    DBInstanceIPArrayAttribute?: string;
    /**
     * @remarks
     * The name of the IP whitelist group to be modified. Default value: Default. If the specified group does not exist, the system automatically creates the group.
     *
     * > A single instance supports up to 200 IP whitelist groups.
     *
     * @example
     * test
     */
    DBInstanceIPArrayName?: string;
    /**
     * @remarks
     * The instance ID of the target instance.
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
     * - This parameter applies only to ApsaraDB RDS for PostgreSQL instances for which read-only instances are created.
     * - If multiple read-only instances exist, separate their IDs with commas (,).
     *
     * @example
     * pgr-bp17yuz4dn3d****,pgr-bp1vn2ph54u1****
     */
    freshWhiteListReadins?: string;
    /**
     * @remarks
     * The details of the whitelist groups. This parameter is required when BatchMode is set to true. In each group, GroupName is required and must be unique. You must specify at least one of SecurityIPList and GroupTag.
     *
     * @example
     * [{"GroupName":"default","SecurityIPList":"127.0.0.1"},{"GroupName":"test","SecurityIPList":"10.23.XX.XX,10.24.XX.XX"}]
     */
    groupItems?: ModifySecurityIpsRequestGroupItems[];
    /**
     * @remarks
     * The modification mode. Valid values:
     * * **Cover**: overwrites the original IP whitelist with the value of the **SecurityIps** parameter. This is the default value.
     * * **Append**: appends the IP addresses specified in the **SecurityIps** parameter to the original IP whitelist.
     * * **Delete**: deletes the IP addresses specified in the **SecurityIps** parameter from the original IP whitelist. You must retain at least one IP address.
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
     * The IP whitelist. Before you modify the IP whitelist, call the [DescribeDBInstanceIPArrayList](https://help.aliyun.com/document_detail/610518.html) operation to query the existing IP whitelist of the instance.
     *
     * <details>
     * <summary>Configuration rules</summary>
     *
     * - IP addresses (such as 10.23.XX.XX) and CIDR blocks (such as 10.23.XX.XX/24) are supported.
     *
     * - Separate multiple IP addresses or CIDR blocks with commas (,). Do not add spaces before or after the commas.
     *
     * - You can add up to 1,000 IP addresses or CIDR blocks to a single instance. If you have a large number of IP addresses, we recommend that you merge scattered IP addresses into CIDR blocks, such as 10.23.XX.XX/24.
     * </details>
     *
     * @example
     * 10.23.XX.XX
     */
    securityIps?: string;
    /**
     * @remarks
     * The network type of the whitelist. Valid values:
     *
     * * **MIX**: general mode. This is the default value.
     * * **Classic**: classic network in enhanced whitelist mode.
     * * **VPC**: VPC in enhanced whitelist mode.
     *
     * > * For ApsaraDB RDS for PostgreSQL instances with cloud disks, the network type is fixed to MIX. If you configure another mode, the system automatically converts it to MIX.
     * > * The enhanced whitelist mode is supported only by ApsaraDB RDS for MySQL 5.1, 5.5, 5.6, and 5.7 instances with premium local SSDs, and ApsaraDB RDS for PostgreSQL 9.4 and 10 instances with premium local SSDs.
     *
     * @example
     * MIX
     */
    whitelistNetworkType?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
