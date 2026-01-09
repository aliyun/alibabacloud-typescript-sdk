// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallTrafficAssetListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * a.com
   */
  IP?: string;
  /**
   * @example
   * 10
   */
  ipsHitCnt?: number;
  /**
   * @example
   * 12
   */
  sessionCount?: number;
  /**
   * @example
   * 253023143
   */
  totalBytes?: number;
  /**
   * @example
   * a.com
   */
  vpcId?: string;
  /**
   * @example
   * vpc-bp1mos0vhefmx5ah6****
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      ipsHitCnt: 'IpsHitCnt',
      sessionCount: 'SessionCount',
      totalBytes: 'TotalBytes',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      ipsHitCnt: 'number',
      sessionCount: 'number',
      totalBytes: 'number',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallTrafficAssetListResponseBody extends $dara.Model {
  dataList?: DescribeVpcFirewallTrafficAssetListResponseBodyDataList[];
  /**
   * @example
   * C5BE1AA4-934A-5085-89CC-9AD1CAC3****
   */
  requestId?: string;
  /**
   * @example
   * 132
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
      dataList: { 'type': 'array', 'itemType': DescribeVpcFirewallTrafficAssetListResponseBodyDataList },
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

