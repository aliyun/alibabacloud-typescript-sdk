// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal before the instance expires.
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
   * - If `PeriodUnit` is set to `Year`, valid values of `Duration` are: {"1", "2", "3", "4", "5"}.
   * - If `PeriodUnit` is set to `Month`, valid values of `Duration` are: {"1", "2", "3", "6", "12", "24", "36", "48", "60"}.
   * - If `PeriodUnit` is set to `Week`, valid values of `Duration` are: {"1", "2", "3", "4"}.
   * 
   * 
   * 
   * <props="intl">
   * - If `PeriodUnit` is set to `Year`, valid values of `Duration` are: {"1", "2", "3", "4", "5"}.
   * - If `PeriodUnit` is set to `Month`, valid values of `Duration` are: {"1", "2", "3", "6", "12", "24", "36", "48", "60"}.
   * 
   * 
   * 
   * <props="partner">
   * - If `PeriodUnit` is set to `Year`, valid values of `Duration` are: {"1", "2", "3", "4", "5"}.
   * - If `PeriodUnit` is set to `Month`, valid values of `Duration` are: {"1", "2", "3", "6", "12", "24", "36", "48", "60"}.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The instance IDs. You can specify up to 100 subscription instance IDs at a time. Separate multiple instance IDs with commas (,).
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
   * The unit of the renewal duration specified by the `Duration` parameter. Valid values:
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
   * The region ID of the instances. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The auto-renewal status of ECS instance. Valid values:
   * 
   * - AutoRenewal: enables auto-renewal.
   * 
   * - Normal: disables auto-renewal.
   * 
   * - NotRenewal: does not renew ECS instance. After this value is specified, the system no longer sends expiration notifications. Only a non-renewal reminder is sent three days before ECS instance expires. You can change the value for an instance from NotRenewal to `Normal` and then manually renew ECS instance or configure auto-renewal.
   * 
   * > The `RenewalStatus` parameter takes precedence over the `AutoRenew` parameter. If `RenewalStatus` is not specified, the `AutoRenew` parameter is used by default.
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

