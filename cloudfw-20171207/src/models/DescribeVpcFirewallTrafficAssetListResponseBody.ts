// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallTrafficAssetListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * a.com
   */
  IP?: string;
  /**
   * @remarks
   * The number of intrusion prevention system (IPS) hits.
   * 
   * @example
   * 10
   */
  ipsHitCnt?: number;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 12
   */
  sessionCount?: number;
  /**
   * @remarks
   * The total traffic in bytes.
   * 
   * @example
   * 253023143
   */
  totalBytes?: number;
  /**
   * @remarks
   * The VPC where the asset resides.
   * 
   * @example
   * a.com
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC where the asset resides.
   * 
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
  /**
   * @remarks
   * The returned data.
   */
  dataList?: DescribeVpcFirewallTrafficAssetListResponseBodyDataList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C5BE1AA4-934A-5085-89CC-9AD1CAC3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

