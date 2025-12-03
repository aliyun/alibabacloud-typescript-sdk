// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo extends $dara.Model {
  /**
   * @example
   * hb-****-proxy-phoenix.hbase.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @example
   * 8765
   */
  connAddrPort?: string;
  /**
   * @example
   * 2
   */
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

export class DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddr extends $dara.Model {
  connAddrInfo?: DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo;
  /**
   * @example
   * PhoenixConnAddr
   */
  connType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
      connType: 'ConnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo,
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

export class DescribeClusterConnectionResponseBodyServiceConnAddrs extends $dara.Model {
  serviceConnAddr?: DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddr[];
  static names(): { [key: string]: string } {
    return {
      serviceConnAddr: 'ServiceConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddr },
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

export class DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo extends $dara.Model {
  /**
   * @example
   * ld-bp150tns0sjxs****-proxy-hbaseue-pub.hbaseue.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @example
   * 9190
   */
  connAddrPort?: string;
  /**
   * @example
   * 0
   */
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

export class DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddr extends $dara.Model {
  connAddrInfo?: DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo;
  /**
   * @example
   * hbaseue
   */
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo,
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

export class DescribeClusterConnectionResponseBodySlbConnAddrs extends $dara.Model {
  slbConnAddr?: DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddr[];
  static names(): { [key: string]: string } {
    return {
      slbConnAddr: 'SlbConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddr },
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

export class DescribeClusterConnectionResponseBodyThriftConn extends $dara.Model {
  /**
   * @example
   * hb-bp1u0639js2h7****-proxy-thrift.hbase.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @example
   * 9099
   */
  connAddrPort?: string;
  /**
   * @example
   * 2
   */
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

export class DescribeClusterConnectionResponseBodyUiProxyConnAddrInfo extends $dara.Model {
  /**
   * @example
   * ld-bp150tns0sjxs****-master1-001.hbaseue.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @example
   * 443
   */
  connAddrPort?: string;
  /**
   * @example
   * PUBLIC
   */
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

export class DescribeClusterConnectionResponseBodyZkConnAddrsZkConnAddr extends $dara.Model {
  /**
   * @example
   * ld-bp150tns0sjxs****-master1-001.hbaseue.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @example
   * 2181
   */
  connAddrPort?: string;
  /**
   * @example
   * 2
   */
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

export class DescribeClusterConnectionResponseBodyZkConnAddrs extends $dara.Model {
  zkConnAddr?: DescribeClusterConnectionResponseBodyZkConnAddrsZkConnAddr[];
  static names(): { [key: string]: string } {
    return {
      zkConnAddr: 'ZkConnAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zkConnAddr: { 'type': 'array', 'itemType': DescribeClusterConnectionResponseBodyZkConnAddrsZkConnAddr },
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

export class DescribeClusterConnectionResponseBody extends $dara.Model {
  /**
   * @example
   * hbaseue
   */
  dbType?: string;
  /**
   * @example
   * true
   */
  isMultimod?: string;
  /**
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @example
   * 70220050-A465-5DCC-8C0C-C38C6E3DB24D
   */
  requestId?: string;
  serviceConnAddrs?: DescribeClusterConnectionResponseBodyServiceConnAddrs;
  slbConnAddrs?: DescribeClusterConnectionResponseBodySlbConnAddrs;
  thriftConn?: DescribeClusterConnectionResponseBodyThriftConn;
  uiProxyConnAddrInfo?: DescribeClusterConnectionResponseBodyUiProxyConnAddrInfo;
  /**
   * @example
   * vsw-bp1foll427ze3d4ps****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp15s22y1a7sff5gj****
   */
  vpcId?: string;
  zkConnAddrs?: DescribeClusterConnectionResponseBodyZkConnAddrs;
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
      serviceConnAddrs: DescribeClusterConnectionResponseBodyServiceConnAddrs,
      slbConnAddrs: DescribeClusterConnectionResponseBodySlbConnAddrs,
      thriftConn: DescribeClusterConnectionResponseBodyThriftConn,
      uiProxyConnAddrInfo: DescribeClusterConnectionResponseBodyUiProxyConnAddrInfo,
      vSwitchId: 'string',
      vpcId: 'string',
      zkConnAddrs: DescribeClusterConnectionResponseBodyZkConnAddrs,
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

