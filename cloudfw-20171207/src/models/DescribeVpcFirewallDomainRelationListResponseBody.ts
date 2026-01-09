// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDomainRelationListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * Google
   */
  business?: string;
  /**
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @example
   * 192.0.XX.XX
   */
  dstIP?: string;
  /**
   * @example
   * cn-beijing
   */
  dstRegionId?: string;
  /**
   * @example
   * vpc-bp10w5nb30r4jzfyc****
   */
  dstVpcId?: string;
  /**
   * @example
   * vpc-****
   */
  dstVpcName?: string;
  /**
   * @example
   * 1767147003
   */
  firstTime?: number;
  /**
   * @example
   * Google
   */
  groupName?: string;
  /**
   * @example
   * 10
   */
  ipsHitCnt?: number;
  /**
   * @example
   * 1767147003
   */
  lastTime?: number;
  /**
   * @example
   * 10000
   */
  requestBytes?: number;
  /**
   * @example
   * 10000
   */
  responseBytes?: number;
  /**
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * cn-hangzhou
   */
  srcRegionId?: string;
  /**
   * @example
   * vpc-t4nlt09olhpazpoeg****
   */
  srcVpcId?: string;
  /**
   * @example
   * vpc-****
   */
  srcVpcName?: string;
  /**
   * @example
   * 16287823
   */
  totalBytes?: number;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      domain: 'Domain',
      dstIP: 'DstIP',
      dstRegionId: 'DstRegionId',
      dstVpcId: 'DstVpcId',
      dstVpcName: 'DstVpcName',
      firstTime: 'FirstTime',
      groupName: 'GroupName',
      ipsHitCnt: 'IpsHitCnt',
      lastTime: 'LastTime',
      requestBytes: 'RequestBytes',
      responseBytes: 'ResponseBytes',
      sessionCount: 'SessionCount',
      srcIP: 'SrcIP',
      srcRegionId: 'SrcRegionId',
      srcVpcId: 'SrcVpcId',
      srcVpcName: 'SrcVpcName',
      totalBytes: 'TotalBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      domain: 'string',
      dstIP: 'string',
      dstRegionId: 'string',
      dstVpcId: 'string',
      dstVpcName: 'string',
      firstTime: 'number',
      groupName: 'string',
      ipsHitCnt: 'number',
      lastTime: 'number',
      requestBytes: 'number',
      responseBytes: 'number',
      sessionCount: 'number',
      srcIP: 'string',
      srcRegionId: 'string',
      srcVpcId: 'string',
      srcVpcName: 'string',
      totalBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDomainRelationListResponseBodyDstVpcList extends $dara.Model {
  /**
   * @example
   * vpc-bp10w5nb30r4jzfyc****
   */
  vpcId?: string;
  /**
   * @example
   * vpc-****
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeVpcFirewallDomainRelationListResponseBody extends $dara.Model {
  dataList?: DescribeVpcFirewallDomainRelationListResponseBodyDataList[];
  dstVpcList?: DescribeVpcFirewallDomainRelationListResponseBodyDstVpcList[];
  /**
   * @example
   * C5DDD596-1191-5F36-A504-8733045A****
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
      dstVpcList: 'DstVpcList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeVpcFirewallDomainRelationListResponseBodyDataList },
      dstVpcList: { 'type': 'array', 'itemType': DescribeVpcFirewallDomainRelationListResponseBodyDstVpcList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    if(Array.isArray(this.dstVpcList)) {
      $dara.Model.validateArray(this.dstVpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

