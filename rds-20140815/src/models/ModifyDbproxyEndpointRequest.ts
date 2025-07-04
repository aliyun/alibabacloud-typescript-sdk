// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The consistency read timeout period. Unit: milliseconds. Default value: **10** Unit: milliseconds. Valid values: **0 to 60000**
   * 
   * @example
   * 10
   */
  causalConsistReadTimeout?: string;
  /**
   * @remarks
   * The capabilities that you want to enable for the proxy endpoint. If you specify more than one capability, separate the capabilities with semicolons (;). Format: `Capability 1:Status;Capability 2:Status;...`. Do not add a semicolon (;) at the end of the value.
   * 
   * Valid capability values:
   * 
   * *   **ReadWriteSpliting**: read/write splitting
   * *   **ConnectionPersist**: connection pooling
   * *   **TransactionReadSqlRouteOptimizeStatus**: transaction splitting
   * *   **AZProximityAccess**: nearest access
   * *   **CausalConsistRead**: read consistency
   * 
   * Valid status values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * > 
   * 
   * *   If the instance runs PostgreSQL, you can enable only read/write splitting, which is specified by **ReadWriteSpliting**.
   * 
   * *   Nearest access is supported only by dedicated database proxies for RDS instances that run MySQL.
   * 
   * @example
   * ReadWriteSpliting:1;ConnectionPersist:0
   */
  configDBProxyFeatures?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp145737x5bi6****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the proxy endpoint. You can call the DescribeDBProxyEndpoint operation to query the proxy endpoint ID.
   * 
   * > *   If the instance runs MySQL and you set **DbEndpointOperator** to **Delete** or **Modify**, you must specify DBProxyEndpointId.
   * > *   If the instance runs PostgreSQL and you set **DbEndpointOperator** to **Delete**, **Modify**, or **Create**, you must specify DBProxyEndpointId.
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
   * The description of the proxy terminal.
   * 
   * @example
   * test-proxy
   */
  dbEndpointAliases?: string;
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
   * The type of operation that you want to perform. Valid values:
   * 
   * *   **Modify**: Modify a proxy terminal. This is the default value.
   * *   **Create**: Create a proxy terminal.
   * *   **Delete**: Delete a proxy terminal.
   * 
   * @example
   * Modify
   */
  dbEndpointOperator?: string;
  /**
   * @remarks
   * The read and write attributes of the proxy terminal. Valid values:
   * 
   * *   **ReadWrite**: The proxy terminal connects to the primary instance and can receive both read and write requests.
   * *   **ReadOnly**: The proxy terminal does not connect to the primary instance and can receive only read requests. This is the default value.
   * 
   * > *   If you set **DbEndpointOperator** to **Create**, you must also specify DbEndpointReadWriteMode.
   * > *   If the instance runs MySQL and you change the value of this parameter from **ReadWrite** to **ReadOnly**, the transaction splitting feature is disabled.
   * 
   * @example
   * ReadWrite
   */
  dbEndpointReadWriteMode?: string;
  /**
   * @remarks
   * The type of the proxy terminal. This is a reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * RWSplit
   */
  dbEndpointType?: string;
  /**
   * @remarks
   * The point in time that you want to specify. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  If **EffectiveTime** is set to **SpecificTime**, you must specify this parameter.
   * 
   * @example
   * 2023-05-06T07:08:09Z
   */
  effectiveSpecificTime?: string;
  /**
   * @remarks
   * The effective time. Valid values:
   * 
   * *   **Immediate**: The effective time is immediate.
   * *   **MaintainTime**: The effective time is within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * *   **SpecificTime**: The effective time is a specified point in time.
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
   * The policy that is used to allocate read weights. Valid values:
   * 
   * *   **Standard** (default): The system automatically assigns read weights to the primary and read-only instances based on the specifications of these instances.
   * *   **Custom**: You must manually allocate read weights to the primary and read-only instances.
   * 
   * >  You must specify this parameter when read/write splitting is enabled. For more information about the permission allocation policy, see [Modify the latency threshold and read weights of ApsaraDB RDS for MySQL instances](https://help.aliyun.com/document_detail/96076.html) and [Enable and configure the database proxy feature for an ApsaraDB RDS for PostgreSQL instance](https://help.aliyun.com/document_detail/418272.html).
   * 
   * @example
   * Standard
   */
  readOnlyInstanceDistributionType?: string;
  /**
   * @remarks
   * The maximum latency threshold that is allowed for read/write splitting. If the latency on a read-only instance exceeds the threshold that you specified, the system no longer forwards read requests to the read-only instance. If you do not specify this parameter, the original value of this parameter is retained. Valid values: **0** to **3600**.
   * 
   * > 
   * 
   * *   You must specify this parameter only when read/write splitting is enabled.
   * 
   * *   If the database proxy endpoint has the read and write attributes, the default value of this parameter is **30** and read/write splitting is supported. If the database proxy endpoint has the read-only attribute, the default value of this parameter is **-1** and read/write splitting is not supported. Unit: seconds.
   * 
   * @example
   * 30
   */
  readOnlyInstanceMaxDelayTime?: string;
  /**
   * @remarks
   * The read weights of the instance and its read-only instances. A read weight must be a multiple of 100 and cannot exceed 10000. Formats:
   * 
   * *   Standard instance: `{"ID of the primary instance":"Weight","ID of the read-only instance":"Weight"...}`
   * 
   *     Example: `{"rm-uf6wjk5****":"500","rr-tfhfgk5xxx":"200"...}`
   * 
   * *   Instance on RDS Cluster Edition: `{"ID of the read-only instance":"Weight","DBClusterNode":{"ID of the primary node":"Weight","ID of the secondary node":"Weight","ID of the secondary node":"Weight"...}}`
   * 
   *     Example: `{"rr-tfhfgk5****":"200","DBClusterNode":{"rn-2z****":"0","rn-2z****":"400","rn-2z****":"400"...}}`
   * 
   *     > **DBClusterNode** is required if the instance runs RDS Cluster Edition. The DBClusterNode parameter includes information about **IDs** and **weights** of the primary and secondary nodes..
   * 
   * @example
   * {"rm-uf6wjk5xxxx":"500","rr-tfhfgk5xxx":"200"...}
   */
  readOnlyInstanceWeight?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch in the zone in which the proxy endpoint is specified. The default value is the ID of the vSwitch that corresponds to the default terminal of the database proxy. You can call the DescribeVSwitches operation to query existing vSwitches.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID of the zone in which the proxy endpoint is specified. The default value is the VPC ID that corresponds to the default terminal of the database proxy. You can call the DescribeDBInstanceAttribute operation to query the default VPC of an instance.
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

