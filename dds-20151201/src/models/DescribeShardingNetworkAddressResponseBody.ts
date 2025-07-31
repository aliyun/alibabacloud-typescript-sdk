// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeShardingNetworkAddressResponseBodyCompatibleConnectionsCompatibleConnection extends $dara.Model {
  /**
   * @remarks
   * The remaining duration of the classic network endpoint. Unit: seconds.
   * 
   * @example
   * 2591963
   */
  expiredTime?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.140.xxx.xx
   */
  IPAddress?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * dds-bpxxxxxxxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  networkAddress?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * *   **VPC**: virtual private cloud
   * *   **Classic**: classic network
   * *   **Public**: the Internet
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The port that is used to connect to the instance.
   * 
   * @example
   * 3717
   */
  port?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * >  This parameter is returned when the network type is **VPC**.
   * 
   * @example
   * vpc-bpxxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the Virtual Private Cloud (VPC).
   * 
   * >  This parameter is returned when the network type is **VPC**.
   * 
   * @example
   * vsw-bpxxxxxxxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      IPAddress: 'IPAddress',
      networkAddress: 'NetworkAddress',
      networkType: 'NetworkType',
      port: 'Port',
      VPCId: 'VPCId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      IPAddress: 'string',
      networkAddress: 'string',
      networkType: 'string',
      port: 'string',
      VPCId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBodyCompatibleConnections extends $dara.Model {
  compatibleConnection?: DescribeShardingNetworkAddressResponseBodyCompatibleConnectionsCompatibleConnection[];
  static names(): { [key: string]: string } {
    return {
      compatibleConnection: 'CompatibleConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleConnection: { 'type': 'array', 'itemType': DescribeShardingNetworkAddressResponseBodyCompatibleConnectionsCompatibleConnection },
    };
  }

  validate() {
    if(Array.isArray(this.compatibleConnection)) {
      $dara.Model.validateArray(this.compatibleConnection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBodyNetworkAddressesNetworkAddress extends $dara.Model {
  /**
   * @remarks
   * The public endpoint type. Valid values:
   * 
   * *   **SRV**
   * *   **Normal**
   * 
   * @example
   * SRV
   */
  connectionType?: string;
  /**
   * @remarks
   * The remaining duration of the classic network endpoint. Unit: seconds.
   * 
   * @example
   * 2591963
   */
  expiredTime?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.140.xxx.xx
   */
  IPAddress?: string;
  /**
   * @remarks
   * The connection string of the instance.
   * 
   * @example
   * s-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  networkAddress?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * *   **VPC**: virtual private cloud
   * *   **Classic**: classic network
   * *   **Public**: the Internet
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the mongos node.
   * 
   * @example
   * s-bpxxxxxxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **mongos**: mongos node
   * *   **shard**: shard node
   * *   **configserver**: Configserver node
   * 
   * @example
   * mongos
   */
  nodeType?: string;
  /**
   * @remarks
   * The port that is used to connect to the instance.
   * 
   * @example
   * 3717
   */
  port?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   Primary
   * *   Secondary
   * 
   * @example
   * Primary
   */
  role?: string;
  /**
   * @remarks
   * Txt record which can be used to store MongoDB-related meta data, such as version, configuration parameters and etc. With the combination of txt record and other technology, for example SRV record, the MongoDB client can complete the complex service discovery and configuration passing.
   * 
   * @example
   * mongo.example.com. IN TXT "config=replicaSet=myReplicaSet"
   */
  txtRecord?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * >  This parameter is returned when the network type is **VPC**.
   * 
   * @example
   * vpc-bpxxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC.
   * 
   * >  This parameter is returned when the network type is **VPC**.
   * 
   * @example
   * vsw-bpxxxxxxxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionType: 'ConnectionType',
      expiredTime: 'ExpiredTime',
      IPAddress: 'IPAddress',
      networkAddress: 'NetworkAddress',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      port: 'Port',
      role: 'Role',
      txtRecord: 'TxtRecord',
      VPCId: 'VPCId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionType: 'string',
      expiredTime: 'string',
      IPAddress: 'string',
      networkAddress: 'string',
      networkType: 'string',
      nodeId: 'string',
      nodeType: 'string',
      port: 'string',
      role: 'string',
      txtRecord: 'string',
      VPCId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBodyNetworkAddresses extends $dara.Model {
  networkAddress?: DescribeShardingNetworkAddressResponseBodyNetworkAddressesNetworkAddress[];
  static names(): { [key: string]: string } {
    return {
      networkAddress: 'NetworkAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAddress: { 'type': 'array', 'itemType': DescribeShardingNetworkAddressResponseBodyNetworkAddressesNetworkAddress },
    };
  }

  validate() {
    if(Array.isArray(this.networkAddress)) {
      $dara.Model.validateArray(this.networkAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoints of DynamoDB-compatible instances.
   */
  compatibleConnections?: DescribeShardingNetworkAddressResponseBodyCompatibleConnections;
  /**
   * @remarks
   * The endpoints of the ApsaraDB for MongoDB sharded cluster instance.
   */
  networkAddresses?: DescribeShardingNetworkAddressResponseBodyNetworkAddresses;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18D8AAFD-6BEB-420F-8164-810CB0C0AA39
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compatibleConnections: 'CompatibleConnections',
      networkAddresses: 'NetworkAddresses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleConnections: DescribeShardingNetworkAddressResponseBodyCompatibleConnections,
      networkAddresses: DescribeShardingNetworkAddressResponseBodyNetworkAddresses,
      requestId: 'string',
    };
  }

  validate() {
    if(this.compatibleConnections && typeof (this.compatibleConnections as any).validate === 'function') {
      (this.compatibleConnections as any).validate();
    }
    if(this.networkAddresses && typeof (this.networkAddresses as any).validate === 'function') {
      (this.networkAddresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

