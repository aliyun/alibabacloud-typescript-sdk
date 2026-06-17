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
   * Specifies whether the endpoint is the dashboard endpoint of a PolarDB search node. Valid values:
   * 
   * - True: Yes.
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
   * - Private: internal network.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 1521
   */
  port?: string;
  /**
   * @remarks
   * The private domain name that is bound to the endpoint.
   * 
   * @example
   * ***.***.**.com
   */
  privateZoneConnectionString?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-***************
   */
  VPCId?: string;
  /**
   * @remarks
   * The virtual switch ID.
   * 
   * @example
   * vsw-************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC instance ID.
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
   * The name of the endpoint.
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
   * - **DistributedTransaction**: The status of transaction splitting. Valid values:
   * 
   *   - **on**: Transaction splitting is enabled.
   * 
   *   - **off**: Transaction splitting is disabled.
   * 
   * - **ConsistLevel**: The consistency level. Valid values:
   * 
   *   - **0**: Eventual consistency.
   * 
   *   - **1**: Session consistency.
   * 
   *   - **2**: Global consistency.
   * 
   * - **LoadBalanceStrategy**: The load balancing policy for automatic scheduling based on loads. The value is fixed as **load**.
   * 
   * - **MasterAcceptReads**: Specifies whether the primary node accepts read requests. Valid values:
   * 
   *   - **on**: The primary node accepts read requests.
   * 
   *   - **off**: The primary node does not accept read requests.
   * 
   * @example
   * {\\"DistributedTransaction\\":\\"off\\",\\"ConsistLevel\\":\\"0\\",\\"LoadBalanceStrategy\\":\\"load\\",\\"MasterAcceptReads\\":\\"on\\"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * The type of the cluster endpoint. Valid values:
   * 
   * - Cluster: the default cluster endpoint.
   * 
   * - Primary: the primary endpoint.
   * 
   * - Custom: a custom cluster endpoint.
   * 
   * @example
   * Custom
   */
  endpointType?: string;
  /**
   * @remarks
   * The role of each node in the endpoint. The primary node has the Writer role. Because multiple read-only nodes can be added to an endpoint, each read-only node is assigned a role name suffixed with a number, such as Reader1 and Reader2.
   * 
   * @example
   * Reader1
   */
  nodeWithRoles?: string;
  /**
   * @remarks
   * The list of nodes that are configured for the endpoint.
   * 
   * @example
   * pi-***************,pi-***************
   */
  nodes?: string;
  /**
   * @remarks
   * The policy for global consistency timeout. Valid values:
   * 
   * - 0: Sends the request to the primary node.
   * 
   * - 2: Degrades the request. If a global consistency read times out, the query is automatically degraded to a regular request. The client does not receive an error message.
   * 
   * @example
   * 0
   */
  polarSccTimeoutAction?: string;
  /**
   * @remarks
   * The timeout period for global consistency.
   * 
   * @example
   * 100
   */
  polarSccWaitTimeout?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * 
   * - ReadWrite: read and write (automatic read/write splitting).
   * 
   * - ReadOnly: read-only.
   * 
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  /**
   * @remarks
   * Specifies whether global consistency (high-performance mode) is enabled for the node. Valid values:
   * 
   * - on: enabled.
   * 
   * - off: disabled.
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
   * The details of the cluster endpoints.
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

