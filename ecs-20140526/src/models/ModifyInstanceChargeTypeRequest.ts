// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - true: Automatic payment is enabled. Make sure that your account balance is sufficient. If your account balance is insufficient, an abnormal order is generated and can only be canceled.
   * 
   * - false: Only an order is generated and no payment is made.
   * 
   * Default value: true.
   * 
   * > If the balance of your payment method is insufficient, you can set the AutoPay parameter to false. In this case, an unpaid order is generated, and you can log on to the ECS console to complete the payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and make sure that the value is unique across different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only perform a dry run for this request. Valid values:
   * 
   * - true: send a dry run request. The system does not query resources. The system checks whether your AccessKey pair is valid, whether the Resource Access Management (RAM) user has the required authorization, and whether required parameters are specified. If the dry run fails, the corresponding error code is returned. If the dry run succeeds, the `DryRunOperation` error code is returned.
   * 
   * - false: send a normal request. If the dry run succeeds, the 2xx HTTP status code is returned and resources are queried.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to change the billing method of all pay-as-you-go data disks attached to the instance to subscription. Valid values:
   * 
   * - true
   * - false
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
   * - PrePaid: switches the billing method of the instance from pay-as-you-go to subscription.
   * 
   * - PostPaid: switches the billing method of the instance from subscription to pay-as-you-go.
   * 
   * Default value: PrePaid.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance IDs. The value can be a JSON array that consists of up to 20 instance IDs. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["i-bp67acfmxazb4p****","i-bp67acfmxazb4d****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * Specifies whether to return the order fee details when you switch the billing method from subscription to pay-as-you-go. Valid values:
   * 
   * - true
   * - false
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
   * The subscription period. If the host of the ECS instance is a dedicated host (DDH), the value cannot exceed the subscription period of the DDH. Valid values:
   * 
   * <props="china">
   * - When `PeriodUnit` is set to `Week`, valid values of `Period` are 1, 2, 3, and 4.
   * - When `PeriodUnit` is set to `Month`, valid values of `Period` are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * 
   * <props="intl">When `PeriodUnit` is set to `Month`, valid values of `Period` are 1, 2, 3, 4, 5, 6, 7, 8, 9, and 12.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period, which is the unit of the `Period` parameter. Valid values:
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

