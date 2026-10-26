// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes extends $dara.Model {
  cpuCores?: string;
  nodeId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      nodeId: 'nodeId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'string',
      nodeId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBodyDBProxyNodes extends $dara.Model {
  DBProxyNodes?: DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes[];
  static names(): { [key: string]: string } {
    return {
      DBProxyNodes: 'DBProxyNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyNodes: { 'type': 'array', 'itemType': DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes },
    };
  }

  validate() {
    if(Array.isArray(this.DBProxyNodes)) {
      $dara.Model.validateArray(this.DBProxyNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems extends $dara.Model {
  dbProxyEndpointConnectString?: string;
  dbProxyEndpointNetType?: string;
  dbProxyEndpointPort?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointConnectString: 'DbProxyEndpointConnectString',
      dbProxyEndpointNetType: 'DbProxyEndpointNetType',
      dbProxyEndpointPort: 'DbProxyEndpointPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointConnectString: 'string',
      dbProxyEndpointNetType: 'string',
      dbProxyEndpointPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBodyEndpointConnectItems extends $dara.Model {
  endpointConnectItems?: DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems[];
  static names(): { [key: string]: string } {
    return {
      endpointConnectItems: 'EndpointConnectItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointConnectItems: { 'type': 'array', 'itemType': DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems },
    };
  }

  validate() {
    if(Array.isArray(this.endpointConnectItems)) {
      $dara.Model.validateArray(this.endpointConnectItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timeout period for consistent reads. Unit: milliseconds. Default value: **10**. Valid values: **0** to **60000**.
   * 
   * @example
   * 10
   */
  causalConsistReadTimeout?: string;
  /**
   * @remarks
   * The proxy endpoint.
   * 
   * @example
   * testproxy****.rwlb.rds.aliyuncs.com
   */
  DBProxyConnectString?: string;
  /**
   * @remarks
   * The network type of the proxy endpoint. Valid values:
   * 
   * * **InnerString**: internal endpoint.
   * * **OuterString**: public endpoint.
   * 
   * @example
   * InnerString
   */
  DBProxyConnectStringNetType?: string;
  /**
   * @remarks
   * The port of the proxy endpoint.
   * 
   * @example
   * 3306
   */
  DBProxyConnectStringPort?: string;
  /**
   * @remarks
   * The execution cost threshold for SQL statements in automatic request distribution among row store and column store nodes for HTAP.
   * 
   * @example
   * 30000
   */
  DBProxyEndpointCostThresholdForDuckdb?: string;
  /**
   * @remarks
   * The ID of the proxy endpoint.
   * 
   * @example
   * keaxncrjluwu0gue****
   */
  DBProxyEndpointId?: string;
  /**
   * @remarks
   * The minimum number of reserved instances.
   * 
   * @example
   * 2
   */
  DBProxyEndpointMinSlaveCount?: string;
  /**
   * @remarks
   * An internal parameter. You can ignore this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The settings of the proxy endpoint. The value is in JSON format and includes the following parameters:
   * * **TransactionReadSqlRouteOptimizeStatus**: the transaction splitting setting. Valid values: **0** (disabled) and **1** (enabled).
   * * **ConnectionPersist**: the connection pool setting. Valid values: **0** (disabled), **1** (session-level connection pool), and **2** (transaction-level connection pooling).
   * * **ReadWriteSpliting**: the read/write splitting setting. Valid values: **0** (disabled) and **1** (enabled).
   * * **AZProximityAccess**: the nearest access setting. Valid values: **0** (disabled) and **1** (enabled).
   * * **CausalConsistRead**: the read consistency setting. Valid values: **0** (eventual consistency), **1** (session consistency), and **2** (global consistency).
   * * **HtapFilter**: the automatic request distribution among row store and column store nodes for HTAP setting. Valid values: **0** (disabled) and **1** (enabled).
   * * **PinPreparedStmt**: an internal parameter visible only in ApsaraDB RDS for PostgreSQL.
   * 
   * > For ApsaraDB RDS for PostgreSQL, only **ReadWriteSpliting** can be modified. **TransactionReadSqlRouteOptimizeStatus** and **PinPreparedStmt** are set to 1 by default.
   * 
   * @example
   * TransactionReadSqlRouteOptimizeStatus:1;ConnectionPersist:0;ReadWriteSpliting:1
   */
  DBProxyFeatures?: string;
  DBProxyNodes?: DescribeDBProxyEndpointResponseBodyDBProxyNodes;
  /**
   * @remarks
   * The description of the proxy endpoint.
   * 
   * @example
   * proxyterminal-test
   */
  dbProxyEndpointAliases?: string;
  /**
   * @remarks
   * The read/write mode of the proxy endpoint. Valid values:
   * * **ReadWrite**: read/write mode.
   * * **ReadOnly**: read-only mode.
   * 
   * @example
   * ReadWrite
   */
  dbProxyEndpointReadWriteMode?: string;
  /**
   * @remarks
   * The VPC ID of the proxy endpoint.
   * 
   * @example
   * vpc-****
   */
  dbProxyEndpointVpcId?: string;
  /**
   * @remarks
   * The vSwitch ID of the proxy endpoint.
   * 
   * @example
   * vsw-****
   */
  dbProxyEndpointVswitchId?: string;
  /**
   * @remarks
   * The zone information of the proxy endpoint.
   * 
   * @example
   * cn-hangzhou-c
   */
  dbProxyEndpointZoneId?: string;
  endpointConnectItems?: DescribeDBProxyEndpointResponseBodyEndpointConnectItems;
  /**
   * @remarks
   * The read weight distribution mode. For more information, see [Read weight distribution](https://help.aliyun.com/document_detail/96076.html). Valid values:
   * 
   * * **Standard**: automatic allocation based on instance specifications
   * * **Custom**: custom weight allocation
   * 
   * @example
   * Standard
   */
  readOnlyInstanceDistributionType?: string;
  /**
   * @remarks
   * The latency threshold for read/write splitting. If the latency of a read-only instance exceeds this threshold, read traffic is not routed to the instance. Unit: seconds.
   * 
   * @example
   * 30
   */
  readOnlyInstanceMaxDelayTime?: string;
  /**
   * @remarks
   * The read weight distribution information, which specifies the read request weights of the primary and read-only instances. The value is in JSON format and includes the following parameters:
   * * **DBInstanceId**: instance ID of the instance.
   * * **DBInstanceType**: the type of the instance. Valid values: **Master** (primary instance) and **ReadOnly** (read-only instance).
   * * **NodeID**: instance IDs of the primary and secondary nodes of the primary instance in the Cluster Edition.
   * * **NodeType**: the type of the node in the Cluster Edition. Valid values: **Primary** (primary node of the primary instance) and **Secondary** (secondary node of the primary instance).
   * * **Weight**: the read request weight. The weight increases in increments of **100**, and the maximum value is **10000**.
   * 
   * @example
   * [{\\"Availability\\":\\"Available\\",\\"DBInstanceId\\":\\"rm-2z****\\"，\\"DBInstanceType\\":\\"Master\\",\\"NodeId\\":\\"rn-t2****\\",\\"NodeType\\":\\"Primary\\",\\"Weight\\":0}, {\\"Availability\\":\\"Available\\",\\"DBInstanceId\\":\\"rm-2z****\\"，\\"DBInstanceType\\":\\"Master\\",\\"NodeId\\":\\"rn-z9****\\",\\"NodeType\\":\\"Secondary\\",\\"Weight\\":400}, {\\"Availability\\":\\"Available\\",,\\"DBInstanceId\\":\\"rm-2z****\\"，\\"DBInstanceType\\":\\"Master\\",\\"NodeId\\":\\"rn-1c****\\",\\"NodeType\\":\\"Secondary\\",\\"Weight\\":400}]]
   */
  readOnlyInstanceWeight?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 847BA085-B377-4BFA-8267-F82345ECE1D2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      causalConsistReadTimeout: 'CausalConsistReadTimeout',
      DBProxyConnectString: 'DBProxyConnectString',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      DBProxyConnectStringPort: 'DBProxyConnectStringPort',
      DBProxyEndpointCostThresholdForDuckdb: 'DBProxyEndpointCostThresholdForDuckdb',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyEndpointMinSlaveCount: 'DBProxyEndpointMinSlaveCount',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyFeatures: 'DBProxyFeatures',
      DBProxyNodes: 'DBProxyNodes',
      dbProxyEndpointAliases: 'DbProxyEndpointAliases',
      dbProxyEndpointReadWriteMode: 'DbProxyEndpointReadWriteMode',
      dbProxyEndpointVpcId: 'DbProxyEndpointVpcId',
      dbProxyEndpointVswitchId: 'DbProxyEndpointVswitchId',
      dbProxyEndpointZoneId: 'DbProxyEndpointZoneId',
      endpointConnectItems: 'EndpointConnectItems',
      readOnlyInstanceDistributionType: 'ReadOnlyInstanceDistributionType',
      readOnlyInstanceMaxDelayTime: 'ReadOnlyInstanceMaxDelayTime',
      readOnlyInstanceWeight: 'ReadOnlyInstanceWeight',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      causalConsistReadTimeout: 'string',
      DBProxyConnectString: 'string',
      DBProxyConnectStringNetType: 'string',
      DBProxyConnectStringPort: 'string',
      DBProxyEndpointCostThresholdForDuckdb: 'string',
      DBProxyEndpointId: 'string',
      DBProxyEndpointMinSlaveCount: 'string',
      DBProxyEngineType: 'string',
      DBProxyFeatures: 'string',
      DBProxyNodes: DescribeDBProxyEndpointResponseBodyDBProxyNodes,
      dbProxyEndpointAliases: 'string',
      dbProxyEndpointReadWriteMode: 'string',
      dbProxyEndpointVpcId: 'string',
      dbProxyEndpointVswitchId: 'string',
      dbProxyEndpointZoneId: 'string',
      endpointConnectItems: DescribeDBProxyEndpointResponseBodyEndpointConnectItems,
      readOnlyInstanceDistributionType: 'string',
      readOnlyInstanceMaxDelayTime: 'string',
      readOnlyInstanceWeight: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBProxyNodes && typeof (this.DBProxyNodes as any).validate === 'function') {
      (this.DBProxyNodes as any).validate();
    }
    if(this.endpointConnectItems && typeof (this.endpointConnectItems as any).validate === 'function') {
      (this.endpointConnectItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

