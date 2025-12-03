// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLoadBalancerInstanceChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
   * 
   * You do not need to set this parameter. The metering method of Internet data transfer for pay-by-LCU instances supports only pay-by-traffic.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The metering method of the instance after the change.
   * 
   * Valid value: **PayByCLCU**. Only pay-by-LCU is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * PayByCLCU
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of Internet data transfer after the change.
   * 
   * Valid value: **paybytraffic**.
   * 
   * > *   If the value of the **InstanceChargeType** parameter is set to **PayByCLCU**, only pay-by-data-transfer is supported.
   * >*   When you change the metering method, the new metering method takes effect at 00:00:00 the next day.
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1b3jus5hpenznuu****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The specification of the CLB instance.
   * 
   * You do not need to set this parameter. For pay-as-you-go CLB instances, you can only change the metering method from pay-by-specification to pay-by-LCU. You cannot change the metering method from pay-by-LCU to pay-by-specification.
   * 
   * @example
   * slb.s1.small
   */
  loadBalancerSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
      bandwidth: 'Bandwidth',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
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
      bandwidth: 'number',
      instanceChargeType: 'string',
      internetChargeType: 'string',
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

