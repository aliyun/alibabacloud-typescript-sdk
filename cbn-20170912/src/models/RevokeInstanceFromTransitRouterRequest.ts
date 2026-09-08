// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeInstanceFromTransitRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance to which the transit router belongs.
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
   * The network instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **VPC**: VPC instance.
   * - **ExpressConnect**: VBR instance.
   * - **VPN**: IPsec connection.
   * - **ECR**: ECR instance.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the network instance.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
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

