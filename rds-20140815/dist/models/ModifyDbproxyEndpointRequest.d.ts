import * as $dara from '@darabonba/typescript';
export declare class ModifyDBProxyEndpointRequest extends $dara.Model {
    /**
     * @remarks
     * The timeout period for read consistency. Unit: milliseconds. Default value: **10**. Valid values: **0** to **60000**.
     *
     * @example
     * 10
     */
    causalConsistReadTimeout?: string;
    /**
     * @remarks
     * The proxy features to be enabled for the proxy endpoint. Separate multiple features with semicolons (;). Format: `Feature 1:Status;Feature 2:Status;...`. Do not add a semicolon (;) at the end.
     *
     * Valid values for features:
     * * **ReadWriteSpliting**: read/write splitting
     * * **ConnectionPersist**: connection pool
     * * **TransactionReadSqlRouteOptimizeStatus**: transaction splitting
     * * **AZProximityAccess**: nearest access
     * * **CausalConsistRead**: read consistency
     * * **HtapFilter**: HTAP automatic request distribution among row store and column store nodes
     *
     * Valid values for status:
     * * **1**: enabled
     * * **0**: disabled
     *
     * > - ApsaraDB RDS for PostgreSQL supports only **ReadWriteSpliting**.
     * > - The nearest access feature is supported only by dedicated database proxies for MySQL.
     *
     * @example
     * ReadWriteSpliting:1;ConnectionPersist:0
     */
    configDBProxyFeatures?: string;
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp145737x5bi6****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The ID of the proxy endpoint. You can call the DescribeDBProxyEndpoint operation to query the ID.
     *
     * > - MySQL: This parameter is required when **DbEndpointOperator** is set to **Delete** or **Modify**.
     * > - PostgreSQL: This parameter is required when **DbEndpointOperator** is set to **Delete**, **Modify**, or **Create**.
     *
     * @example
     * gos787jog2wk0y****
     */
    DBProxyEndpointId?: string;
    /**
     * @remarks
     * The database proxy engine type. This parameter is deprecated and does not need to be specified.
     *
     * @example
     * normal
     */
    DBProxyEngineType?: string;
    /**
     * @remarks
     * The description of the proxy terminal.
     *
     * @example
     * test-proxy
     */
    dbEndpointAliases?: string;
    /**
     * @remarks
     * The execution cost threshold to execute SQL in HTAP automatic request distribution among row store and column store nodes.
     *
     * @example
     * 30000
     */
    dbEndpointCostThresholdForDuckdb?: string;
    /**
     * @remarks
     * The minimum number of reserved instances.
     *
     * @example
     * 2
     */
    dbEndpointMinSlaveCount?: string;
    /**
     * @remarks
     * The operation type. Valid values:
     * * **Modify**: Modifies the proxy terminal. This is the default value.
     * * **Create**: Creates a proxy terminal.
     * * **Delete**: Deletes a proxy terminal.
     *
     * @example
     * Modify
     */
    dbEndpointOperator?: string;
    /**
     * @remarks
     * The read/write mode. Valid values:
     * * **ReadWrite**: Connects to the primary instance and accepts write requests.
     * * **ReadOnly**: Does not connect to the primary instance and cannot accept write requests. This is the default value.
     *
     * > * This parameter is required when **DbEndpointOperator** is set to **Create**.
     * > * For an ApsaraDB RDS for MySQL instance, if you change the value of this parameter from **ReadWrite** to **ReadOnly**, the transaction splitting feature is disabled.
     *
     * @example
     * ReadWrite
     */
    dbEndpointReadWriteMode?: string;
    /**
     * @remarks
     * The type of the proxy terminal. This parameter is reserved and does not need to be specified.
     *
     * @example
     * RWSplit
     */
    dbEndpointType?: string;
    /**
     * @remarks
     * The specific time when the modification takes effect. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
     * >This parameter is required when **EffectiveTime** is set to **SpecificTime**.
     *
     * @example
     * 2023-05-06T07:08:09Z
     */
    effectiveSpecificTime?: string;
    /**
     * @remarks
     * The effective period. Valid values:
     *
     * * **Immediate**: Takes effect immediately.
     * * **MaintainTime**: Takes effect within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
     * * **SpecificTime**: Takes effect at a specified time.
     *
     * Default value: **MaintainTime**.
     *
     * @example
     * MaintainTime
     */
    effectiveTime?: string;
    ownerId?: number;
    /**
     * @remarks
     * The read weight allocation pattern. Valid values:
     *
     * * **Standard**: Automatically allocates weights based on instance specifications. This is the default value.
     * * **Custom**: custom weight allocation
     *
     * > This parameter is required only when read/write splitting is enabled. For more information about the weight allocation pattern, see [Read weight allocation](https://help.aliyun.com/document_detail/96076.html) for MySQL and [Enable and configure the database proxy service](https://help.aliyun.com/document_detail/418272.html) for PostgreSQL.
     *
     * @example
     * Standard
     */
    readOnlyInstanceDistributionType?: string;
    /**
     * @remarks
     * The maximum latency threshold for read-only instances in read/write splitting. If the latency of a read-only instance exceeds this threshold, read traffic is not routed to the instance. Unit: seconds. If you do not specify this parameter, the original value is retained. Valid values: **0** to **3600**.
     *
     * > - This parameter is required only when read/write splitting is enabled.
     * > - Default value: **30** when the read/write property is set to read/write (read/write splitting), and **-1** (shutdown) when the read/write property is set to read-only.
     *
     * @example
     * 30
     */
    readOnlyInstanceMaxDelayTime?: string;
    /**
     * @remarks
     * The custom read weight distribution. You can specify the read request weights for the primary instance and read-only instances. The weight must be a multiple of 100, and the maximum value is 10000. Format:
     *
     * - Standard instance: `{"Primary instance ID":"Weight","Read-only instance ID":"Weight"...}`
     *
     *     Example: `{"rm-uf6wjk5****":"500","rr-tfhfgk5xxx":"200"...}`
     * - ApsaraDB RDS for MySQL Cluster Edition instance: `{"Read-only instance ID":"Weight","DBClusterNode":{"Primary node ID":"Weight","Secondary node ID":"Weight","Secondary node ID":"Weight"...}}`
     *
     *     Example: `{"rr-tfhfgk5****":"200","DBClusterNode":{"rn-2z****":"0","rn-2z****":"400","rn-2z****":"400"...}}`
     *     > **DBClusterNode** is a request parameter specific to Cluster Edition instances and contains the **NodeID** and **Weight** of the primary and secondary nodes.
     *
     * @example
     * {"rm-uf6wjk5****":"500","rr-tfhfgk5xxx":"200"...}
     */
    readOnlyInstanceWeight?: string;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The ID of the vSwitch in the zone of the proxy endpoint. The default value is the ID of the vSwitch associated with the default terminal of the proxy instance. You can call the DescribeVSwitches operation to query existing vSwitches.
     *
     * @example
     * vsw-uf6adz52c2p****
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The ID of the VPC in the zone of the proxy endpoint. The default value is the ID of the VPC associated with the default terminal of the proxy instance. You can call the DescribeDBInstanceAttribute operation to query the default VPC of the instance.
     *
     * @example
     * vpc-2zeusejj******
     */
    vpcId?: string;
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
