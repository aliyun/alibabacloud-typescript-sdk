// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateEipAddressProResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Elastic IP Address (EIP).
   * 
   * @example
   * eip-25877c70gddh****
   */
  allocationId?: string;
  /**
   * @remarks
   * The IP address of the EIP. This parameter is returned only when **InstanceChargeType** is set to **PostPaid**.
   * 
   * @example
   * 192.0.XX.XX
   */
  eipAddress?: string;
  /**
   * @remarks
   * The order ID.
   * <props="china">This parameter is returned when `InstanceChargeType` is set to `PrePaid` (subscription). If `AutoPay` is set to `false`, go to the [Order Center](https://usercenter2.aliyun.com/order/list) to complete the payment.
   * <props="intl">This parameter is returned when `InstanceChargeType` is set to `PrePaid` (subscription). If `AutoPay` is set to `false`, go to the [Order Center](https://usercenter2-intl.aliyun.com/order/list) to complete the payment.
   * 
   * @example
   * 20190000
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group. This parameter is returned only when **InstanceChargeType** is set to **PostPaid**.
   * 
   * @example
   * rg-resourcegroup****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eipAddress: 'EipAddress',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipAddress: 'string',
      orderId: 'number',
      requestId: 'string',
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

