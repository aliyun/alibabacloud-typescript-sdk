// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackIpListResponseBodyIpList extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 47.98.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 170858869679****
   */
  memberUid?: string;
  /**
   * @remarks
   * The end time of near-origin traffic diversion.
   * 
   * @example
   * 1715658000
   */
  nsmExpireAt?: number;
  /**
   * @remarks
   * The start time of near-origin traffic diversion.
   * 
   * @example
   * 1715655000
   */
  nsmStartAt?: number;
  /**
   * @remarks
   * The status of near-origin traffic diversion. Valid values:
   * - **1**: Near-origin traffic diversion is in progress.
   * - **0**: Near-origin traffic diversion is not in progress.
   * 
   * @example
   * 0
   */
  nsmStatus?: number;
  /**
   * @remarks
   * The cloud asset type to which the IP address belongs. Valid values:
   * 
   * - **ECS**: ECS instance.
   * - **SLB**: Classic Load Balancer (CLB) instance.
   * - **EIP**: EIP, including the EIPs used by Application Load Balancer (ALB) instances.
   * - **WAF**: Web Application Firewall (WAF) instance.
   * 
   * @example
   * ECS
   */
  product?: string;
  /**
   * @remarks
   * The region of the protected IP address.
   * > If the region of the protected IP address is the same as the region of the instance, this parameter is not returned.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The description of the cloud asset to which the IP address belongs, such as an ECS instance or a CLB instance.
   * 
   * > If the cloud asset has no description, this parameter is not returned.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The current status of the IP address. Valid values:
   * 
   * - **normal**: The IP address is normal and not under attack.
   * - **hole_begin**: The IP address is under blackhole filtering.
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      memberUid: 'MemberUid',
      nsmExpireAt: 'NsmExpireAt',
      nsmStartAt: 'NsmStartAt',
      nsmStatus: 'NsmStatus',
      product: 'Product',
      region: 'Region',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      memberUid: 'string',
      nsmExpireAt: 'number',
      nsmStartAt: 'number',
      nsmStatus: 'number',
      product: 'string',
      region: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * For more information about status codes, see [Common parameters](https://help.aliyun.com/document_detail/118841.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of IP addresses protected by the Anti-DDoS Origin instance.
   */
  ipList?: DescribePackIpListResponseBodyIpList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FD1578A-BD77-50B7-A969-45A374A7ED22
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of protected IP addresses queried.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ipList: 'IpList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      ipList: { 'type': 'array', 'itemType': DescribePackIpListResponseBodyIpList },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

