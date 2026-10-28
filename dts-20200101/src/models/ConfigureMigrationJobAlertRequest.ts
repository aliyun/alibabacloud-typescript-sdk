// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureMigrationJobAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter. This parameter is about to be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The mobile phone numbers of the contacts to receive latency alerts. Separate multiple mobile phone numbers with commas (,).
   * 
   * This parameter is supported only on the China site. Only mobile phone numbers in the Chinese mainland are supported, and you can specify up to 10 mobile phone numbers.
   * The international site does not support mobile phone alerts. You can only configure alert rules for DTS tasks by using CloudMonitor.
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
   * - You must specify at least one of this parameter and the **ErrorAlertStatus** parameter.
   * 
   * @example
   * enable
   */
  delayAlertStatus?: string;
  /**
   * @remarks
   * The threshold for triggering a latency alert. The value must be an integer in seconds. You can set the threshold based on your business requirements. Set the threshold to 10 seconds or more to avoid alert fluctuations caused by network issues or database loads.
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
   * This parameter is supported only on the China site. Only mobile phone numbers in the Chinese mainland are supported, and you can specify up to 10 mobile phone numbers.
   * The international site does not support mobile phone alerts. You can only configure alert rules for DTS tasks by using CloudMonitor.
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
   * - You must specify at least one of this parameter and the **DelayAlertStatus** parameter.
   * - After the abnormal status monitoring feature is enabled, an alert is triggered if an exception is detected.
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
   * The ID of the region where the data migration instance resides. For more information, see the list of supported regions.
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

