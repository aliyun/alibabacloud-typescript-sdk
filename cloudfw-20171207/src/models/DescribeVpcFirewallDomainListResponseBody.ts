// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDomainListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The list of application layer protocols.
   */
  applicationNameList?: string[];
  /**
   * @remarks
   * The business to which the domain name belongs.
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
   * www.a.com
   */
  domain?: string;
  /**
   * @remarks
   * The organization to which the domain name belongs.
   * 
   * @example
   * Google
   */
  groupName?: string;
  /**
   * @remarks
   * The volume of request traffic to the domain name. Unit: bytes.
   * 
   * @example
   * 3214
   */
  requestBytes?: number;
  /**
   * @remarks
   * The volume of response traffic. Unit: bytes.
   * 
   * @example
   * 4582
   */
  responseBytes?: number;
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
   * The number of source IP addresses that are used to access the domain name.
   * 
   * @example
   * 2
   */
  srcIpCount?: number;
  /**
   * @remarks
   * The number of source VPCs that are used to access the domain name.
   * 
   * @example
   * 1
   */
  srcVpcCount?: number;
  /**
   * @remarks
   * The total traffic volume. Unit: bytes.
   * 
   * @example
   * 8111126106
   */
  totalBytes?: number;
  static names(): { [key: string]: string } {
    return {
      applicationNameList: 'ApplicationNameList',
      business: 'Business',
      domain: 'Domain',
      groupName: 'GroupName',
      requestBytes: 'RequestBytes',
      responseBytes: 'ResponseBytes',
      sessionCount: 'SessionCount',
      srcIpCount: 'SrcIpCount',
      srcVpcCount: 'SrcVpcCount',
      totalBytes: 'TotalBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationNameList: { 'type': 'array', 'itemType': 'string' },
      business: 'string',
      domain: 'string',
      groupName: 'string',
      requestBytes: 'number',
      responseBytes: 'number',
      sessionCount: 'number',
      srcIpCount: 'number',
      srcVpcCount: 'number',
      totalBytes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationNameList)) {
      $dara.Model.validateArray(this.applicationNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallDomainListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned data.
   */
  dataList?: DescribeVpcFirewallDomainListResponseBodyDataList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 133173B9-8010-5DF5-8B93-********
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
      dataList: { 'type': 'array', 'itemType': DescribeVpcFirewallDomainListResponseBodyDataList },
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

