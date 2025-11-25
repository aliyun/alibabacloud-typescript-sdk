// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAssetListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 192.0.XX.XX
   */
  assetIP?: string;
  /**
   * @example
   * i-hp3ez3rs9bxwt034****
   */
  assetInstanceId?: string;
  /**
   * @example
   * ecs-test
   */
  assetInstanceName?: string;
  /**
   * @example
   * 0.0
   */
  inBytes?: number;
  /**
   * @example
   * 10
   */
  ipsHitCnt?: number;
  /**
   * @example
   * 0.0
   */
  outBytes?: number;
  portList?: string[];
  /**
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @example
   * test
   */
  riskReason?: string;
  /**
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @example
   * 0
   */
  totalBytes?: number;
  static names(): { [key: string]: string } {
    return {
      assetIP: 'AssetIP',
      assetInstanceId: 'AssetInstanceId',
      assetInstanceName: 'AssetInstanceName',
      inBytes: 'InBytes',
      ipsHitCnt: 'IpsHitCnt',
      outBytes: 'OutBytes',
      portList: 'PortList',
      regionNo: 'RegionNo',
      riskLevel: 'RiskLevel',
      riskReason: 'RiskReason',
      sessionCount: 'SessionCount',
      totalBytes: 'TotalBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetIP: 'string',
      assetInstanceId: 'string',
      assetInstanceName: 'string',
      inBytes: 'number',
      ipsHitCnt: 'number',
      outBytes: 'number',
      portList: { 'type': 'array', 'itemType': 'string' },
      regionNo: 'string',
      riskLevel: 'number',
      riskReason: 'string',
      sessionCount: 'number',
      totalBytes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.portList)) {
      $dara.Model.validateArray(this.portList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAssetListResponseBody extends $dara.Model {
  dataList?: DescribeVpcFirewallAssetListResponseBodyDataList[];
  /**
   * @example
   * 924A6CCC-4EAD-5554-8AD0-45F5ED56****
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeVpcFirewallAssetListResponseBodyDataList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

