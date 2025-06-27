// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig } from "./DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig";
import { DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota } from "./DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota";


export class DescribeDnsGtmInstancesResponseBodyGtmInstances extends $dara.Model {
  /**
   * @remarks
   * The configurations of the instance.
   */
  config?: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-14T06:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1602658709000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-14T06:58Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the instance expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1602658709000
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method of the GTM instance. Valid value:
   * 
   * *   Subscription.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * resourceGroupid123
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The total number of Short Message Service (SMS) notifications.
   * 
   * @example
   * 1
   */
  smsQuota?: number;
  /**
   * @remarks
   * The total number of detection tasks.
   * 
   * @example
   * 1
   */
  taskQuota?: number;
  /**
   * @remarks
   * The used quota.
   */
  usedQuota?: DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * testVersion1
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      paymentType: 'PaymentType',
      resourceGroupId: 'ResourceGroupId',
      smsQuota: 'SmsQuota',
      taskQuota: 'TaskQuota',
      usedQuota: 'UsedQuota',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig,
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      paymentType: 'string',
      resourceGroupId: 'string',
      smsQuota: 'number',
      taskQuota: 'number',
      usedQuota: DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota,
      versionCode: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.usedQuota && typeof (this.usedQuota as any).validate === 'function') {
      (this.usedQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

