// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete the payment. Valid values:
   * 
   * *   true (default): The payment is automatically completed. Maintain sufficient balance in your account. Otherwise, your order becomes invalid and must be canceled.
   * *   false: An order is generated but no payment is made. If your account balance is insufficient, you can set AutoPay to false to generate an unpaid order. Then, log on to the **Expenses and Costs console**, go to the [Orders page](https://usercenter2-intl.aliyun.com/order/list), and pay for the order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The new billing method of the disk. Valid values:
   * 
   * *   PrePaid (default): changes the billing method from pay-as-you-go to subscription.
   * *   PostPaid: changes the billing method from subscription to pay-as-you-go.
   * 
   * >  When you change the billing method of a pay-as-you-go disk to subscription, the billing cycle of the disk is automatically synchronized with that of the associated ECS instance.
   * 
   * @example
   * PostPaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The IDs of disks. The value is a JSON array that consists of up to 16 disk IDs. Separate the disk IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * [“d-bp67acfmxazb4ph****”, “d-bp67acfmxazb4pi****”, … “d-bp67acfmxazb4pj****”]
   */
  diskIds?: string;
  /**
   * @remarks
   * The ID of the instance to which disks are attached.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1i778bq705cvx1****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      diskChargeType: 'DiskChargeType',
      diskIds: 'DiskIds',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      clientToken: 'string',
      diskChargeType: 'string',
      diskIds: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

