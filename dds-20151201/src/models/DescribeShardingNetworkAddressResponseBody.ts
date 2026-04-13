// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeShardingNetworkAddressResponseBodyCompatibleConnectionsCompatibleConnection extends $dara.Model {
  expiredTime?: string;
  IPAddress?: string;
  networkAddress?: string;
  networkType?: string;
  port?: string;
  VPCId?: string;
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
  connectionType?: string;
  expiredTime?: string;
  IPAddress?: string;
  networkAddress?: string;
  networkType?: string;
  nodeId?: string;
  nodeType?: string;
  port?: string;
  role?: string;
  txtRecord?: string;
  VPCId?: string;
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
  compatibleConnections?: DescribeShardingNetworkAddressResponseBodyCompatibleConnections;
  connectionStringSuffix?: string;
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
      connectionStringSuffix: 'ConnectionStringSuffix',
      networkAddresses: 'NetworkAddresses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleConnections: DescribeShardingNetworkAddressResponseBodyCompatibleConnections,
      connectionStringSuffix: 'string',
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

