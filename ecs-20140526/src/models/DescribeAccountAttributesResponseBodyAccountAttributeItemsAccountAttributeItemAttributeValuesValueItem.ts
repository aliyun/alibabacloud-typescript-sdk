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

