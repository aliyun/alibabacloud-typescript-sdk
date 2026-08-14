// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSubscriptionInstanceAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The mobile phone numbers of contacts for latency alerts. Separate multiple mobile phone numbers with commas (,).
   * >- This parameter is supported only on the China site (aliyun.com). Only Chinese mainland mobile phone numbers are supported, and you can specify up to 10 mobile phone numbers.
   * - China site (Chinese mainland) does not support Chinese mainland mobile phone alerts. You can only [configure alert rules for DTS tasks in CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  delayAlertPhone?: string;
  /**
   * @remarks
   * Specifies whether to monitor the latency status. Valid values:
   * 
   * - **enable**: yes.
   * - **disable**: no.
   * 
   * > - Default value: **enable**.
   * - You must specify at least one of this parameter and the **ErrorAlertStatus** parameter.
   * 
   * @example
   * enable
   */
  delayAlertStatus?: string;
  /**
   * @remarks
   * The threshold for triggering a latency alert. Unit: seconds. The value must be an integer. Set the threshold based on your business requirements. To avoid alert fluctuations caused by network issues or database loads, set the threshold to 10 seconds or more.
   * > This parameter is required when **DelayAlertStatus** is set to **enable**.
   * 
   * @example
   * 10
   */
  delayOverSeconds?: string;
  /**
   * @remarks
   * The mobile phone numbers of contacts for exception alerts. Separate multiple mobile phone numbers with commas (,).
   * >- This parameter is supported only on the China site (aliyun.com). Only Chinese mainland mobile phone numbers are supported, and you can specify up to 10 mobile phone numbers.
   * - China site (Chinese mainland) does not support Chinese mainland mobile phone alerts. You can only [configure alert rules for DTS tasks in CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  errorAlertPhone?: string;
  /**
   * @remarks
   * Specifies whether to monitor the exception status. Valid values:
   * 
   * - **enable**: yes.
   * - **disable**: no.
   * 
   * > - Default value: **enable**.
   * - You must specify at least one of this parameter and the **DelayAlertStatus** parameter.
   * - After you enable exception status monitoring, an alert is triggered when an exception is detected.
   * 
   * @example
   * enable
   */
  errorAlertStatus?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region where the change tracking instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call the DescribeSubscriptionInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsl8zl9ek6292****
   */
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      delayAlertPhone: 'DelayAlertPhone',
      delayAlertStatus: 'DelayAlertStatus',
      delayOverSeconds: 'DelayOverSeconds',
      errorAlertPhone: 'ErrorAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      delayAlertPhone: 'string',
      delayAlertStatus: 'string',
      delayOverSeconds: 'string',
      errorAlertPhone: 'string',
      errorAlertStatus: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

