// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDomainListResponseBodyDataList extends $dara.Model {
  applicationNameList?: string[];
  /**
   * @example
   * Google
   */
  business?: string;
  /**
   * @example
   * www.a.com
   */
  domain?: string;
  /**
   * @example
   * Google
   */
  groupName?: string;
  /**
   * @example
   * 3214
   */
  requestBytes?: number;
  /**
   * @example
   * 4582
   */
  responseBytes?: number;
  /**
   * @example
   * 12
   */
  sessionCount?: number;
  /**
   * @example
   * 2
   */
  srcIpCount?: number;
  /**
   * @example
   * 1
   */
  srcVpcCount?: number;
  /**
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
  dataList?: DescribeVpcFirewallDomainListResponseBodyDataList[];
  /**
   * @example
   * 133173B9-8010-5DF5-8B93-********
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

