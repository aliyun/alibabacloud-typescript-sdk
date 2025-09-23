// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpTrafficResponseBodyIpTrafficPoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  actConns?: number;
  /**
   * @example
   * 100
   */
  cps?: number;
  /**
   * @example
   * 100
   */
  inactConns?: number;
  /**
   * @example
   * 10000
   */
  maxInbps?: number;
  /**
   * @example
   * 10000
   */
  maxOutbps?: number;
  /**
   * @example
   * 1536734112
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      cps: 'Cps',
      inactConns: 'InactConns',
      maxInbps: 'MaxInbps',
      maxOutbps: 'MaxOutbps',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'number',
      cps: 'number',
      inactConns: 'number',
      maxInbps: 'number',
      maxOutbps: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpTrafficResponseBody extends $dara.Model {
  /**
   * @example
   * 10000
   */
  avgInBps?: number;
  /**
   * @example
   * 10000
   */
  avgOutBps?: number;
  ipTrafficPoints?: DescribeIpTrafficResponseBodyIpTrafficPoints[];
  /**
   * @example
   * 10000
   */
  maxInBps?: number;
  /**
   * @example
   * 10000
   */
  maxOutBps?: number;
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      avgInBps: 'AvgInBps',
      avgOutBps: 'AvgOutBps',
      ipTrafficPoints: 'IpTrafficPoints',
      maxInBps: 'MaxInBps',
      maxOutBps: 'MaxOutBps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgInBps: 'number',
      avgOutBps: 'number',
      ipTrafficPoints: { 'type': 'array', 'itemType': DescribeIpTrafficResponseBodyIpTrafficPoints },
      maxInBps: 'number',
      maxOutBps: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipTrafficPoints)) {
      $dara.Model.validateArray(this.ipTrafficPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

