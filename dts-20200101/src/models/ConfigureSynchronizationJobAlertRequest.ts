// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSynchronizationJobAlertRequest extends $dara.Model {
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
   * The mobile phone numbers of contacts for latency alerts. Separate multiple phone numbers with commas (,).
   * 
   * Note
   * This parameter is supported only on the China site (aliyun.com) and only Chinese mainland phone numbers are supported. You can specify up to 10 phone numbers.
   * China site (Chinese mainland) does not support phone alerts on the China site. You can configure alert rules for DTS tasks only in the CloudMonitor console.
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
   * The threshold for triggering a latency alert. Unit: seconds. The value must be an integer. Set the threshold based on your business requirements. We recommend that you set the threshold to 10 seconds or more to avoid alert fluctuations caused by network issues or database loads.
   * > This parameter is required when **DelayAlertStatus** is set to **enable**.
   * 
   * @example
   * 10
   */
  delayOverSeconds?: string;
  /**
   * @remarks
   * The mobile phone numbers of contacts for exception alerts. Separate multiple phone numbers with commas (,).
   * 
   * Note
   * This parameter is supported only on the China site (aliyun.com) and only Chinese mainland phone numbers are supported. You can specify up to 10 phone numbers.
   * The China site does not support phone alerts on the international site (alibabacloud.com). You can configure alert rules for DTS tasks only in the CloudMonitor console.
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
   * The region ID. Specify this parameter to indicate the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * The synchronization direction. Valid values:
   * 
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > Default value: **Forward**.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Instance ID of the data synchronization instance. You can call the DescribeSynchronizationJobs operation to query instance ID.
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

