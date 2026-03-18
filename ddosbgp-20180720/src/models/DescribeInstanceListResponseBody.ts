// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceListResponseBodyInstanceListAutoProtectCondition extends $dara.Model {
  /**
   * @remarks
   * Events which result in auto binding.
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
   * The event that triggers automatic association. Valid values:
   * 
   * *   **any**: The instance is automatically associated with an object based on traffic scrubbing events or blackhole filtering events.
   * *   **clean**: The instance is automatically associated with an object based on traffic scrubbing events.
   * *   **blackhole**: The instance is automatically associated with an object based on blackhole filtering events.
   */
  autoProtectCondition?: DescribeInstanceListResponseBodyInstanceListAutoProtectCondition;
  /**
   * @remarks
   * The time when the instance expires. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The type of the instance.
   * 
   * *   **ddos_ddosorigin_public_cn**: Anti-DDoS Origin 2.0 (Pay-as-you-go) on the China site (aliyun.com).
   * *   **ddos_ddosorigin_public_intl**: Anti-DDoS Origin 2.0 (Pay-as-you-go) on the International site (alibabacloud.com).
   * 
   * @example
   * 0
   */
  blackholdingCount?: string;
  /**
   * @remarks
   * The condition that triggers automatic association of the instance with an object.
   * 
   * @example
   * ddos_ddosorigin_public_cn
   */
  commodityType?: string;
  /**
   * @remarks
   * Indicates whether overdue payments exist. Valid values:
   * 
   * *   **0**: Overdue payments do not exist.
   * *   **1**: Overdue payments exist.
   * 
   * @example
   * 1
   */
  coverageType?: number;
  /**
   * @remarks
   * The events that trigger automatic association.
   * 
   * @example
   * 0
   */
  debtStatus?: number;
  /**
   * @remarks
   * The time when the instance was purchased. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1640275200000
   */
  expireTime?: number;
  /**
   * @remarks
   * The mitigation plan of the instance. Valid values:
   * 
   * *   **0**: the Professional mitigation plan
   * *   **1**: the Enterprise mitigation plan
   * 
   * @example
   * 1592886047000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The number of protected public IP addresses for which blackhole filtering is triggered.
   * 
   * >  You can call the [DeleteBlackhole](https://help.aliyun.com/document_detail/118692.html) operation to deactivate blackhole filtering for a protected IP address.
   * 
   * @example
   * ddosbgp-cn-oew1pjrk****
   */
  instanceId?: string;
  /**
   * @remarks
   * The application scope of the instance.
   * 
   * *   **1**: The instance supports public IP addresses in all regions.
   * *   **2**: The instance supports public IP addresses in regions in the Chinese mainland.
   * *   **3**: The instance supports public IP addresses in regions outside the Chinese mainland.
   * *   **4**: The instance supports public IP addresses in a region in or outside the Chinese mainland.
   * 
   * @example
   * 1
   */
  instanceType?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * IPv4
   */
  ipType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gamebox
   */
  product?: string;
  /**
   * @remarks
   * The type of the cloud service that is associated with the Anti-DDoS Origin instance By default, this parameter is not returned. If the Anti-DDoS Origin instance is created by using a different cloud service, the code of the cloud service is returned.
   * 
   * Valid values:
   * 
   * *   **gamebox**: The Anti-DDoS Origin instance is created by using Game Security Box.
   * *   **eip**: The Anti-DDoS Origin instance is created by using an elastic IP address (EIP) for which Anti-DDoS (Enhanced Edition) is enabled.
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
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The details about the Anti-DDoS Origin instances.
   */
  instanceList?: DescribeInstanceListResponseBodyInstanceList[];
  /**
   * @remarks
   * The details about the Anti-DDoS Origin instance.
   * 
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3BB4B523C4
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the Anti-DDoS Origin instances.
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

