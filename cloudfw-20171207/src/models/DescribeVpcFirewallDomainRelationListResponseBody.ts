// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDomainRelationListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The business category of the website.
   * 
   * @example
   * Google
   */
  business?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The ID of the destination region.
   * 
   * @example
   * cn-beijing
   */
  dstRegionId?: string;
  /**
   * @remarks
   * The ID of the destination VPC.
   * 
   * @example
   * vpc-bp10w5nb30r4jzfyc****
   */
  dstVpcId?: string;
  /**
   * @remarks
   * The name of the destination VPC.
   * 
   * @example
   * vpc-****
   */
  dstVpcName?: string;
  /**
   * @remarks
   * The Unix timestamp for the first access, in seconds.
   * 
   * @example
   * 1767147003
   */
  firstTime?: number;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * Google
   */
  groupName?: string;
  /**
   * @remarks
   * The IPS hit count.
   * 
   * @example
   * 10
   */
  ipsHitCnt?: number;
  /**
   * @remarks
   * The Unix timestamp for the last access, in seconds.
   * 
   * @example
   * 1767147003
   */
  lastTime?: number;
  /**
   * @remarks
   * The request traffic, in bytes.
   * 
   * @example
   * 10000
   */
  requestBytes?: number;
  /**
   * @remarks
   * The response traffic, in bytes.
   * 
   * @example
   * 10000
   */
  responseBytes?: number;
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The ID of the source region.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegionId?: string;
  /**
   * @remarks
   * The ID of the source VPC.
   * 
   * @example
   * vpc-t4nlt09olhpazpoeg****
   */
  srcVpcId?: string;
  /**
   * @remarks
   * The name of the source VPC.
   * 
   * @example
   * vpc-****
   */
  srcVpcName?: string;
  /**
   * @remarks
   * The total traffic, in bytes.
   * 
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
   * @remarks
   * The ID of the destination VPC.
   * 
   * @example
   * vpc-bp10w5nb30r4jzfyc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the destination VPC.
   * 
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
  /**
   * @remarks
   * The list of data entries.
   */
  dataList?: DescribeVpcFirewallDomainRelationListResponseBodyDataList[];
  /**
   * @remarks
   * A list of destination VPCs.
   */
  dstVpcList?: DescribeVpcFirewallDomainRelationListResponseBodyDstVpcList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5DDD596-1191-5F36-A504-8733045A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

