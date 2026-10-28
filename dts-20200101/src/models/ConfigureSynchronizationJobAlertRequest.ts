// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSynchronizationJobAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter. This parameter will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The mobile phone numbers of the contacts to receive latency alerts. Separate multiple mobile phone numbers with commas (,).
   * 
   * Note
   * This parameter is currently only supported on the China site. Only mobile phone numbers in the Chinese mainland are supported, and you can specify up to 10 mobile phone numbers.
   * The international site does not support SMS alerts. You can only configure alert rules for DTS tasks by using CloudMonitor.
   * 
   * @example
   * 1361234****,1371234****
   */
  delayAlertPhone?: string;
  /**
   * @remarks
   * Specifies whether to monitor the latency status. Valid values:
   * 
   * - **enable**: yes
   * - **disable**: no
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
   * The threshold for triggering a latency alert. Unit: seconds. The value must be an integer. You can set the threshold based on your business requirements. Set the threshold to 10 seconds or more to avoid latency fluctuations caused by network issues or database loads.
   * > This parameter is required when the **DelayAlertStatus** parameter is set to **enable**.
   * 
   * @example
   * 10
   */
  delayOverSeconds?: string;
  /**
   * @remarks
   * The mobile phone numbers of the contacts to receive abnormal status alerts. Separate multiple mobile phone numbers with commas (,).
   * 
   * Note
   * This parameter is currently only supported on the China site. Only mobile phone numbers in the Chinese mainland are supported, and you can specify up to 10 mobile phone numbers.
   * The international site does not support SMS alerts. You can only configure alert rules for DTS tasks by using CloudMonitor.
   * 
   * @example
   * 1361234****,1371234****
   */
  errorAlertPhone?: string;
  /**
   * @remarks
   * Specifies whether to monitor the abnormal status. Valid values:
   * 
   * - **enable**: yes
   * - **disable**: no
   * 
   * > - Default value: **enable**.
   * - You must specify at least one of this parameter and the **DelayAlertStatus** parameter.
   * - After the abnormal status monitoring feature is enabled, an alert is triggered if an exception is detected.
   * 
   * @example
   * enable
   */
  errorAlertStatus?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID. Specify this parameter to indicate the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * The synchronization direction. Valid values:
   * 
   * - **Forward**: forward
   * - **Reverse**: reverse
   * 
   * > Default value: **Forward**.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Instance ID of the data synchronization instance. You can query instance ID by calling the DescribeSynchronizationJobs operation.
   * 
   * This parameter is required.
   * 
   * @example
   * dtskxz1170c10p****
   */
  synchronizationJobId?: string;
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
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
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
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

