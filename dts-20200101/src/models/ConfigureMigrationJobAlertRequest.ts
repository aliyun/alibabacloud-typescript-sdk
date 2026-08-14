// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureMigrationJobAlertRequest extends $dara.Model {
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
   * The mobile phone numbers of contacts for latency alerts. Separate multiple mobile phone numbers with commas (,).
   * 
   * This parameter is supported only on the China site (aliyun.com) and supports only Chinese mainland mobile phone numbers. You can specify up to 10 mobile phone numbers.
   * The China site does not support phone alerts. You can configure alert rules for DTS tasks only in the CloudMonitor console.
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
   * The threshold for triggering a latency alert. Unit: seconds. The value must be an integer. Set the threshold based on your business requirements. To avoid latency fluctuations caused by network conditions or database loads, set the threshold to 10 seconds or more.
   * > This parameter is required when **DelayAlertStatus** is set to **enable**.
   * 
   * @example
   * 10
   */
  delayOverSeconds?: string;
  /**
   * @remarks
   * The mobile phone numbers of contacts for exception alerts. Separate multiple mobile phone numbers with commas (,).
   * 
   * This parameter is supported only on the China site (aliyun.com) and supports only Chinese mainland mobile phone numbers. You can specify up to 10 mobile phone numbers.
   * The international site does not support phone alerts. You can configure alert rules for DTS tasks only in the CloudMonitor console.
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
   * - After you enable the exception status monitoring feature, an alert is triggered when an exception is detected.
   * 
   * @example
   * enable
   */
  errorAlertStatus?: string;
  /**
   * @remarks
   * Instance ID of the data migration instance. You can call the **DescribeMigrationJobs** operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtslb9113qq11n****
   */
  migrationJobId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region where the data migration instance resides. For more information, see the supported region list.
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
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      delayAlertPhone: 'DelayAlertPhone',
      delayAlertStatus: 'DelayAlertStatus',
      delayOverSeconds: 'DelayOverSeconds',
      errorAlertPhone: 'ErrorAlertPhone',
      errorAlertStatus: 'ErrorAlertStatus',
      migrationJobId: 'MigrationJobId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
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
      migrationJobId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

