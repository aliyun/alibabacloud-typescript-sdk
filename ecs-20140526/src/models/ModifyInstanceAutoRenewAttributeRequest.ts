// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically renew the instance before it expires.
   * 
   * - true: enables auto-renewal.
   * - false: disables auto-renewal.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration of the instance.
   * 
   * <props="china">
   * - When `PeriodUnit` is set to `Year`, the valid values of `Duration` are: {"1", "2", "3", "4", "5"}
   * - When `PeriodUnit` is set to `Month`, the valid values of `Duration` are: {"1", "2", "3", "6", "12", "24", "36", "48", "60"}
   * - When `PeriodUnit` is set to `Week`, the valid values of `Duration` are: {"1", "2", "3", "4"}
   * 
   * 
   * 
   * <props="intl">
   * - When `PeriodUnit` is set to `Year`, the valid values of `Duration` are: {"1", "2", "3", "4", "5"}
   * - When `PeriodUnit` is set to `Month`, the valid values of `Duration` are: {"1", "2", "3", "6", "12", "24", "36", "48", "60"}
   * 
   * 
   * 
   * <props="partner">
   * - When `PeriodUnit` is set to `Year`, the valid values of `Duration` are: {"1", "2", "3", "4", "5"}
   * - When `PeriodUnit` is set to `Month`, the valid values of `Duration` are: {"1", "2", "3", "6", "12", "24", "36", "48", "60"}
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Instance ID. You can specify up to 100 subscription instances at a time. Separate multiple instance IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****,i-bp67acfmxazb4pi****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the renewal duration, that is, the unit of the `Duration` parameter. Valid values:
   * 
   * <props="china">
   * - Week
   * - Month (default)
   * - Year
   * 
   * 
   * 
   * <props="intl">
   * - Month (default)
   * - Year
   * 
   * 
   * 
   * <props="partner">
   * - Month (default)
   * - Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The auto-renewal status of the instance. Valid values:
   * 
   * - AutoRenewal: enables auto-renewal.
   * 
   * - Normal: disables auto-renewal.
   * 
   * - NotRenewal: does not renew the instance. After this value is set, the system no longer sends expiration reminders and only sends a non-renewal reminder three days before the instance expires. ECS instances that are set to not renew can be changed to pending renewal (`Normal`), and then manually renewed or set to auto-renewal.
   * 
   * > The `RenewalStatus` parameter takes precedence over the `AutoRenew` parameter. If the `RenewalStatus` parameter is not specified, the `AutoRenew` parameter takes effect by default.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      duration: 'Duration',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      duration: 'number',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

