// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantInstanceToTransitRouterRequest extends $dara.Model {
  /**
   * @remarks
   * Enter the ID of the Cloud Enterprise Network (CEN) instance to which the transit router belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-44m0p68spvlrqq****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the CEN instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1250123456123456
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of network instance. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **ExpressConnect**: VBR
   * *   **VPN**: IPsec-VPN connection
   * *   **ECR**: ECR
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  instanceType?: string;
  /**
   * @remarks
   * The entity that pays the fees of the network instance. Valid values:
   * 
   * *   **PayByCenOwner**: the Alibaba Cloud account that owns the CEN instance.
   * *   **PayByResourceOwner**: the Alibaba Cloud account that owns the network instance.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the network instance is deployed.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      instanceId: 'string',
      instanceType: 'string',
      orderType: 'string',
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

