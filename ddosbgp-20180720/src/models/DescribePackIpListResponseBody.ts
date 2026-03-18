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
   * The ID of the member.
   * 
   * @example
   * 170858869679****
   */
  memberUid?: string;
  /**
   * @remarks
   * The time when the near-origin traffic diversion feature was disabled.
   * 
   * @example
   * 1715658000
   */
  nsmExpireAt?: number;
  /**
   * @remarks
   * The time when the near-origin traffic diversion feature was enabled.
   * 
   * @example
   * 1715655000
   */
  nsmStartAt?: number;
  /**
   * @remarks
   * The status of the near-origin traffic diversion feature. Valid values:
   * 
   * *   **1**: The near-origin traffic diversion feature is enabled.
   * *   **0**: The near-origin traffic diversion feature is disabled.
   * 
   * @example
   * 0
   */
  nsmStatus?: number;
  /**
   * @remarks
   * The type of the cloud asset to which the IP address belongs. Valid values:
   * 
   * *   **ECS**: an ECS instance.
   * *   **SLB**: a CLB (formerly SLB) instance.
   * *   **EIP**: an EIP. If the IP address belongs to an ALB instance, the value EIP is returned.
   * *   **WAF**: a WAF instance.
   * 
   * @example
   * ECS
   */
  product?: string;
  /**
   * @remarks
   * The region to which the protected IP address belongs.
   * 
   * >  If the protected IP address is in the same region as the instance, this parameter is not returned.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The description of the cloud asset to which the IP address belongs. The asset can be an ECS instance or an SLB instance.
   * 
   * >  If no descriptions are provided for the asset, this parameter is not returned.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The status of the IP address. Valid values:
   * 
   * *   **normal**: The IP address is not under attack.
   * *   **hole_begin**: Blackhole filtering is triggered for the IP address.
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
   * The IP addresses that are protected by the instance.
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
   * *   **true**: The call is successful.
   * *   **false**: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of protected IP addresses.
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

