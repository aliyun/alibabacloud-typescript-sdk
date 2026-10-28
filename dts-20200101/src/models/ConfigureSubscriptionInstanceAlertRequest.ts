// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSubscriptionInstanceAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter. This parameter will be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The mobile phone numbers of the contacts to receive latency alerts. Separate multiple mobile phone numbers with commas (,).
   * > - This parameter is supported only on the Alibaba Cloud China site. Only mobile phone numbers in the Chinese mainland are supported, and you can specify up to 10 mobile phone numbers.
   * - The Alibaba Cloud International site does not support mobile phone alerts. You can only [configure alert rules for DTS tasks by using CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  delayAlertPhone?: string;
  /**
   * @remarks
   * Specifies whether to monitor the latency status. Valid values:
   * 
   * - **enable**: Yes.
   * - **disable**: No.
   * 
   * > - Default value: **enable**.
   * - You must specify at least one of the **DelayAlertStatus** and **ErrorAlertStatus** parameters.
   * 
   * @example
   * enable
   */
  delayAlertStatus?: string;
  /**
   * @remarks
   * The threshold for triggering a latency alert. Unit: seconds. The value must be an integer. You can set the threshold based on your business requirements. Set the threshold to 10 seconds or more to avoid latency fluctuations caused by network or database loads.
   * > This parameter is required when the **DelayAlertStatus** parameter is set to **enable**.
   * 
   * @example
   * 10
   */
  delayOverSeconds?: string;
  /**
   * @remarks
   * The mobile phone numbers of the contacts to receive abnormal status alerts. Separate multiple mobile phone numbers with commas (,).
   * > - This parameter is supported only on the Alibaba Cloud China site. Only mobile phone numbers in the Chinese mainland are supported, and you can specify up to 10 mobile phone numbers.
   * - The Alibaba Cloud International site does not support mobile phone alerts. You can only [configure alert rules for DTS tasks by using CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  errorAlertPhone?: string;
  /**
   * @remarks
   * Specifies whether to monitor the abnormal status. Valid values:
   * 
   * - **enable**: Yes.
   * - **disable**: No.
   * 
   * > - Default value: **enable**.
   * - You must specify at least one of the **ErrorAlertStatus** and **DelayAlertStatus** parameters.
   * - After the abnormal status monitoring feature is enabled, an alert is triggered if an exception is detected.
   * 
   * @example
   * enable
   */
  errorAlertStatus?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID of the change tracking instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
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

