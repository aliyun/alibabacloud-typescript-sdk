// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatisticCfwGeneralInstanceRegionStatistic extends $dara.Model {
  memberList?: string[];
  /**
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

export class DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatistic extends $dara.Model {
  cfwGeneralInstanceRegionStatistic?: DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatisticCfwGeneralInstanceRegionStatistic[];
  /**
   * @example
   * 1
   */
  totalCfwGeneralInstanceCnt?: number;
  /**
   * @example
   * 1
   */
  totalCfwGeneralInstanceUsedCnt?: number;
  /**
   * @example
   * 1
   */
  totalGeneralInstanceUsedCnt?: number;
  /**
   * @example
   * 1
   */
  totalNatGeneralInstanceCnt?: number;
  /**
   * @example
   * 1
   */
  totalNatGeneralInstanceUsedCnt?: number;
  /**
   * @example
   * 1
   */
  totalVfwGeneralInstanceUsedCnt?: number;
  static names(): { [key: string]: string } {
    return {
      cfwGeneralInstanceRegionStatistic: 'CfwGeneralInstanceRegionStatistic',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetStatisticResponseBodyResourceSpecStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of public IP addresses that can be protected.
   * 
   * @example
   * 20
   */
  ipNumSpec?: number;
  /**
   * @remarks
   * The number of public IP addresses that are protected.
   * 
   * @example
   * 10
   */
  ipNumUsed?: number;
  /**
   * @remarks
   * The number of public IP addresses that can enable data leakage detection.
   * 
   * @example
   * 0
   */
  sensitiveDataIpNumSpec?: number;
  /**
   * @remarks
   * The number of public IP addresses that enabled data leakage detection.
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
  generalInstanceSpecStatistic?: DescribeAssetStatisticResponseBodyGeneralInstanceSpecStatistic;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84******25g4d2
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics on specifications.
   */
  resourceSpecStatistic?: DescribeAssetStatisticResponseBodyResourceSpecStatistic;
  static names(): { [key: string]: string } {
    return {
      generalInstanceSpecStatistic: 'GeneralInstanceSpecStatistic',
      requestId: 'RequestId',
      resourceSpecStatistic: 'ResourceSpecStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

