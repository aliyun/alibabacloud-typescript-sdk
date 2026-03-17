// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouteDistributionStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.XX.XX.0/24
   */
  destCidrBlock?: string;
  /**
   * @remarks
   * The ID of the health check instance.
   * 
   * @example
   * hc-sztovuprqzgm50****
   */
  hcInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway (SAG) instance.
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
   * The route advertisement policy. Valid values:
   * 
   * *   **publish**: advertises routes.
   * *   **no_publish**: does not advertise routes.
   * *   **no_publish_and_publish_on_health_success**: routes are advertised only when they pass the health check.
   * *   **no_publish_and_publish_on_health_fail**: routes are advertised only when they fail the health check.
   * *   **publish_and_revoke_on_health_success**: advertised routes are withdrawn only when they pass the health check.
   * *   **publish_and_revoke_on_health_fail**: advertised routes are withdrawn only when they fail the health check.
   * 
   * For more information, see [Configure health checks](https://help.aliyun.com/document_detail/163971.html) and [Advertise routes](https://help.aliyun.com/document_detail/163973.html).
   * 
   * This parameter is required.
   * 
   * @example
   * publish
   */
  routeDistribution?: string;
  /**
   * @remarks
   * The source of routes. Valid values:
   * 
   * *   **Alibaba Cloud-facing routes**
   * 
   *     *   **The ID of the Virtual Private Cloud (VPC)**: learns routes from the VPC network.
   *     *   **The ID of the virtual border router (VBR)**: learns routes from the VBR.
   *     *   **The ID of the SAG instance**: learns routes from the SAG instance.
   * 
   * *   **Private network-facing routes**
   * 
   *     *   **STATIC**: static routes specified in the SAG console.
   *     *   **OSPF**: learns routes through the Open Shortest Path First (OSPF) protocol.
   *     *   **BGP**: learns routes through Border Gateway Protocol (BGP).
   * 
   * This parameter is required.
   * 
   * @example
   * OSPF
   */
  routeSource?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-erx3qta5xg5zyq****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The type of the route source. Valid values:
   * 
   * *   **cloud**: Alibaba Cloud-facing routes.
   * *   **local**: private network-facing routes.
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
      hcInstanceId: 'HcInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeDistribution: 'RouteDistribution',
      routeSource: 'RouteSource',
      smartAGId: 'SmartAGId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrBlock: 'string',
      hcInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeDistribution: 'string',
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

