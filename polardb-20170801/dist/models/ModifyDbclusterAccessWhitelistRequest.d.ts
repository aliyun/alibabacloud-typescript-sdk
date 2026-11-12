import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterAccessWhitelistRequest extends $dara.Model {
    /**
     * @remarks
     * The attribute of the IP address whitelist group. If this parameter is set to **hidden**, the group is invisible in the console.
     *
     * > - IP address whitelist groups that are already displayed in the console cannot be hidden.
     * > - This parameter is supported only when **WhiteListType** is set to **IP**.
     *
     * @example
     * hidden
     */
    DBClusterIPArrayAttribute?: string;
    /**
     * @remarks
     * The name of the IP address whitelist group. The name must be 2 to 120 characters in length and can contain lowercase letters and digits. It must start with a letter and end with a letter or a digit.
     *
     * - If the specified whitelist group name does not exist, the whitelist group is created.
     * - If the specified whitelist group name already exists, the whitelist group is modified.
     * - If this parameter is not specified, the default group is modified.
     *
     * > - A cluster supports a maximum of 50 IP address whitelist groups.
     * > - This parameter is supported only when **WhiteListType** is set to **IP**.
     *
     * @example
     * default
     */
    DBClusterIPArrayName?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The modification mode of the IP address whitelist. Valid values:
     * - **Cover**: Overwrites the original IP address whitelist. This is the default value.
     * - **Append**: Appends IP addresses to the IP address whitelist.
     * - **Delete**: Deletes IP addresses from the IP address whitelist.
     *
     * > This parameter is supported only when **WhiteListType** is set to **IP**.
     *
     * @example
     * Cover
     */
    modifyMode?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The file system instance ID.
     *
     * @example
     * pfs-xxx
     */
    pfsInstanceId?: string;
    /**
     * @remarks
     * The unique identifier of the project.
     *
     * @example
     * proj-xxxxxxxxxxxxxxxxxxxxxxxxxx
     */
    projectId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The security group IDs. Separate multiple security group IDs with commas (,).
     *
     * > - A cluster supports a maximum of three security groups.
     * > - This parameter is supported only when **WhiteListType** is set to **SecurityGroup**.
     *
     * @example
     * sg-*********
     */
    securityGroupIds?: string;
    /**
     * @remarks
     * The IP addresses or CIDR blocks in the IP address whitelist group. A maximum of 1,000 IP addresses or CIDR blocks can be added across all IP address whitelist groups. Separate multiple IP addresses or CIDR blocks with commas (,). The following two formats are supported:
     *
     * - IP address format, such as 10.23.12.24.
     * - CIDR format, such as 10.23.12.24/24. In Classless Inter-Domain Routing (CIDR), 24 indicates the length of the prefix in the IP address. The prefix length ranges from 1 to 32.
     *
     * > This parameter is supported only when **WhiteListType** is set to **IP**.
     *
     * @example
     * 10.23.12.24
     */
    securityIps?: string;
    /**
     * @remarks
     * The whitelist type. Valid values:
     *
     * - **IP**: IP address whitelist group.
     * - **SecurityGroup**: Security group.
     * - **ProjectIP**: ProjectIP whitelist group.
     *
     * Default value: **IP**.
     *
     * @example
     * IP
     */
    whiteListType?: string;
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
