import * as $dara from '@darabonba/typescript';
export declare class ModifyDBProxyRequestDBProxyNodes extends $dara.Model {
    /**
     * @remarks
     * The number of CPU cores for the node. Valid values: **1** to **16**.
     * > This parameter is required when you specify **DBProxyNodes**.
     *
     * @example
     * 1
     */
    cpuCores?: string;
    /**
     * @remarks
     * The number of proxy nodes in the zone. Valid values: **1** to **2**.
     * > This parameter is required when you specify **DBProxyNodes**.
     *
     * @example
     * 2
     */
    nodeCounts?: string;
    /**
     * @remarks
     * The zone ID of the node.
     * > This parameter is required when you specify **DBProxyNodes**.
     *
     * @example
     * cn-hangzhou-c
     */
    zoneId?: string;
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
export declare class ModifyDBProxyRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable or disable the database proxy. Valid values:
     *
     * * **Startup**: enables the proxy service.
     * * **Shutdown**: disables the proxy service.
     * * **Modify**: modifies the proxy service.
     *
     * This parameter is required.
     *
     * @example
     * Startup
     */
    configDBProxyService?: string;
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * **[Deprecated]** This parameter is deprecated and does not need to be configured.
     *
     * @example
     * normal
     */
    DBProxyEngineType?: string;
    /**
     * @remarks
     * The number of proxy instances to enable. Valid values: **1** to **16**. Default value: **1**.
     *
     * > More proxy instances can process more requests. You can check the load of proxy instances based on monitoring data and specify an appropriate number of proxy instances.
     *
     * @example
     * 1
     */
    DBProxyInstanceNum?: string;
    /**
     * @remarks
     * The type of the database proxy instance. Valid values:
     * - **common**: general-purpose database proxy
     * - **exclusive**: dedicated proxy (default)
     *
     * @example
     * exclusive
     */
    DBProxyInstanceType?: string;
    /**
     * @remarks
     * The proxy nodes.
     */
    DBProxyNodes?: ModifyDBProxyRequestDBProxyNodes[];
    /**
     * @remarks
     * The network type of the instance. Only VPC is supported. Valid value: **VPC**.
     *
     * > This parameter is required when you enable the database proxy.
     *
     * @example
     * VPC
     */
    instanceNetworkType?: string;
    ownerId?: number;
    /**
     * @remarks
     * Specifies whether to enable connection keep-alive. Valid values:
     * - **Enabled**: enables connection keep-alive.
     * - **Disabled**: disables connection keep-alive.
     *
     * > - This parameter is supported only for ApsaraDB RDS for MySQL.
     * > - When you modify the connection keep-alive status, set **ConfigDBProxyService** to **Modify**.
     *
     * @example
     * Disabled
     */
    persistentConnectionStatus?: string;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The ID of the VPC to which the instance belongs. You can call the DescribeDBInstanceAttribute operation to query the VPC ID.
     *
     * > This parameter is required when you enable the database proxy.
     *
     * @example
     * vpc-****
     */
    VPCId?: string;
    /**
     * @remarks
     * The ID of the vSwitch to which the instance belongs. You can call the DescribeDBInstanceAttribute operation to query the vSwitch ID.
     *
     * > This parameter is required when you enable the database proxy.
     *
     * @example
     * vsw-****
     */
    vSwitchId?: string;
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
