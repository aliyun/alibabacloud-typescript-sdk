// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceVpcListResponseBodyVpcList extends $dara.Model {
  /**
   * @example
   * false
   */
  firewallVpc?: boolean;
  /**
   * @example
   * vpc-2ze1t4irqj0fljlbb****
   */
  vpcId?: string;
  /**
   * @example
   * Cloud_Firewall_VPC
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      firewallVpc: 'FirewallVpc',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallVpc: 'boolean',
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

export class DescribeAccessInstanceVpcListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 450D47F5-956E-543E-8502-2F71C8C54E72
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  vpcList?: DescribeAccessInstanceVpcListResponseBodyVpcList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcList: { 'type': 'array', 'itemType': DescribeAccessInstanceVpcListResponseBodyVpcList },
    };
  }

  validate() {
    if(Array.isArray(this.vpcList)) {
      $dara.Model.validateArray(this.vpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

