// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values: 
   *          
   * - true: enables automatic payment. This is the default value. You must ensure that your account balance is sufficient. If your account balance is insufficient, an abnormal order is generated and can only be canceled. 
   * - false: generates an order without deducting fees. If your account balance is insufficient, a normal unpaid order is generated. You can log on to the Alibaba Cloud **Expenses and Costs** console and pay the order on the <props="china"><ph>[My Orders](https://usercenter2.aliyun.com/order/list)</ph><props="intl"><ph>[Orders](https://usercenter2-intl.aliyun.com/order/list)</ph> page.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The billing method of the cloud disk. Valid values: 
   *          
   * - PrePaid: changes the billing method of the data cloud disk from pay-as-you-go to subscription. This is the default value. 
   * - PostPaid: changes the billing method of the data cloud disk from subscription to pay-as-you-go.
   * 
   * > When you change the billing method of a pay-as-you-go cloud disk to subscription, the billing cycle of the capacity fee is automatically synchronized with that of the associated ECS instance.
   * 
   * @example
   * PostPaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The list of cloud disk IDs. The value is a JSON array. You can specify up to 16 IDs. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["d-bp67acfmxazb4ph****", "d-bp67acfmxazb4pi****", … "d-bp67acfmxazb4pj****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The ID of the instance to which the cloud disk is attached.
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

