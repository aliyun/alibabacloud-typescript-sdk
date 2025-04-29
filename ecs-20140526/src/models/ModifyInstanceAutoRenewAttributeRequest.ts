// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period of the instance.
   * 
   * *   Valid values of `Duration` when `PeriodUnit` is set to `Year`: 1, 2, 3, 4, and 5.
   * *   Valid values of `Duration` when `PeriodUnit` is set to `Month`: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the instance. You can specify up to 100 subscription instance IDs. Separate the instance IDs with commas (,).
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
   * The unit of the renewal period (`Duration`). Valid values:
   * 
   * *   Month (default)
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * *   AutoRenewal: Auto-renewal is enabled for the instance.
   * *   Normal: Auto-renewal is disabled for the instance.
   * *   NotRenewal: The instance is not renewed. The system no longer sends an expiration notification but sends only a renewal notification three days before the instance expires. You can change the value of this parameter from NotRenewal to `Normal` for an instance, and then manually renew the instance. Alternatively, you can set the RenewalStatus parameter to AutoRenewal.
   * 
   * > `RenewalStatus` takes precedence over `AutoRenew`. If you do not specify `RenewalStatus`, `AutoRenew` is used by default.
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

