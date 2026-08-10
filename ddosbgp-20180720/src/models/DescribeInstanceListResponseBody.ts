// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceListResponseBodyInstanceListAutoProtectCondition extends $dara.Model {
  /**
   * @remarks
   * The events on which automatic binding is based.
   */
  events?: string[];
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * The automatic binding condition.
   */
  autoProtectCondition?: DescribeInstanceListResponseBodyInstanceListAutoProtectCondition;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The number of assets that are assigned public IP addresses protected by the instance that are in blackhole filtering status.
   * 
   * > You can invoke [DeleteBlackhole](https://help.aliyun.com/document_detail/118692.html) to deactivate blackhole filtering for a single protected IP address.
   * 
   * @example
   * 0
   */
  blackholdingCount?: string;
  /**
   * @remarks
   * The commodity type of the instance.
   * 
   * - **ddos_ddosorigin_public_cn**: Anti-DDoS Origin 2.0 (Pay-as-you-go) China site.
   * - **ddos_ddosorigin_public_intl**: Anti-DDoS Origin 2.0 (Pay-as-you-go) International site.
   * 
   * @example
   * ddos_ddosorigin_public_cn
   */
  commodityType?: string;
  /**
   * @remarks
   * The asset overwrite type of the instance.
   * 
   * - **1**: Supports assets that are assigned public IP addresses in multiple regions worldwide.
   * - **2**: Supports assets that are assigned public IP addresses in multiple regions in the Chinese mainland.
   * - **3**: Supports assets that are assigned public IP addresses in multiple regions outside the Chinese mainland.
   * - **4**: Supports assets that are assigned public IP addresses in a single region worldwide.
   * 
   * @example
   * 1
   */
  coverageType?: number;
  /**
   * @remarks
   * The overdue payment status. Valid values:
   * 
   * - **0**: No overdue payment.
   * - **1**: Overdue payment.
   * 
   * @example
   * 0
   */
  debtStatus?: number;
  /**
   * @remarks
   * The expiration time of the instance. The value is a timestamp. Unit: milliseconds.
   * 
   * @example
   * 1640275200000
   */
  expireTime?: number;
  /**
   * @remarks
   * The purchase time of the instance. The value is a timestamp. Unit: milliseconds.
   * 
   * @example
   * 1592886047000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ddosbgp-cn-oew1pjrk****
   */
  instanceId?: string;
  /**
   * @remarks
   * The mitigation plan type of the instance. Valid values:
   * 
   * - **0**: Professional.
   * - **1**: Enterprise.
   * 
   * @example
   * 1
   */
  instanceType?: string;
  /**
   * @remarks
   * The protocol type of the IP assets protected by the instance. Valid values:
   * 
   * - **IPv4**: IPv4 protocol.
   * - **IPv6**: IPv6 protocol.
   * 
   * @example
   * IPv4
   */
  ipType?: string;
  logExt?: string;
  /**
   * @remarks
   * The type of the cloud service associated with the instance. This parameter is not returned by default. It is returned only when the Anti-DDoS Origin instance is created by another cloud service, with the corresponding cloud service code.
   * 
   * Valid values:
   * 
   * - **gamebox**: The Anti-DDoS Origin instance is created by Game Security Box.
   * - **eip**: The Anti-DDoS Origin instance is created by an EIP with Anti-DDoS (Enhanced) enabled.
   * 
   * @example
   * gamebox
   */
  product?: string;
  /**
   * @remarks
   * The remark of the instance.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek3ccjxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - **1**: Normal.
   * - **2**: Expired.
   * - **3**: Released.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoProtectCondition: 'AutoProtectCondition',
      autoRenewal: 'AutoRenewal',
      blackholdingCount: 'BlackholdingCount',
      commodityType: 'CommodityType',
      coverageType: 'CoverageType',
      debtStatus: 'DebtStatus',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ipType: 'IpType',
      logExt: 'LogExt',
      product: 'Product',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProtectCondition: DescribeInstanceListResponseBodyInstanceListAutoProtectCondition,
      autoRenewal: 'boolean',
      blackholdingCount: 'string',
      commodityType: 'string',
      coverageType: 'number',
      debtStatus: 'number',
      expireTime: 'number',
      gmtCreate: 'number',
      instanceId: 'string',
      instanceType: 'string',
      ipType: 'string',
      logExt: 'string',
      product: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.autoProtectCondition && typeof (this.autoProtectCondition as any).validate === 'function') {
      (this.autoProtectCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the Anti-DDoS Origin instances.
   */
  instanceList?: DescribeInstanceListResponseBodyInstanceList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3BB4B523C4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of Anti-DDoS Origin instances returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': DescribeInstanceListResponseBodyInstanceList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

