// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterEndpointsResponseBodyItemsAddressItems extends $dara.Model {
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
   * Indicates whether the endpoint is a dashboard endpoint for a PolarDB Search node.
   * 
   * - **True**: Yes
   * 
   * - **False**: No
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
   * - **Public**: public network
   * 
   * - **Private**: private network
   * 
   * <props="china">
   * 
   * - **Inner**: classic network
   * 
   * 
   * 
   * <props="china">
   * 
   * Only PolarDB for MySQL clusters support the classic network type.
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
   * The connection string for the private domain name.
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
   * The VPC instance ID.
   * 
   * > This parameter is returned only for PolarDB for MySQL clusters.
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

export class DescribeDBClusterEndpointsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The connection addresses for the endpoint.
   */
  addressItems?: DescribeDBClusterEndpointsResponseBodyItemsAddressItems[];
  /**
   * @remarks
   * Indicates whether new nodes are automatically added to the default cluster endpoint. Valid values:
   * 
   * - **Enable**
   * 
   * - **Disable**
   * 
   * @example
   * Enable
   */
  autoAddNewNodes?: string;
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
   * The advanced settings for the cluster endpoint.
   * 
   * - **DistributedTransaction**: The transaction splitting status. Valid values:
   * 
   *   - **on**: enabled
   * 
   *   - **off**: disabled
   * 
   * - **ConsistLevel**: The consistency level. Valid values:
   * 
   *   - **0**: eventual consistency
   * 
   *   - **1**: session consistency
   * 
   *   - **2**: global consistency
   * 
   * - **LoadBalanceStrategy**: The load balancing policy. The value is fixed to **load**, which indicates load-based scheduling.
   * 
   * - **MasterAcceptReads**: Indicates whether the primary node accepts read requests. Valid values:
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
   * - **Cluster**: the default cluster endpoint.
   * 
   * - **Primary**: the primary endpoint.
   * 
   * - **Custom**: a custom cluster endpoint.
   * 
   * @example
   * Custom
   */
  endpointType?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - **Public**: public network
   * 
   * - **Private**: private network
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The role of each node in the endpoint. The primary node has the **Writer** role. Read-only nodes have numbered roles, such as **Reader1**, **Reader2**, and so on.
   * 
   * > This parameter is supported only by PolarDB for PostgreSQL clusters and PolarDB for PostgreSQL (compatible with Oracle) clusters.
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
   * The policy for handling global consistency read timeouts. Valid values:
   * 
   * - **0**: Redirects the request to the primary node.
   * 
   * - **2**: Downgrades the request. If a global consistency read times out, the system automatically downgrades the query to a non-consistent read, and the client does not receive an error.
   * 
   * @example
   * 0
   */
  polarSccTimeoutAction?: string;
  /**
   * @remarks
   * The timeout period for global consistency reads.
   * 
   * @example
   * 100
   */
  polarSccWaitTimeout?: string;
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
   * The protocol type.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * 
   * - **ReadWrite**: read and write (automatic read/write splitting).
   * 
   * - **ReadOnly**: read-only.
   * 
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  /**
   * @remarks
   * Indicates whether global consistency (high-performance mode) is enabled for the node. Valid values:
   * 
   * - **on**: enabled
   * 
   * - **off**: disabled
   * 
   * @example
   * on
   */
  sccMode?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * test-name
   */
  serviceName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-***************
   */
  VPCId?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      autoAddNewNodes: 'AutoAddNewNodes',
      connectionString: 'ConnectionString',
      DBClusterId: 'DBClusterId',
      DBEndpointDescription: 'DBEndpointDescription',
      DBEndpointId: 'DBEndpointId',
      endpointConfig: 'EndpointConfig',
      endpointType: 'EndpointType',
      netType: 'NetType',
      nodeWithRoles: 'NodeWithRoles',
      nodes: 'Nodes',
      polarSccTimeoutAction: 'PolarSccTimeoutAction',
      polarSccWaitTimeout: 'PolarSccWaitTimeout',
      port: 'Port',
      protocol: 'Protocol',
      readWriteMode: 'ReadWriteMode',
      sccMode: 'SccMode',
      serviceName: 'ServiceName',
      VPCId: 'VPCId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsResponseBodyItemsAddressItems },
      autoAddNewNodes: 'string',
      connectionString: 'string',
      DBClusterId: 'string',
      DBEndpointDescription: 'string',
      DBEndpointId: 'string',
      endpointConfig: 'string',
      endpointType: 'string',
      netType: 'string',
      nodeWithRoles: 'string',
      nodes: 'string',
      polarSccTimeoutAction: 'string',
      polarSccWaitTimeout: 'string',
      port: 'string',
      protocol: 'string',
      readWriteMode: 'string',
      sccMode: 'string',
      serviceName: 'string',
      VPCId: 'string',
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

export class DescribeDBClusterEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of cluster endpoints.
   */
  items?: DescribeDBClusterEndpointsResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsResponseBodyItems },
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

