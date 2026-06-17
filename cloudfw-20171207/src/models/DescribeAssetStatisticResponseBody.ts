// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatisticCfwGeneralInstanceRegionStatistic extends $dara.Model {
  /**
   * @remarks
   * List of member accounts in the region.
   */
  memberList?: string[];
  /**
   * @remarks
   * Region information
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': 'string' },
      regionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatisticCfwTotalGeneralInstanceRegionStatistic extends $dara.Model {
  /**
   * @remarks
   * List of member accounts in the region.
   */
  memberList?: string[];
  /**
   * @remarks
   * Region information
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': 'string' },
      regionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatistic extends $dara.Model {
  /**
   * @remarks
   * Internet-facing firewall instance usage by region.
   */
  cfwGeneralInstanceRegionStatistic?: DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatisticCfwGeneralInstanceRegionStatistic[];
  /**
   * @remarks
   * Total Internet-facing firewall instances by region.
   */
  cfwTotalGeneralInstanceRegionStatistic?: DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatisticCfwTotalGeneralInstanceRegionStatistic[];
  /**
   * @remarks
   * Total number of Internet-facing firewall instances.
   * 
   * @example
   * 1
   */
  totalCfwGeneralInstanceCnt?: number;
  /**
   * @remarks
   * Number of Internet-facing firewall instances with protection enabled.
   * 
   * @example
   * 1
   */
  totalCfwGeneralInstanceUsedCnt?: number;
  /**
   * @remarks
   * Total number of general instances used.
   * 
   * @example
   * 1
   */
  totalGeneralInstanceUsedCnt?: number;
  /**
   * @remarks
   * Total number of NAT firewall instances.
   * 
   * @example
   * 1
   */
  totalNatGeneralInstanceCnt?: number;
  /**
   * @remarks
   * Number of NAT firewall instances with protection enabled.
   * 
   * @example
   * 1
   */
  totalNatGeneralInstanceUsedCnt?: number;
  /**
   * @remarks
   * Number of VPC firewall instances with protection enabled.
   * 
   * @example
   * 1
   */
  totalVfwGeneralInstanceUsedCnt?: number;
  static names(): { [key: string]: string } {
    return {
      cfwGeneralInstanceRegionStatistic: 'CfwGeneralInstanceRegionStatistic',
      cfwTotalGeneralInstanceRegionStatistic: 'CfwTotalGeneralInstanceRegionStatistic',
      totalCfwGeneralInstanceCnt: 'TotalCfwGeneralInstanceCnt',
      totalCfwGeneralInstanceUsedCnt: 'TotalCfwGeneralInstanceUsedCnt',
      totalGeneralInstanceUsedCnt: 'TotalGeneralInstanceUsedCnt',
      totalNatGeneralInstanceCnt: 'TotalNatGeneralInstanceCnt',
      totalNatGeneralInstanceUsedCnt: 'TotalNatGeneralInstanceUsedCnt',
      totalVfwGeneralInstanceUsedCnt: 'TotalVfwGeneralInstanceUsedCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cfwGeneralInstanceRegionStatistic: { 'type': 'array', 'itemType': DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatisticCfwGeneralInstanceRegionStatistic },
      cfwTotalGeneralInstanceRegionStatistic: { 'type': 'array', 'itemType': DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatisticCfwTotalGeneralInstanceRegionStatistic },
      totalCfwGeneralInstanceCnt: 'number',
      totalCfwGeneralInstanceUsedCnt: 'number',
      totalGeneralInstanceUsedCnt: 'number',
      totalNatGeneralInstanceCnt: 'number',
      totalNatGeneralInstanceUsedCnt: 'number',
      totalVfwGeneralInstanceUsedCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cfwGeneralInstanceRegionStatistic)) {
      $dara.Model.validateArray(this.cfwGeneralInstanceRegionStatistic);
    }
    if(Array.isArray(this.cfwTotalGeneralInstanceRegionStatistic)) {
      $dara.Model.validateArray(this.cfwTotalGeneralInstanceRegionStatistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetStatisticResponseBodyResourceSpecStatistic extends $dara.Model {
  /**
   * @remarks
   * Maximum number of public IP addresses that can be protected.
   * 
   * @example
   * 20
   */
  ipNumSpec?: number;
  /**
   * @remarks
   * Number of public IP addresses with protection enabled.
   * 
   * @example
   * 10
   */
  ipNumUsed?: number;
  /**
   * @remarks
   * The number of IP specifications for sensitive data.
   * 
   * @example
   * 0
   */
  sensitiveDataIpNumSpec?: number;
  /**
   * @remarks
   * Number of public IP addresses currently scanned for sensitive data.
   * 
   * @example
   * 0
   */
  sensitiveDataIpNumUsed?: number;
  static names(): { [key: string]: string } {
    return {
      ipNumSpec: 'IpNumSpec',
      ipNumUsed: 'IpNumUsed',
      sensitiveDataIpNumSpec: 'SensitiveDataIpNumSpec',
      sensitiveDataIpNumUsed: 'SensitiveDataIpNumUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipNumSpec: 'number',
      ipNumUsed: 'number',
      sensitiveDataIpNumSpec: 'number',
      sensitiveDataIpNumUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * Whether automatic traffic diversion is enabled. Valid values:- **true**: enabled- **false**: disabled
   * 
   * @example
   * true
   */
  autoResourceEnable?: boolean;
  /**
   * @remarks
   * Specifications for general instances in version 2.0.
   */
  generalInstanceSpecStatistic?: DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatistic;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 850A84******25g4d2
   */
  requestId?: string;
  /**
   * @remarks
   * Resource specification usage statistics.
   */
  resourceSpecStatistic?: DescribeAssetStatisticResponseBodyResourceSpecStatistic;
  static names(): { [key: string]: string } {
    return {
      autoResourceEnable: 'AutoResourceEnable',
      generalInstanceSpecStatistic: 'GeneralInstanceSpecStatistic',
      requestId: 'RequestId',
      resourceSpecStatistic: 'ResourceSpecStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoResourceEnable: 'boolean',
      generalInstanceSpecStatistic: DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatistic,
      requestId: 'string',
      resourceSpecStatistic: DescribeAssetStatisticResponseBodyResourceSpecStatistic,
    };
  }

  validate() {
    if(this.generalInstanceSpecStatistic && typeof (this.generalInstanceSpecStatistic as any).validate === 'function') {
      (this.generalInstanceSpecStatistic as any).validate();
    }
    if(this.resourceSpecStatistic && typeof (this.resourceSpecStatistic as any).validate === 'function') {
      (this.resourceSpecStatistic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

