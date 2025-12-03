// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLoadBalancerInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: automatically completes the payment.
   * *   **false** (default): If you select this option, you must complete the payment in the Order Center.
   * 
   * > This parameter takes effect only for subscription instances.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b6c719df*********
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The specification of the CLB instance. Valid values:
   * 
   * *   **slb.s1.small**
   * *   **slb.s2.small**
   * *   **slb.s2.medium**
   * *   **slb.s3.small**
   * *   **slb.s3.medium**
   * *   **slb.s3.large**
   * 
   * The specifications available vary by region. For more information about the specifications, see [High-performance CLB instance](https://help.aliyun.com/document_detail/85931.html).
   * 
   * > When you switch a shared-resource CLB instance to a high-performance CLB instance, your service may be interrupted for 10 to 30 seconds. We recommend that you modify the specification during off-peak hours or use Alibaba Cloud DNS to schedule your workloads to another CLB instance before you modify the specification.
   * 
   * This parameter is required.
   * 
   * @example
   * slb.s2.small
   */
  loadBalancerSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation.
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
      loadBalancerId: 'LoadBalancerId',
      loadBalancerSpec: 'LoadBalancerSpec',
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
      loadBalancerId: 'string',
      loadBalancerSpec: 'string',
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

