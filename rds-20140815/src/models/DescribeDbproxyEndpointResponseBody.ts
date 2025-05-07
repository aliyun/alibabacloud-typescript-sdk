// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyEndpointResponseBodyDBProxyNodes } from "./DescribeDbproxyEndpointResponseBodyDbproxyNodes";
import { DescribeDBProxyEndpointResponseBodyEndpointConnectItems } from "./DescribeDbproxyEndpointResponseBodyEndpointConnectItems";


export class DescribeDBProxyEndpointResponseBody extends $dara.Model {
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
   * The proxy endpoint queried.
   * 
   * @example
   * testproxy****.rwlb.rds.aliyuncs.com
   */
  DBProxyConnectString?: string;
  /**
   * @remarks
   * The network type of the proxy endpoint. Valid values:
   * 
   * *   **InnerString**: internal network
   * *   **OuterString**: Internet
   * 
   * @example
   * InnerString
   */
  DBProxyConnectStringNetType?: string;
  /**
   * @remarks
   * The port number that is associated with the proxy endpoint.
   * 
   * @example
   * 3306
   */
  DBProxyConnectStringPort?: string;
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
   * The configuration of the proxy terminal. The value of this parameter is a JSON string that consists of the following parameters:
   * 
   * *   **TransactionReadSqlRouteOptimizeStatus**: the status of the transaction splitting feature. Valid values: **0** and **1**. The value 0 indicates that the feature is disabled. The value 1 indicates that the feature is enabled.
   * *   **ConnectionPersist**: the status of the connection pooling feature. Valid values: **0**, **1**, and **2**. The value 0 indicates that the connection pooling feature is disabled. The value 1 indicates that the session-level connection pooling feature is enabled. The value 2 indicates that the transaction-level connection pooling feature is enabled.
   * *   **ReadWriteSpliting**: the status of the read/write splitting feature. Valid values: **0** and **1**. The value 0 indicates that the feature is disabled. The value 1 indicates that the feature is enabled.
   * *   **AZProximityAccess**: the status of the nearest access feature. Valid values: **0** and **1**. The value 0 indicates that the feature is disabled. The value 1 indicates that the feature is enabled.
   * *   **CausalConsistRead**: the read consistency settings. Valid values: **0**, **1**, and **2**. The value 0 indicates eventual consistency. The value 1 indicates session consistency. The value 2 indicates global consistency.
   * *   **PinPreparedStmt**: an internal parameter that is available only for ApsaraDB RDS for PostgrSQL instances.
   * 
   * >  If the instance runs PostgreSQL, you can change only the value of the **ReadWriteSpliting** field. The **TransactionReadSqlRouteOptimizeStatus** and **PinPreparedStmt** fields are set to their default values 1.
   * 
   * @example
   * TransactionReadSqlRouteOptimizeStatus:1;ConnectionPersist:0;ReadWriteSpliting:1
   */
  DBProxyFeatures?: string;
  /**
   * @remarks
   * The proxy nodes that are associated with the proxy terminal.
   */
  DBProxyNodes?: DescribeDBProxyEndpointResponseBodyDBProxyNodes;
  /**
   * @remarks
   * The description of the proxy terminal.
   * 
   * @example
   * proxyterminal-test
   */
  dbProxyEndpointAliases?: string;
  /**
   * @remarks
   * The read and write attributes of the proxy terminal. Valid values:
   * 
   * *   **ReadWrite**: The proxy terminal supports read and write requests.
   * *   **ReadOnly**: The proxy terminal supports only read requests.
   * 
   * @example
   * ReadWrite
   */
  dbProxyEndpointReadWriteMode?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the proxy.
   * 
   * @example
   * vpc-****
   */
  dbProxyEndpointVpcId?: string;
  /**
   * @remarks
   * The vSwitch ID of the proxy terminal.
   * 
   * @example
   * vsw-****
   */
  dbProxyEndpointVswitchId?: string;
  /**
   * @remarks
   * The zone ID of the proxy terminal.
   * 
   * @example
   * cn-hangzhou-c
   */
  dbProxyEndpointZoneId?: string;
  /**
   * @remarks
   * An array that consists of the information about the proxy endpoint.
   */
  endpointConnectItems?: DescribeDBProxyEndpointResponseBodyEndpointConnectItems;
  /**
   * @remarks
   * The method that is used to assign read weights. For more information, see [Modify the latency threshold and read weights of ApsaraDB RDS for MySQL instances](https://help.aliyun.com/document_detail/96076.html). Valid values:
   * 
   * *   **Standard**: The system automatically assigns read weights to the instance and its read-only instances based on the specifications of these instances.
   * *   **Custom**: You must manually assign read weights to the instance and its read-only instances.
   * 
   * @example
   * Standard
   */
  readOnlyInstanceDistributionType?: string;
  /**
   * @remarks
   * The latency threshold that is allowed for read/write splitting. If the latency on a read-only instance exceeds the specified threshold, ApsaraDB RDS no longer forwards read requests to the read-only instance.
   * 
   * @example
   * 30
   */
  readOnlyInstanceMaxDelayTime?: string;
  /**
   * @remarks
   * The read weights of the instance and its read-only instances. The value of this parameter is a JSON string that consists of the following parameters:
   * 
   * *   **DBInstanceId**: the ID of the instance.
   * *   **DBInstanceType**: the role of the instance. Valid values: **Master** and **ReadOnly**.
   * *   **NodeID**: The IDs of the primary and secondary nodes of the cluster. An instance that runs RDS Cluster Edition refers to a cluster.
   * *   **NodeType**: The node type. Valid values: **Primary** and **Secondary**.
   * *   **Weight**: the read weight of the instance. The read weight increases in increments of **100** and cannot exceed **10000**.
   * 
   * @example
   * [{\\"Availability\\":\\"Available\\",\\"DBInstanceId\\":\\"rr-bp176984qewd8****\\",\\"DBInstanceType\\":\\"ReadOnly\\",\\"Weight\\":400},{\\"Availability\\":\\"Available\\",\\"DBInstanceId\\":\\"rm-bp1ja4f56s7us****\\",\\"DBInstanceType\\":\\"Master\\",\\"Weight\\":0}]
   */
  readOnlyInstanceWeight?: string;
  /**
   * @remarks
   * The request ID.
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

