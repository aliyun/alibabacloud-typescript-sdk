// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterConnectAddrsResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo extends $dara.Model {
  connAddr?: string;
  connAddrPort?: string;
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      netType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectAddrsResponseBodyServiceConnAddrsServiceConnAddr extends $dara.Model {
  connAddrInfo?: DescribeClusterConnectAddrsResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo;
  connType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
      connType: 'ConnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: DescribeClusterConnectAddrsResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo,
      connType: 'string',
    };
  }

  validate() {
    if(this.connAddrInfo && typeof (this.connAddrInfo as any).validate === 'function') {
      (this.connAddrInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectAddrsResponseBodyServiceConnAddrs extends $dara.Model {
  serviceConnAddr?: DescribeClusterConnectAddrsResponseBodyServiceConnAddrsServiceConnAddr[];
  static names(): { [key: string]: string } {
    return {
      serviceConnAddr: 'ServiceConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectAddrsResponseBodyServiceConnAddrsServiceConnAddr },
    };
  }

  validate() {
    if(Array.isArray(this.serviceConnAddr)) {
      $dara.Model.validateArray(this.serviceConnAddr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectAddrsResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo extends $dara.Model {
  connAddr?: string;
  connAddrPort?: string;
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      netType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectAddrsResponseBodySlbConnAddrsSlbConnAddr extends $dara.Model {
  connAddrInfo?: DescribeClusterConnectAddrsResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo;
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: DescribeClusterConnectAddrsResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo,
      slbType: 'string',
    };
  }

  validate() {
    if(this.connAddrInfo && typeof (this.connAddrInfo as any).validate === 'function') {
      (this.connAddrInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectAddrsResponseBodySlbConnAddrs extends $dara.Model {
  slbConnAddr?: DescribeClusterConnectAddrsResponseBodySlbConnAddrsSlbConnAddr[];
  static names(): { [key: string]: string } {
    return {
      slbConnAddr: 'SlbConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectAddrsResponseBodySlbConnAddrsSlbConnAddr },
    };
  }

  validate() {
    if(Array.isArray(this.slbConnAddr)) {
      $dara.Model.validateArray(this.slbConnAddr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectAddrsResponseBodyThriftConn extends $dara.Model {
  connAddr?: string;
  connAddrPort?: string;
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      netType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectAddrsResponseBodyUiProxyConnAddrInfo extends $dara.Model {
  connAddr?: string;
  connAddrPort?: string;
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      netType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectAddrsResponseBodyZkConnAddrsZkConnAddr extends $dara.Model {
  connAddr?: string;
  connAddrPort?: string;
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      netType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectAddrsResponseBodyZkConnAddrs extends $dara.Model {
  zkConnAddr?: DescribeClusterConnectAddrsResponseBodyZkConnAddrsZkConnAddr[];
  static names(): { [key: string]: string } {
    return {
      zkConnAddr: 'ZkConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zkConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectAddrsResponseBodyZkConnAddrsZkConnAddr },
    };
  }

  validate() {
    if(Array.isArray(this.zkConnAddr)) {
      $dara.Model.validateArray(this.zkConnAddr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterConnectAddrsResponseBody extends $dara.Model {
  dbType?: string;
  isMultimod?: string;
  netType?: string;
  requestId?: string;
  serviceConnAddrs?: DescribeClusterConnectAddrsResponseBodyServiceConnAddrs;
  slbConnAddrs?: DescribeClusterConnectAddrsResponseBodySlbConnAddrs;
  thriftConn?: DescribeClusterConnectAddrsResponseBodyThriftConn;
  uiProxyConnAddrInfo?: DescribeClusterConnectAddrsResponseBodyUiProxyConnAddrInfo;
  vSwitchId?: string;
  vpcId?: string;
  zkConnAddrs?: DescribeClusterConnectAddrsResponseBodyZkConnAddrs;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      isMultimod: 'IsMultimod',
      netType: 'NetType',
      requestId: 'RequestId',
      serviceConnAddrs: 'ServiceConnAddrs',
      slbConnAddrs: 'SlbConnAddrs',
      thriftConn: 'ThriftConn',
      uiProxyConnAddrInfo: 'UiProxyConnAddrInfo',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zkConnAddrs: 'ZkConnAddrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      isMultimod: 'string',
      netType: 'string',
      requestId: 'string',
      serviceConnAddrs: DescribeClusterConnectAddrsResponseBodyServiceConnAddrs,
      slbConnAddrs: DescribeClusterConnectAddrsResponseBodySlbConnAddrs,
      thriftConn: DescribeClusterConnectAddrsResponseBodyThriftConn,
      uiProxyConnAddrInfo: DescribeClusterConnectAddrsResponseBodyUiProxyConnAddrInfo,
      vSwitchId: 'string',
      vpcId: 'string',
      zkConnAddrs: DescribeClusterConnectAddrsResponseBodyZkConnAddrs,
    };
  }

  validate() {
    if(this.serviceConnAddrs && typeof (this.serviceConnAddrs as any).validate === 'function') {
      (this.serviceConnAddrs as any).validate();
    }
    if(this.slbConnAddrs && typeof (this.slbConnAddrs as any).validate === 'function') {
      (this.slbConnAddrs as any).validate();
    }
    if(this.thriftConn && typeof (this.thriftConn as any).validate === 'function') {
      (this.thriftConn as any).validate();
    }
    if(this.uiProxyConnAddrInfo && typeof (this.uiProxyConnAddrInfo as any).validate === 'function') {
      (this.uiProxyConnAddrInfo as any).validate();
    }
    if(this.zkConnAddrs && typeof (this.zkConnAddrs as any).validate === 'function') {
      (this.zkConnAddrs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

