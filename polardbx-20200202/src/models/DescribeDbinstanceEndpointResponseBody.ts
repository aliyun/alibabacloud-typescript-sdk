// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEndpointResponseBodyDataItemsEndpoint extends $dara.Model {
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 10.21.1.82
   */
  address?: string;
  /**
   * @remarks
   * The instance specification type (specification code).
   * 
   * @example
   * mdb.shard.4x.large.d
   */
  class?: string;
  /**
   * @remarks
   * The ID of the endpoint group to which the endpoint belongs.
   * 
   * @example
   * epg-bp14wgzai7flglwdtkxfa
   */
  endpointGroupId?: number;
  /**
   * @remarks
   * The logical node ID.
   * 
   * @example
   * 2899
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether this is the default vSwitch.
   * 
   * @example
   * True
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The payload type. Valid values:
   * - agentTurn: agent conversation.
   * - systemEvent: system event.
   * 
   * @example
   * instance
   */
  kind?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * * **Public**: public endpoint.
   * * **Private**: private endpoint.
   * * **Inner**: private endpoint (classic network).
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The read/write type. Valid values:
   * - ReadWrite: row store read/write.
   * - ColumnarRead: column store read-only.
   * 
   * @example
   * 0
   */
  readType?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * sas-app
   */
  targetName?: string;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * 3522367
   */
  tunnelId?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **ReadWrite**: primary instance.
   * - **ReadOnly**: read-only instance.
   * 
   * @example
   * TXT
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether the endpoint is visible to the user.
   */
  userVisible?: boolean;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze51hh6s8tsjgy19g5eu
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance protected by the policy.
   * 
   * @example
   * http://100.100.100.200/latest/meta-data
   */
  vip?: string;
  /**
   * @remarks
   * The ID of the VPC in which the endpoint resides.
   * 
   * @example
   * vpc-bp1s9j8s4h4uqejp9k2z3
   */
  vpcId?: string;
  /**
   * @remarks
   * The VIP port, such as 80, 8080, or 443.
   * 
   * @example
   * vport
   */
  vport?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * `curl uUys2ThR.popscan.xaliyun.com`
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      class: 'Class',
      endpointGroupId: 'EndpointGroupId',
      id: 'Id',
      isDefault: 'IsDefault',
      kind: 'Kind',
      netType: 'NetType',
      readType: 'ReadType',
      targetName: 'TargetName',
      tunnelId: 'TunnelId',
      type: 'Type',
      userVisible: 'UserVisible',
      vSwitchId: 'VSwitchId',
      vip: 'Vip',
      vpcId: 'VpcId',
      vport: 'Vport',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      class: 'string',
      endpointGroupId: 'number',
      id: 'number',
      isDefault: 'boolean',
      kind: 'string',
      netType: 'string',
      readType: 'string',
      targetName: 'string',
      tunnelId: 'number',
      type: 'string',
      userVisible: 'boolean',
      vSwitchId: 'string',
      vip: 'string',
      vpcId: 'string',
      vport: 'number',
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

export class DescribeDBInstanceEndpointResponseBodyDataItemsRealServer extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the node is enabled. For the compute layer, only the primary zone node is enabled. After a primary/secondary switchover, the standby compute node becomes the primary node. All storage layer nodes are enabled.
   * 
   * @example
   * False
   */
  activated?: boolean;
  /**
   * @remarks
   * The instance specification type (specification code).
   * 
   * @example
   * dds.cs.mid
   */
  class?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 172.29.32.166
   */
  ip?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The replica ID.
   * 
   * @example
   * 节点id
   */
  replicaId?: number;
  /**
   * @remarks
   * The weight of the destination route.
   * 
   * - For VPN gateway instances that support the dual-tunnel mode for IPsec-VPN connections, the weight of the destination route is **100** by default and has no practical significance.
   * - For VPN gateway instances that support the single-tunnel mode for IPsec-VPN connections, the weight represents the priority of the destination route:
   *     - **100**: high priority. If multiple destination routes have the same destination CIDR block, the IPsec-VPN connection associated with this route serves as the active link.
   *     - **0**: low priority. If multiple destination routes have the same destination CIDR block, the IPsec-VPN connection associated with this route serves as the standby link.
   * 
   * @example
   * 255
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      activated: 'Activated',
      class: 'Class',
      ip: 'Ip',
      port: 'Port',
      replicaId: 'ReplicaId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activated: 'boolean',
      class: 'string',
      ip: 'string',
      port: 'string',
      replicaId: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance.
   */
  endpoint?: DescribeDBInstanceEndpointResponseBodyDataItemsEndpoint;
  /**
   * @remarks
   * The addresses of the origin server.
   */
  realServer?: DescribeDBInstanceEndpointResponseBodyDataItemsRealServer[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      realServer: 'RealServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: DescribeDBInstanceEndpointResponseBodyDataItemsEndpoint,
      realServer: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointResponseBodyDataItemsRealServer },
    };
  }

  validate() {
    if(this.endpoint && typeof (this.endpoint as any).validate === 'function') {
      (this.endpoint as any).validate();
    }
    if(Array.isArray(this.realServer)) {
      $dara.Model.validateArray(this.realServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEndpointResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The internal connection type. The value is fixed as 1, which indicates the classic network.
   */
  items?: DescribeDBInstanceEndpointResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointResponseBodyDataItems },
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

export class DescribeDBInstanceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data.
   */
  data?: DescribeDBInstanceEndpointResponseBodyData;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100. Default value: If the value is not specified or is less than 10, the default value is 10. If the value is greater than 100, the default value is 100.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * xxdds
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceEndpointResponseBodyData,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

