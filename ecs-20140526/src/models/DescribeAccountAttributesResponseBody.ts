// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem extends $dara.Model {
  /**
   * @remarks
   * The number of privilege attributes in the account.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The data disk category. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: enhanced SSD (ESSD)
   * 
   * @example
   * cloud_ssd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The expiration time of a privilege. This parameter is returned only when the account privilege has an expiration time. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-01T12:30:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The value of the resource quota in the specified region. Valid values:
   * 
   * The values returned for the resource quotas to which the following AttributeName values correspond are 0 or positive integers:
   * 
   * *   max-security-groups
   * *   max-elastic-network-interfaces
   * *   max-postpaid-instance-vcpu-count
   * *   max-spot-instance-vcpu-count
   * *   used-postpaid-instance-vcpu-count
   * *   used-spot-instance-vcpu-count
   * *   max-postpaid-yundisk-capacity (the value is deprecated)
   * *   used-postpaid-yundisk-capacity (the value is deprecated)
   * *   max-dedicated-hosts
   * *   max-axt-command-count
   * *   max-axt-invocation-daily
   * *   max-cloud-assistant-activation-count
   * 
   * When AttributeName is set to supported-postpay-instance-types, instance types are returned. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * When AttributeName is set to real-name-authentications, one of the following values is returned:
   * 
   * *   yes
   * *   none
   * *   unnecessary
   * 
   * When AttributeName is set to instance-network-type, one of the following values is returned:
   * 
   * *   vpc
   * *   classic
   * 
   * @example
   * 800
   */
  value?: string;
  /**
   * @remarks
   * The ID of the zone in which the resource resides.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      diskCategory: 'DiskCategory',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      value: 'Value',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      diskCategory: 'string',
      expiredTime: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      value: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues extends $dara.Model {
  valueItem?: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem[];
  static names(): { [key: string]: string } {
    return {
      valueItem: 'ValueItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueItem: { 'type': 'array', 'itemType': DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem },
    };
  }

  validate() {
    if(Array.isArray(this.valueItem)) {
      $dara.Model.validateArray(this.valueItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem extends $dara.Model {
  /**
   * @remarks
   * The type of the resource quota in the specified region. Valid values:
   * 
   * *   instance-network-type: the available network types.
   * *   max-security-groups: the maximum number of security groups.
   * *   max-elastic-network-interfaces: the maximum number of ENIs.
   * *   max-postpaid-instance-vcpu-count: the maximum number of vCPUs for pay-as-you-go instances.
   * *   max-spot-instance-vcpu-count: the maximum number of vCPUs for spot instances.
   * *   used-postpaid-instance-vcpu-count: the number of vCPUs that were allocated to pay-as-you-go instances.
   * *   used-spot-instance-vcpu-count: the number of vCPUs that were allocated to spot instances.
   * *   max-postpaid-yundisk-capacity: the maximum capacity of pay-as-you-go data disks. (The value is deprecated.)
   * *   used-postpaid-yundisk-capacity: the capacity of pay-as-you-go data disks that were created. (The value is deprecated.)
   * *   max-dedicated-hosts: the maximum number of dedicated hosts.
   * *   supported-postpaid-instance-types: the instance types of pay-as-you-go I/O optimized instances.
   * *   max-axt-command-count: the maximum number of Cloud Assistant commands.
   * *   max-axt-invocation-daily: the maximum number of Cloud Assistant command executions per day.
   * *   real-name-authentication: whether the account completed the real-name verification.
   * *   max-cloud-assistant-activation-count: the maximum number of activation codes that can be created to use to register managed instances.
   * 
   * @example
   * max-security-groups
   */
  attributeName?: string;
  /**
   * @remarks
   * The values of resource quotas.
   */
  attributeValues?: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValues: 'AttributeValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValues: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues,
    };
  }

  validate() {
    if(this.attributeValues && typeof (this.attributeValues as any).validate === 'function') {
      (this.attributeValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseBodyAccountAttributeItems extends $dara.Model {
  accountAttributeItem?: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem[];
  static names(): { [key: string]: string } {
    return {
      accountAttributeItem: 'AccountAttributeItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttributeItem: { 'type': 'array', 'itemType': DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem },
    };
  }

  validate() {
    if(Array.isArray(this.accountAttributeItem)) {
      $dara.Model.validateArray(this.accountAttributeItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about account privileges in the specified region.
   */
  accountAttributeItems?: DescribeAccountAttributesResponseBodyAccountAttributeItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8CE45CD5-31FB-47C2-959D-CA8144CE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountAttributeItems: 'AccountAttributeItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttributeItems: DescribeAccountAttributesResponseBodyAccountAttributeItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountAttributeItems && typeof (this.accountAttributeItems as any).validate === 'function') {
      (this.accountAttributeItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

