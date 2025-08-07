// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterEndpointsResponseBodyItemsAddressItems extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * ********.rwlb.polardb-pg-public.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * Whether it is the dashboard endpoint of the PolarDB search node.
   * 
   * *   Ture
   * *   False
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
   * The network type of the endpoint. Valid values:
   * 
   * *   **Public**
   * *   **Private**
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
   * The private domain name that is bound to the endpoint.
   * 
   * @example
   * ***.***.**.com
   */
  privateZoneConnectionString?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-***************
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) instance.
   * 
   * > This parameter is returned for only PolarDB for MySQL clusters.
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
   * The details of the endpoint.
   */
  addressItems?: DescribeDBClusterEndpointsResponseBodyItemsAddressItems[];
  /**
   * @remarks
   * Indicates whether new nodes are automatically associated with the default cluster endpoint. Valid values:
   * 
   * *   **Enable**
   * *   **Disable**
   * 
   * @example
   * Enable
   */
  autoAddNewNodes?: string;
  /**
   * @remarks
   * The ID of the cluster.
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
   * The ID of the endpoint.
   * 
   * @example
   * pe-*************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The advanced configurations of the endpoint.
   * 
   * *   **DistributedTransaction**: indicates whether transaction splitting is enabled. Valid values:
   * 
   *     *   **on**
   *     *   **off**
   * 
   * *   **ConsistLevel**: the consistency level of sessions. Valid values:
   * 
   *     *   **0**: eventual consistency.
   *     *   **1**: session consistency.
   *     *   **2**: global consistency.
   * 
   * *   **LoadBalanceStrategy**: the load balancing policy that automatically schedules loads. Only **load** may be returned.
   * 
   * *   **MasterAcceptReads**: indicates whether the primary node processes read requests. Valid values:
   * 
   *     *   **on**
   *     *   **off**
   * 
   * @example
   * {\\"DistributedTransaction\\":\\"off\\",\\"ConsistLevel\\":\\"0\\",\\"LoadBalanceStrategy\\":\\"load\\",\\"MasterAcceptReads\\":\\"on\\"}
   */
  endpointConfig?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Cluster**: the default endpoint.
   * *   **Primary**: the primary endpoint.
   * *   **Custom**: a custom cluster endpoint.
   * 
   * @example
   * Custom
   */
  endpointType?: string;
  /**
   * @remarks
   * The role name of each node in the endpoint. The role name of the primary node is **Writer**. Multiple read-only nodes can be associated with an endpoint. Therefore, the role name of each read-only node is suffixed with a number. For example, you can use **Reader1** and **Reader2** as the role names.
   * 
   * >  This parameter is valid only for PolarDB for PostgreSQL clusters and PolarDB for PostgreSQL (Compatible with Oracle)) clusters.
   * 
   * @example
   * Reader1
   */
  nodeWithRoles?: string;
  /**
   * @remarks
   * The nodes in the endpoint.
   * 
   * @example
   * pi-***************,pi-***************
   */
  nodes?: string;
  /**
   * @remarks
   * The global consistency timeout policy. Valid values:
   * 
   * *   **0**: sends the request to the primary node.
   * *   **2**: downgrades the consistency level of a query to inconsistent read when a global consistent read in the query times out. No error message is returned to the client.
   * 
   * @example
   * 0
   */
  polarSccTimeoutAction?: string;
  /**
   * @remarks
   * Global consistency timeout.
   * 
   * @example
   * 100
   */
  polarSccWaitTimeout?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * 
   * *   **ReadWrite**: handles read and write requests. Automatic read/write splitting is enabled.
   * *   **ReadOnly**: handles read-only requests.
   * 
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  /**
   * @remarks
   * Indicates whether the global consistency (high-performance mode) feature is enabled for the node. Valid values:
   * 
   * *   **on**: enabled.
   * *   **off**: disabled
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
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsResponseBodyItemsAddressItems },
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

export class DescribeDBClusterEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the endpoints.
   */
  items?: DescribeDBClusterEndpointsResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
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

