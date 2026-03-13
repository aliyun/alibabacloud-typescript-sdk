// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer extends $dara.Model {
  serverId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverId: 'ServerId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverId: 'string',
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

export class DescribeLoadBalancerAttributeResponseBodyBackendServers extends $dara.Model {
  backendServer?: DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyBackendServersBackendServer },
    };
  }

  validate() {
    if(Array.isArray(this.backendServer)) {
      $dara.Model.validateArray(this.backendServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPorts extends $dara.Model {
  listenerPort?: string[];
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.listenerPort)) {
      $dara.Model.validateArray(this.listenerPort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal extends $dara.Model {
  listenerPort?: number;
  listenerProtocal?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocal: 'ListenerProtocal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal extends $dara.Model {
  listenerPortAndProtocal?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal[];
  static names(): { [key: string]: string } {
    return {
      listenerPortAndProtocal: 'ListenerPortAndProtocal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPortAndProtocal: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocalListenerPortAndProtocal },
    };
  }

  validate() {
    if(Array.isArray(this.listenerPortAndProtocal)) {
      $dara.Model.validateArray(this.listenerPortAndProtocal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol extends $dara.Model {
  listenerPort?: number;
  listenerProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      listenerProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol extends $dara.Model {
  listenerPortAndProtocol?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol[];
  static names(): { [key: string]: string } {
    return {
      listenerPortAndProtocol: 'ListenerPortAndProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPortAndProtocol: { 'type': 'array', 'itemType': DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocolListenerPortAndProtocol },
    };
  }

  validate() {
    if(Array.isArray(this.listenerPortAndProtocol)) {
      $dara.Model.validateArray(this.listenerPortAndProtocol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerAttributeResponseBody extends $dara.Model {
  address?: string;
  addressType?: string;
  autoReleaseTime?: number;
  backendServers?: DescribeLoadBalancerAttributeResponseBodyBackendServers;
  bandwidth?: number;
  createTime?: string;
  createTimeStamp?: number;
  endTime?: string;
  endTimeStamp?: number;
  internetChargeType?: string;
  isPublicAddress?: string;
  listenerPorts?: DescribeLoadBalancerAttributeResponseBodyListenerPorts;
  listenerPortsAndProtocal?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal;
  listenerPortsAndProtocol?: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol;
  loadBalancerId?: string;
  loadBalancerName?: string;
  loadBalancerSpec?: string;
  loadBalancerStatus?: string;
  masterZoneId?: string;
  networkType?: string;
  payType?: string;
  regionId?: string;
  regionIdAlias?: string;
  requestId?: string;
  slaveZoneId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      autoReleaseTime: 'AutoReleaseTime',
      backendServers: 'BackendServers',
      bandwidth: 'Bandwidth',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      endTime: 'EndTime',
      endTimeStamp: 'EndTimeStamp',
      internetChargeType: 'InternetChargeType',
      isPublicAddress: 'IsPublicAddress',
      listenerPorts: 'ListenerPorts',
      listenerPortsAndProtocal: 'ListenerPortsAndProtocal',
      listenerPortsAndProtocol: 'ListenerPortsAndProtocol',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      loadBalancerStatus: 'LoadBalancerStatus',
      masterZoneId: 'MasterZoneId',
      networkType: 'NetworkType',
      payType: 'PayType',
      regionId: 'RegionId',
      regionIdAlias: 'RegionIdAlias',
      requestId: 'RequestId',
      slaveZoneId: 'SlaveZoneId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      autoReleaseTime: 'number',
      backendServers: DescribeLoadBalancerAttributeResponseBodyBackendServers,
      bandwidth: 'number',
      createTime: 'string',
      createTimeStamp: 'number',
      endTime: 'string',
      endTimeStamp: 'number',
      internetChargeType: 'string',
      isPublicAddress: 'string',
      listenerPorts: DescribeLoadBalancerAttributeResponseBodyListenerPorts,
      listenerPortsAndProtocal: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocal,
      listenerPortsAndProtocol: DescribeLoadBalancerAttributeResponseBodyListenerPortsAndProtocol,
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerStatus: 'string',
      masterZoneId: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      regionIdAlias: 'string',
      requestId: 'string',
      slaveZoneId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.backendServers && typeof (this.backendServers as any).validate === 'function') {
      (this.backendServers as any).validate();
    }
    if(this.listenerPorts && typeof (this.listenerPorts as any).validate === 'function') {
      (this.listenerPorts as any).validate();
    }
    if(this.listenerPortsAndProtocal && typeof (this.listenerPortsAndProtocal as any).validate === 'function') {
      (this.listenerPortsAndProtocal as any).validate();
    }
    if(this.listenerPortsAndProtocol && typeof (this.listenerPortsAndProtocol as any).validate === 'function') {
      (this.listenerPortsAndProtocol as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

