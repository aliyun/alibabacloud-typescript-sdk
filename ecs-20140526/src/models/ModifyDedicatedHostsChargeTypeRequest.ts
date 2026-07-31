// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDedicatedHostsChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete automatic payment. Valid values:
   * - true: Automatic payment is automatically completed. Make sure that your account balance is sufficient. Otherwise, abnormal orders are generated, and you can only cancel the orders.
   * - false: An order is generated but no payment is made.
   * 
   * Default value: true.
   * 
   * > If your payment method has insufficient balance, set AutoPay to false. An unpaid order is generated, and you can pay for the order on your own.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The new billable methods of the dedicated hosts. Valid values:
   * - PrePaid: transforms the billing method from pay-as-you-go to subscription.
   * - PostPaid: transforms the billing method from subscription to pay-as-you-go.
   * 
   * Default value: PrePaid.
   * 
   * @example
   * PrePaid
   */
  dedicatedHostChargeType?: string;
  /**
   * @remarks
   * The IDs of dedicated hosts. The value can be a JSON array that consists of up to 20 dedicated host IDs. Separate the IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["dh-bp181e5064b5sotr****","dh-bp18064b5sotrr9c****"]
   */
  dedicatedHostIds?: string;
  /**
   * @remarks
   * Specifies whether to return the billing details when the billing method is changed from subscription to pay-as-you-go.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  detailFee?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * - true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - false: performs a dry run and sends the request. If the request passes the dry run, a 2XX HTTP status code is returned and the operation is performed.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription renewal period. Valid values:
   * 
   * - If you set PeriodUnit to Week, the valid values of Period are 1, 2, 3, and 4.
   * - If you set PeriodUnit to Month, the valid values of Period are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal period, which is the unit of the Period parameter. Valid values:
   * - Week
   * - Month
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the dedicated hosts. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      dedicatedHostChargeType: 'DedicatedHostChargeType',
      dedicatedHostIds: 'DedicatedHostIds',
      detailFee: 'DetailFee',
      dryRun: 'DryRun',
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
      dedicatedHostChargeType: 'string',
      dedicatedHostIds: 'string',
      detailFee: 'boolean',
      dryRun: 'boolean',
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

