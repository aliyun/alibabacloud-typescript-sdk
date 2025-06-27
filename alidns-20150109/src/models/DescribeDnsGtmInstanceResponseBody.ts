// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmInstanceResponseBodyConfig } from "./DescribeDnsGtmInstanceResponseBodyConfig";
import { DescribeDnsGtmInstanceResponseBodyUsedQuota } from "./DescribeDnsGtmInstanceResponseBodyUsedQuota";


export class DescribeDnsGtmInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the instance.
   */
  config?: DescribeDnsGtmInstanceResponseBodyConfig;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2020-10-14T06:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the instance was created.
   * 
   * @example
   * 1602656937000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2020-10-14T06:58Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the instance expires.
   * 
   * @example
   * 1602656937000
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * instanceid1
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method. Valid value:
   * 
   * *   Subscription: You can pay in advance for the use of resources.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 84314904-D047-4176-A0EC-256D7F68C7F5
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * resourcegroupid1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The total number of SMS notifications.
   * 
   * @example
   * 100
   */
  smsQuota?: number;
  /**
   * @remarks
   * The total number of detection tasks.
   * 
   * @example
   * 100
   */
  taskQuota?: number;
  /**
   * @remarks
   * The used quota.
   */
  usedQuota?: DescribeDnsGtmInstanceResponseBodyUsedQuota;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * versioncode1
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
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      smsQuota: 'SmsQuota',
      taskQuota: 'TaskQuota',
      usedQuota: 'UsedQuota',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeDnsGtmInstanceResponseBodyConfig,
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      paymentType: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      smsQuota: 'number',
      taskQuota: 'number',
      usedQuota: DescribeDnsGtmInstanceResponseBodyUsedQuota,
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

