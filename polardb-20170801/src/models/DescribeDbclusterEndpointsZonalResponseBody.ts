// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems extends $dara.Model {
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * ********.rwlb.polardb-pg-public.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * Specifies whether the address is the dashboard address of a PolarDB Search node. Valid values:
   * 
   * - Ture: Yes.
   * 
   * - False: No.
   * 
   * @example
   * True
   */
  dashboardUsed?: boolean;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.***.***.***
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - Public: Internet.
   * 
   * - Private: Private network.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 1521
   */
  port?: string;
  /**
   * @remarks
   * The bound private domain name.
   * 
   * @example
   * ***.***.**.com
   */
  privateZoneConnectionString?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-***************
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
   * @example
   * pe-*************
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      dashboardUsed: 'DashboardUsed',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      privateZoneConnectionString: 'PrivateZoneConnectionString',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      dashboardUsed: 'boolean',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      privateZoneConnectionString: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsZonalResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The connection string information.
   */
  addressItems?: DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems[];
  /**
   * @remarks
   * Specifies whether new nodes are automatically added to the default cluster endpoint. Valid values:
   * 
   * - Enable.
   * 
   * - Disable.
   * 
   * @example
   * Enable
   */
  autoAddNewNodes?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-bp1s826a1up******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * test
   */
  DBEndpointDescription?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * pe-*************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The advanced configurations of the cluster endpoint.
   * 
   * * **DistributedTransaction**: The transaction splitting status. Valid values:
   *     * **on**: Transaction splitting is enabled.
   *     * **off**: Transaction splitting is disabled.
   * 
   * * **ConsistLevel**: The session consistency level. Valid values:
   *     * **0**: Eventual consistency.
   *     * **1**: Session consistency.
   *     * **2**: Global consistency.
   * 
   * *  **LoadBalanceStrategy**: The load balancing policy. Automatic scheduling based on load. The value is fixed as **load**.
   * 
   * * **MasterAcceptReads**: Specifies whether the primary database accepts reads. Valid values:
   *     * **on**: The primary database accepts reads.
   *     * **off**: Offload reads from primary node.
   * 
   * @example
   * {\\"DistributedTransaction\\":\\"off\\",\\"ConsistLevel\\":\\"0\\",\\"LoadBalanceStrategy\\":\\"load\\",\\"MasterAcceptReads\\":\\"on\\"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * The cluster endpoint type. Valid values:
   * 
   * - Cluster: Default cluster endpoint.
   * 
   * - Primary: Primary endpoint.
   * 
   * - Custom: Custom cluster endpoint.
   * 
   * @example
   * Custom
   */
  endpointType?: string;
  /**
   * @remarks
   * The role names of the nodes under the target endpoint. The primary node is named Writer. Because multiple read-only nodes can be added to an endpoint, a number is appended to the role name of each read-only node for distinction, such as Reader1 and Reader2.
   * 
   * @example
   * Reader1
   */
  nodeWithRoles?: string;
  /**
   * @remarks
   * The list of nodes configured for the endpoint.
   * 
   * @example
   * pi-***************,pi-***************
   */
  nodes?: string;
  /**
   * @remarks
   * The global consistency timeout policy. Valid values:
   * 
   * - 0: Sends the request to the primary node.
   * 
   * - 2: Downgrades upon timeout. If a global consistency read times out, the query is automatically downgraded to regular requests, and the client does not receive an error message.
   * 
   * @example
   * 0
   */
  polarSccTimeoutAction?: string;
  /**
   * @remarks
   * The global consistency timeout period.
   * 
   * @example
   * 100
   */
  polarSccWaitTimeout?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * 
   * - ReadWrite: Read and write (automatic read/write splitting).
   * 
   * - ReadOnly: Read-only.
   * 
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  /**
   * @remarks
   * Specifies whether the global consistency (high-performance mode) feature is enabled for the node. Valid values:
   * 
   * - on: Enabled.
   * 
   * - off: Disabled.
   * 
   * @example
   * on
   */
  sccMode?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      autoAddNewNodes: 'AutoAddNewNodes',
      DBClusterId: 'DBClusterId',
      DBEndpointDescription: 'DBEndpointDescription',
      DBEndpointId: 'DBEndpointId',
      endpointConfig: 'EndpointConfig',
      endpointType: 'EndpointType',
      nodeWithRoles: 'NodeWithRoles',
      nodes: 'Nodes',
      polarSccTimeoutAction: 'PolarSccTimeoutAction',
      polarSccWaitTimeout: 'PolarSccWaitTimeout',
      readWriteMode: 'ReadWriteMode',
      sccMode: 'SccMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsZonalResponseBodyItemsAddressItems },
      autoAddNewNodes: 'string',
      DBClusterId: 'string',
      DBEndpointDescription: 'string',
      DBEndpointId: 'string',
      endpointConfig: 'string',
      endpointType: 'string',
      nodeWithRoles: 'string',
      nodes: 'string',
      polarSccTimeoutAction: 'string',
      polarSccWaitTimeout: 'string',
      readWriteMode: 'string',
      sccMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressItems)) {
      $dara.Model.validateArray(this.addressItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsZonalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster endpoint details.
   */
  items?: DescribeDBClusterEndpointsZonalResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2DC120BF-6EBA-4C63-BE99-B09F9E******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsZonalResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

