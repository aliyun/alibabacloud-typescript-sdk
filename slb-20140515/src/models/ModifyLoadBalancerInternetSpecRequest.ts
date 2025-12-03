// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLoadBalancerInternetSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically pay the subscription fee of the Internet-facing CLB instance. Valid values:
   * 
   * *   **true**: enables automatic payments. This is the default value.
   * *   **false**: disables automatic payment. You must complete the payment in Order Center.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the Internet-facing CLB instance that uses the pay-by-bandwidth metering method. Unit: Mbit/s.
   * 
   * Valid values: **1 to 5000**. The maximum bandwidth varies based on the region where the CLB instance is created.****
   * 
   * >  You do not need to specify this parameter if you set **InternetChargeType** to **paybytraffic** (pay-by-data-transfer).
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The metering method of the Internet-facing CLB instance. Valid values:
   * 
   * *   **paybybandwidth**: pay-by-bandwidth
   * *   **paybytraffic**: pay-by-data-transfer
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
   * lb-bp1b6c719dfa08ex******
   */
  loadBalancerId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
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
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      loadBalancerId: 'LoadBalancerId',
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
      bandwidth: 'number',
      internetChargeType: 'string',
      loadBalancerId: 'string',
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

