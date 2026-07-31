// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDedicatedHostAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription dedicated host. Valid values:
   * 
   * - true: Enables auto-renewal for the subscription dedicated host.
   * 
   * - false: Disables auto-renewal for the subscription dedicated host.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the dedicated host to follow the subscription ECS instances on the host.
   * 
   * If your dedicated host (DDH) uses the subscription billing method and the subscription ECS instances on the DDH have auto-renewal enabled, you can use this parameter to configure the DDH to automatically renew along with the ECS instances. When an ECS instance on the DDH is automatically renewed, if the DDH expires earlier than the new expiration time of the ECS instance, the DDH is also automatically renewed. The principle of DDH auto-renewal following ECS instances is as follows:
   * 
   * The DDH automatically determines the new expiration time of the corresponding ECS instance, and then selects the minimum renewal period that is greater than the ECS instance expiration time and meets the DDH renewal cycle. For details about the supported renewal cycles of DDHs, see the metric descriptions of the PeriodUnit and Duration parameters.
   * 
   * Example: A subscription DDH expires on January 15 of the current year. After a subscription ECS instance on the DDH is automatically renewed, the ECS instance expiration is extended to November 15 of the current year. The DDH lifecycle is 10 months shorter than the ECS instance lifecycle. In this case, the DDH selects the minimum renewal period that is greater than 10 months and meets the DDH renewal cycle, which is 12 months (PeriodUnit=Month and Duration=12).
   * 
   * Valid values:
   * 
   * - AutoRenewWithEcs: Enables auto-renewal following the subscription ECS instances on the dedicated host.
   * - StopRenewWithEcs: Disables auto-renewal following the subscription ECS instances on the dedicated host.
   * - NoOperation: Does not change the current settings of the dedicated host.
   * 
   * > If you set this parameter to AutoRenewWithEcs, make sure that auto-renewal is enabled for the dedicated host (AutoRenew=true). Otherwise, this parameter only changes the parameter value, and the actual auto-renewal feature following ECS instances does not take effect.
   * 
   * Default value: NoOperation.
   * 
   * @example
   * StopRenewWithEcs
   */
  autoRenewWithEcs?: string;
  /**
   * @remarks
   * The IDs of dedicated hosts. You can specify up to 100 subscription dedicated host IDs. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * dh-bp165p6xk2tlw61e****
   */
  dedicatedHostIds?: string;
  /**
   * @remarks
   * The renewal period. Valid values:
   * 
   * <props="china">
   * - If PeriodUnit is set to Week: 1, 2, 3, and 4.
   * - If PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * - If PeriodUnit is set to Year: 1, 2, 3, 4, and 5.
   * 
   * 
   * 
   * <props="intl">
   * - If PeriodUnit is set to Month: 1 and 12.
   * - If PeriodUnit is set to Year: 1 and 12.
   * 
   * @example
   * 1
   */
  duration?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the renewal period. Valid values:
   * 
   * <props="china">
   * - Week
   * - Month
   * - Year
   * 
   * 
   * 
   * <props="intl">
   * - Month
   * - Year
   * 
   * 
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the dedicated host.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription dedicated host. The RenewalStatus parameter takes precedence over the AutoRenew parameter. Valid values:
   * 
   * - AutoRenewal: Enables auto-renewal.
   * 
   * - Normal: Disables auto-renewal but the system still sends expiration notifications.
   * 
   * - NotRenewal: Disables auto-renewal and the system does not send expiration notifications. Three days before expiration, the system automatically sends a non-renewal notification. You can change the value of this parameter to Normal for a dedicated host, and then manually renew the host by calling [RenewDedicatedHosts](https://help.aliyun.com/document_detail/134250.html) or set the value to AutoRenewal to enable auto-renewal.
   * 
   * @example
   * Normal
   */
  renewalStatus?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewWithEcs: 'AutoRenewWithEcs',
      dedicatedHostIds: 'DedicatedHostIds',
      duration: 'Duration',
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
      autoRenewWithEcs: 'string',
      dedicatedHostIds: 'string',
      duration: 'number',
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

