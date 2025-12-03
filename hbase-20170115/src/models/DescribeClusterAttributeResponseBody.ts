// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAttributeResponseBodyConnectionInfoZKClassicConnectionStringList extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttributeResponseBodyConnectionInfoZKConnectionStringList extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttributeResponseBodyConnectionInfoZKInnerConnectionStringList extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttributeResponseBodyConnectionInfoZKPublicConnectionStringList extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttributeResponseBodyConnectionInfo extends $dara.Model {
  haRestConnectionString?: string;
  haRestPort?: string;
  haThriftConnectionString?: string;
  haThriftPort?: string;
  thriftConnectionString?: string;
  thriftPort?: string;
  UIProxyConnectionString?: string;
  ZKClassicConnectionStringList?: DescribeClusterAttributeResponseBodyConnectionInfoZKClassicConnectionStringList;
  ZKConnectionStringList?: DescribeClusterAttributeResponseBodyConnectionInfoZKConnectionStringList;
  ZKInnerConnectionStringList?: DescribeClusterAttributeResponseBodyConnectionInfoZKInnerConnectionStringList;
  ZKPort?: number;
  ZKPublicConnectionStringList?: DescribeClusterAttributeResponseBodyConnectionInfoZKPublicConnectionStringList;
  static names(): { [key: string]: string } {
    return {
      haRestConnectionString: 'HaRestConnectionString',
      haRestPort: 'HaRestPort',
      haThriftConnectionString: 'HaThriftConnectionString',
      haThriftPort: 'HaThriftPort',
      thriftConnectionString: 'ThriftConnectionString',
      thriftPort: 'ThriftPort',
      UIProxyConnectionString: 'UIProxyConnectionString',
      ZKClassicConnectionStringList: 'ZKClassicConnectionStringList',
      ZKConnectionStringList: 'ZKConnectionStringList',
      ZKInnerConnectionStringList: 'ZKInnerConnectionStringList',
      ZKPort: 'ZKPort',
      ZKPublicConnectionStringList: 'ZKPublicConnectionStringList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haRestConnectionString: 'string',
      haRestPort: 'string',
      haThriftConnectionString: 'string',
      haThriftPort: 'string',
      thriftConnectionString: 'string',
      thriftPort: 'string',
      UIProxyConnectionString: 'string',
      ZKClassicConnectionStringList: DescribeClusterAttributeResponseBodyConnectionInfoZKClassicConnectionStringList,
      ZKConnectionStringList: DescribeClusterAttributeResponseBodyConnectionInfoZKConnectionStringList,
      ZKInnerConnectionStringList: DescribeClusterAttributeResponseBodyConnectionInfoZKInnerConnectionStringList,
      ZKPort: 'number',
      ZKPublicConnectionStringList: DescribeClusterAttributeResponseBodyConnectionInfoZKPublicConnectionStringList,
    };
  }

  validate() {
    if(this.ZKClassicConnectionStringList && typeof (this.ZKClassicConnectionStringList as any).validate === 'function') {
      (this.ZKClassicConnectionStringList as any).validate();
    }
    if(this.ZKConnectionStringList && typeof (this.ZKConnectionStringList as any).validate === 'function') {
      (this.ZKConnectionStringList as any).validate();
    }
    if(this.ZKInnerConnectionStringList && typeof (this.ZKInnerConnectionStringList as any).validate === 'function') {
      (this.ZKInnerConnectionStringList as any).validate();
    }
    if(this.ZKPublicConnectionStringList && typeof (this.ZKPublicConnectionStringList as any).validate === 'function') {
      (this.ZKPublicConnectionStringList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttributeResponseBodyNetInfo extends $dara.Model {
  innerIpAddress?: string;
  netType?: string;
  publicIpAddress?: string;
  securityIpList?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      innerIpAddress: 'InnerIpAddress',
      netType: 'NetType',
      publicIpAddress: 'PublicIpAddress',
      securityIpList: 'SecurityIpList',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      innerIpAddress: 'string',
      netType: 'string',
      publicIpAddress: 'string',
      securityIpList: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttributeResponseBodyNodeListNodeDaemonListDaemon extends $dara.Model {
  daemonName?: string;
  daemonStatus?: string;
  static names(): { [key: string]: string } {
    return {
      daemonName: 'DaemonName',
      daemonStatus: 'DaemonStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daemonName: 'string',
      daemonStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttributeResponseBodyNodeListNodeDaemonList extends $dara.Model {
  daemon?: DescribeClusterAttributeResponseBodyNodeListNodeDaemonListDaemon[];
  static names(): { [key: string]: string } {
    return {
      daemon: 'Daemon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daemon: { 'type': 'array', 'itemType': DescribeClusterAttributeResponseBodyNodeListNodeDaemonListDaemon },
    };
  }

  validate() {
    if(Array.isArray(this.daemon)) {
      $dara.Model.validateArray(this.daemon);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttributeResponseBodyNodeListNode extends $dara.Model {
  daemonList?: DescribeClusterAttributeResponseBodyNodeListNodeDaemonList;
  memStore?: string;
  nodeDiskQuantity?: string;
  nodeDiskSize?: string;
  nodeDiskType?: string;
  nodeId?: string;
  nodeInstanceType?: string;
  nodeStatus?: string;
  nodeType?: string;
  regionQuantity?: string;
  serviceType?: string;
  storeFile?: string;
  static names(): { [key: string]: string } {
    return {
      daemonList: 'DaemonList',
      memStore: 'MemStore',
      nodeDiskQuantity: 'NodeDiskQuantity',
      nodeDiskSize: 'NodeDiskSize',
      nodeDiskType: 'NodeDiskType',
      nodeId: 'NodeId',
      nodeInstanceType: 'NodeInstanceType',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
      regionQuantity: 'RegionQuantity',
      serviceType: 'ServiceType',
      storeFile: 'StoreFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daemonList: DescribeClusterAttributeResponseBodyNodeListNodeDaemonList,
      memStore: 'string',
      nodeDiskQuantity: 'string',
      nodeDiskSize: 'string',
      nodeDiskType: 'string',
      nodeId: 'string',
      nodeInstanceType: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
      regionQuantity: 'string',
      serviceType: 'string',
      storeFile: 'string',
    };
  }

  validate() {
    if(this.daemonList && typeof (this.daemonList as any).validate === 'function') {
      (this.daemonList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttributeResponseBodyNodeList extends $dara.Model {
  node?: DescribeClusterAttributeResponseBodyNodeListNode[];
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: { 'type': 'array', 'itemType': DescribeClusterAttributeResponseBodyNodeListNode },
    };
  }

  validate() {
    if(Array.isArray(this.node)) {
      $dara.Model.validateArray(this.node);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAttributeResponseBody extends $dara.Model {
  autoRenew?: string;
  clusterId?: string;
  clusterName?: string;
  clusterType?: string;
  coldStorageStatus?: string;
  connectionInfo?: DescribeClusterAttributeResponseBodyConnectionInfo;
  coreDiskQuantity?: number;
  coreDiskSize?: string;
  coreDiskType?: string;
  coreInstanceQuantity?: number;
  coreInstanceType?: string;
  createTime?: string;
  expireTime?: string;
  haType?: string;
  hasUser?: string;
  lockMode?: string;
  mainVersion?: string;
  masterDiskSize?: number;
  masterDiskType?: string;
  masterInstanceType?: string;
  minorVersion?: string;
  netInfo?: DescribeClusterAttributeResponseBodyNetInfo;
  nodeList?: DescribeClusterAttributeResponseBodyNodeList;
  payType?: string;
  regionId?: string;
  requestId?: string;
  status?: string;
  updateStatus?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      coldStorageStatus: 'ColdStorageStatus',
      connectionInfo: 'ConnectionInfo',
      coreDiskQuantity: 'CoreDiskQuantity',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceQuantity: 'CoreInstanceQuantity',
      coreInstanceType: 'CoreInstanceType',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      haType: 'HaType',
      hasUser: 'HasUser',
      lockMode: 'LockMode',
      mainVersion: 'MainVersion',
      masterDiskSize: 'MasterDiskSize',
      masterDiskType: 'MasterDiskType',
      masterInstanceType: 'MasterInstanceType',
      minorVersion: 'MinorVersion',
      netInfo: 'NetInfo',
      nodeList: 'NodeList',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
      updateStatus: 'UpdateStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      coldStorageStatus: 'string',
      connectionInfo: DescribeClusterAttributeResponseBodyConnectionInfo,
      coreDiskQuantity: 'number',
      coreDiskSize: 'string',
      coreDiskType: 'string',
      coreInstanceQuantity: 'number',
      coreInstanceType: 'string',
      createTime: 'string',
      expireTime: 'string',
      haType: 'string',
      hasUser: 'string',
      lockMode: 'string',
      mainVersion: 'string',
      masterDiskSize: 'number',
      masterDiskType: 'string',
      masterInstanceType: 'string',
      minorVersion: 'string',
      netInfo: DescribeClusterAttributeResponseBodyNetInfo,
      nodeList: DescribeClusterAttributeResponseBodyNodeList,
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      updateStatus: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.connectionInfo && typeof (this.connectionInfo as any).validate === 'function') {
      (this.connectionInfo as any).validate();
    }
    if(this.netInfo && typeof (this.netInfo as any).validate === 'function') {
      (this.netInfo as any).validate();
    }
    if(this.nodeList && typeof (this.nodeList as any).validate === 'function') {
      (this.nodeList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

