// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo extends $dara.Model {
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

export class DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddr extends $dara.Model {
  connAddrInfo?: DescribeClusterConnectionResponseBodyServiceConnAddrsServiceConnAddrConnAddrInfo;
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

export class DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddr extends $dara.Model {
  connAddrInfo?: DescribeClusterConnectionResponseBodySlbConnAddrsSlbConnAddrConnAddrInfo;
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
   * @remarks
   * The endpoint.
   * 
   * @example
   * hb-bp1u0639js2h7****-proxy-thrift.hbase.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @remarks
   * The connection port.
   * 
   * @example
   * 9099
   */
  connAddrPort?: string;
  /**
   * @remarks
   * The access type of the endpoint. Valid values:
   * 
   * - **2**: internal network access.
   * - **0**: public network access.
   * 
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
   * @remarks
   * The endpoint.
   * 
   * @example
   * ld-bp150tns0sjxs****-master1-001.hbaseue.rds.aliyuncs.com
   */
  connAddr?: string;
  /**
   * @remarks
   * The connection port.
   * 
   * @example
   * 443
   */
  connAddrPort?: string;
  /**
   * @remarks
   * The access type of the endpoint, which is public network access.
   * 
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
   * @remarks
   * The database engine type. Valid values:
   * 
   * - **hbaseue**: ApsaraDB for HBase Performance-enhanced Edition.
   * - **hbase**: ApsaraDB for HBase Standard Edition or ApsaraDB for HBase single-node edition.
   * - **bds**: a BDS instance.
   * 
   * @example
   * hbaseue
   */
  dbType?: string;
  /**
   * @remarks
   * Indicates whether multi-model management is enabled. Valid values:
   * 
   * - **true**: Multi-model management is enabled.
   * - **false**: Multi-model management is not enabled.
   * 
   * @example
   * true
   */
  isMultimod?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - **VPC**: Virtual Private Cloud (VPC).
   * - **CLASSIC**: classic network.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 70220050-A465-5DCC-8C0C-C38C6E3DB24D
   */
  requestId?: string;
  serviceConnAddrs?: DescribeClusterConnectionResponseBodyServiceConnAddrs;
  slbConnAddrs?: DescribeClusterConnectionResponseBodySlbConnAddrs;
  /**
   * @remarks
   * The Thrift endpoint information list.
   * 
   * > This parameter list is returned only when the database DPI engine type is **hbase**.
   */
  thriftConn?: DescribeClusterConnectionResponseBodyThriftConn;
  /**
   * @remarks
   * The WebUI connection information list.
   */
  uiProxyConnAddrInfo?: DescribeClusterConnectionResponseBodyUiProxyConnAddrInfo;
  /**
   * @remarks
   * The vSwitch ID in the VPC.
   * 
   * @example
   * vsw-bp1foll427ze3d4ps****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
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

