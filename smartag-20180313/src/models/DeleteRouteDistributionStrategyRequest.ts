// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteDistributionStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.XX.XX.0/24
   */
  destCidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Smart Access Gateway (SAG) instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source of routes. Valid values:
   * 
   * *   **Alibaba Cloud**
   * 
   *     *   **Virtual private cloud (VPC) IDs**: Routes that are learned from VPCs.
   *     *   **Virtual border router (VBR) IDs**: Routes that are learned from VBRs.
   *     *   **SAG instance IDs**: Routes that are learned from SAG instances.
   * 
   * *   **On-premises network**
   * 
   *     *   **STATIC**: Static routes that are specified in the SAG console.
   *     *   **OSPF**: Routes that are learned through the Open Shortest Path First (OSPF) protocol.
   *     *   **BGP**: Routes that are learned through Border Gateway Protocol (BGP).
   * 
   * This parameter is required.
   * 
   * @example
   * STATIC
   */
  routeSource?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-gyat6giidkvyk****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The type of the route source. Valid values:
   * 
   * *   **cloud**: Alibaba Cloud
   * *   **local**: on-premises network
   * 
   * This parameter is required.
   * 
   * @example
   * local
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      destCidrBlock: 'DestCidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeSource: 'RouteSource',
      smartAGId: 'SmartAGId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeSource: 'string',
      smartAGId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

