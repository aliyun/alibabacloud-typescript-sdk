// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndpointsResponseBodyConnAddrsConnAddrInfo extends $dara.Model {
  /**
   * @example
   * ****
   */
  connAddr?: string;
  /**
   * @example
   * ****
   */
  connAddrPort?: string;
  /**
   * @example
   * zkConn
   */
  connType?: string;
  /**
   * @example
   * 2
   */
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      connAddr: 'ConnAddr',
      connAddrPort: 'ConnAddrPort',
      connType: 'ConnType',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddr: 'string',
      connAddrPort: 'string',
      connType: 'string',
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

export class DescribeEndpointsResponseBodyConnAddrs extends $dara.Model {
  connAddrInfo?: DescribeEndpointsResponseBodyConnAddrsConnAddrInfo[];
  static names(): { [key: string]: string } {
    return {
      connAddrInfo: 'ConnAddrInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrInfo: { 'type': 'array', 'itemType': DescribeEndpointsResponseBodyConnAddrsConnAddrInfo },
    };
  }

  validate() {
    if(Array.isArray(this.connAddrInfo)) {
      $dara.Model.validateArray(this.connAddrInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointsResponseBody extends $dara.Model {
  connAddrs?: DescribeEndpointsResponseBodyConnAddrs;
  /**
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @example
   * F072593C-5234-5B56-9F63-3C7A3AD85D66
   */
  requestId?: string;
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
  static names(): { [key: string]: string } {
    return {
      connAddrs: 'ConnAddrs',
      engine: 'Engine',
      netType: 'NetType',
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAddrs: DescribeEndpointsResponseBodyConnAddrs,
      engine: 'string',
      netType: 'string',
      requestId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.connAddrs && typeof (this.connAddrs as any).validate === 'function') {
      (this.connAddrs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

