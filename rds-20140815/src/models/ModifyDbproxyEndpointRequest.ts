// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The timeout period for read consistency. Unit: milliseconds. Default value: **10**. Valid values: **0 to 60000**.
   * 
   * @example
   * 10
   */
  causalConsistReadTimeout?: string;
  /**
   * @remarks
   * The proxy features that you want to enable for the proxy endpoint. Separate multiple features with semicolons (;). Format: `Feature 1:Status;Feature 2:Status;...`. Do not add a semicolon (;) at the end.
   * 
   * Valid values for features:
   * * **ReadWriteSpliting**: Read/write splitting.
   * * **ConnectionPersist**: Connection pool.
   * * **TransactionReadSqlRouteOptimizeStatus**: Transaction splitting.
   * * **AZProximityAccess**: Nearest access.
   * * **CausalConsistRead**: Read consistency.
   * * **HtapFilter**: HTAP automatic request distribution among row store and column store nodes.
   * 
   * Valid values for status:
   * * **1**: Enabled.
   * * **0**: Disabled.
   * 
   * > - ApsaraDB RDS for PostgreSQL supports only **ReadWriteSpliting**.
   * > - The nearest access feature is supported only by the dedicated database proxy for MySQL.
   * 
   * @example
   * ReadWriteSpliting:1;ConnectionPersist:0
   */
  configDBProxyFeatures?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp145737x5bi6****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the proxy endpoint. You can call DescribeDBProxyEndpoint to query the ID.
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
   * A deprecated parameter. You do not need to specify this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The description of the proxy endpoint.
   * 
   * @example
   * test-proxy
   */
  dbEndpointAliases?: string;
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
   * The type of operation. Valid values:
   * * **Modify**: The default value. Modifies the proxy endpoint.
   * * **Create**: Creates a proxy endpoint.
   * * **Delete**: Deletes a proxy endpoint.
   * 
   * @example
   * Modify
   */
  dbEndpointOperator?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * * **ReadWrite**: Connects to the primary instance and can accept write requests.
   * * **ReadOnly**: The default value. Does not connect to the primary instance and cannot accept write requests.
   * 
   * > * This parameter is required when **DbEndpointOperator** is set to **Create**.
   * > * For ApsaraDB RDS for MySQL instances, if you change this parameter from **ReadWrite** to **ReadOnly**, the transaction splitting feature is disabled.
   * 
   * @example
   * ReadWrite
   */
  dbEndpointReadWriteMode?: string;
  /**
   * @remarks
   * The type of the proxy endpoint. This is a reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * RWSplit
   */
  dbEndpointType?: string;
  /**
   * @remarks
   * The specified time at which the change takes effect. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is required when **EffectiveTime** is set to **SpecificTime**.
   * 
   * @example
   * 2023-05-06T07:08:09Z
   */
  effectiveSpecificTime?: string;
  /**
   * @remarks
   * The effective period. Valid values:
   * 
   * * **Immediate**: The change takes effect immediately.
   * * **MaintainTime**: The change takes effect during the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * * **SpecificTime**: The change takes effect at a specified time.
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
   * The mode used to allocate read weights. Valid values:
   * 
   * * **Standard**: The default value. Read weights are automatically allocated based on instance specifications.
   * * **Custom**: Custom read weights.
   * 
   * > This parameter is required only when read/write splitting is enabled. For more information about read weight allocation, see [Read weight allocation](https://help.aliyun.com/document_detail/96076.html) for MySQL and [Enable and configure the database proxy service](https://help.aliyun.com/document_detail/418272.html) for PostgreSQL.
   * 
   * @example
   * Standard
   */
  readOnlyInstanceDistributionType?: string;
  /**
   * @remarks
   * The maximum latency threshold for read-only instances in read/write splitting. If the latency of a read-only instance exceeds this value, read traffic is not routed to the instance. Unit: seconds. If you do not specify this parameter, the current value is retained. Valid values: **0** to **3600**.
   * 
   * >- This parameter is required only when read/write splitting is enabled.
   * >- Default value: **30** seconds when the read/write mode is set to read/write (read/write splitting), and **-1** (disabled) when the read/write mode is set to read-only.
   * 
   * @example
   * 30
   */
  readOnlyInstanceMaxDelayTime?: string;
  /**
   * @remarks
   * The custom read weights to allocate to the primary instance and read-only instances. The value must be in increments of 100. Maximum value: 10000. Format:
   * 
   * - Regular instance: `{"PrimaryInstanceID":"Weight","ReadOnlyInstanceID":"Weight"...}`
   * 
   *     Example: `{"rm-uf6wjk5****":"500","rr-tfhfgk5xxx":"200"...}`
   * - ApsaraDB RDS for MySQL cluster instance: `{"ReadOnlyInstanceID":"Weight","DBClusterNode":{"PrimaryNodeID":"Weight","SecondaryNodeID":"Weight","SecondaryNodeID":"Weight"...}}`
   * 
   *     Example: `{"rr-tfhfgk5****":"200","DBClusterNode":{"rn-2z****":"0","rn-2z****":"400","rn-2z****":"400"...}}`
   *     > **DBClusterNode** is a request parameter specific to cluster instances. It contains the **NodeID** and **Weight** of the primary and secondary nodes.
   * 
   * @example
   * {"rm-uf6wjk5****":"500","rr-tfhfgk5xxx":"200"...}
   */
  readOnlyInstanceWeight?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The vSwitch ID that corresponds to the zone of the proxy endpoint. Default value: the vSwitch ID of the default endpoint of the proxy instance. You can call DescribeVSwitches to query available vSwitches.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID that corresponds to the zone of the proxy endpoint. Default value: the VPC ID of the default endpoint of the proxy instance. You can call DescribeDBInstanceAttribute to query the default VPC of the instance.
   * 
   * @example
   * vpc-2zeusejj******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      causalConsistReadTimeout: 'CausalConsistReadTimeout',
      configDBProxyFeatures: 'ConfigDBProxyFeatures',
      DBInstanceId: 'DBInstanceId',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEngineType: 'DBProxyEngineType',
      dbEndpointAliases: 'DbEndpointAliases',
      dbEndpointCostThresholdForDuckdb: 'DbEndpointCostThresholdForDuckdb',
      dbEndpointMinSlaveCount: 'DbEndpointMinSlaveCount',
      dbEndpointOperator: 'DbEndpointOperator',
      dbEndpointReadWriteMode: 'DbEndpointReadWriteMode',
      dbEndpointType: 'DbEndpointType',
      effectiveSpecificTime: 'EffectiveSpecificTime',
      effectiveTime: 'EffectiveTime',
      ownerId: 'OwnerId',
      readOnlyInstanceDistributionType: 'ReadOnlyInstanceDistributionType',
      readOnlyInstanceMaxDelayTime: 'ReadOnlyInstanceMaxDelayTime',
      readOnlyInstanceWeight: 'ReadOnlyInstanceWeight',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      causalConsistReadTimeout: 'string',
      configDBProxyFeatures: 'string',
      DBInstanceId: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEngineType: 'string',
      dbEndpointAliases: 'string',
      dbEndpointCostThresholdForDuckdb: 'string',
      dbEndpointMinSlaveCount: 'string',
      dbEndpointOperator: 'string',
      dbEndpointReadWriteMode: 'string',
      dbEndpointType: 'string',
      effectiveSpecificTime: 'string',
      effectiveTime: 'string',
      ownerId: 'number',
      readOnlyInstanceDistributionType: 'string',
      readOnlyInstanceMaxDelayTime: 'string',
      readOnlyInstanceWeight: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

