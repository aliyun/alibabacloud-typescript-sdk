// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - true: enables automatic payment. Make sure that your account balance is sufficient. If your account balance is insufficient, abnormal orders are generated, and you can only cancel the orders.
   * 
   * - false: generates the order without charging.
   * 
   * Default value: true.
   * 
   * > If your payment method has an insufficient balance, you can set AutoPay to false. In this case, an unpaid order is generated. You can log on to the ECS console to complete the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: sends a check request without querying resource status. The check items include whether your AccessKey pair is valid, whether the Resource Access Management (RAM) user is granted the required authorization, and whether the required parameters are specified. If the check fails, the corresponding error message is returned. If the check succeeds, the DryRunOperation error code is returned.
   * 
   * - false: sends a normal request. If the request passes the check, a 2XX HTTP status code is returned and the operation is performed.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to convert all pay-as-you-go data disks that are attached to the instance to subscription data disks.
   * 
   * - true: Converts all pay-as-you-go data disks to subscription data disks.
   * - false: Does not convert pay-as-you-go data disks to subscription data disks.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  includeDataDisks?: boolean;
  /**
   * @remarks
   * The target billing method of the instance. Valid values:
   * 
   * - PrePaid: transforms a pay-as-you-go instance to a subscription instance.
   * 
   * - PostPaid: transforms a subscription instance to a pay-as-you-go instance.
   * 
   * Default value: PrePaid.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance IDs. The value can be a JSON array that consists of up to 20 instance IDs. Separate the IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["i-bp67acfmxazb4p****","i-bp67acfmxazb4d****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * Specifies whether to return order fee details when the billing method is transformed from subscription to pay-as-you-go. Valid values:
   * 
   * - true: Returns fee details.
   * - false: Does not return fee details.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isDetailFee?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription renewal period. If the ECS instance is hosted on a dedicated host, the value cannot exceed the subscription period of the dedicated host. Valid values:
   * 
   * <props="china">
   * - If PeriodUnit is set to Week, valid values of Period: 1, 2, 3, and 4.
   * - If PeriodUnit is set to Month, valid values of Period: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * 
   * <props="intl">If PeriodUnit is set to Month, valid values of Period: 1, 2, 3, 4, 5, 6, 7, 8, 9, and 12.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal period. This parameter specifies the unit of the Period parameter. Valid values:
   * 
   * <props="china">
   * - Week
   * - Month
   * - Year
   * 
   * <props="intl">Month
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      includeDataDisks: 'IncludeDataDisks',
      instanceChargeType: 'InstanceChargeType',
      instanceIds: 'InstanceIds',
      isDetailFee: 'IsDetailFee',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      includeDataDisks: 'boolean',
      instanceChargeType: 'string',
      instanceIds: 'string',
      isDetailFee: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
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

