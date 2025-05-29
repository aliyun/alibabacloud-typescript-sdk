// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterMulticastDomainAssociationsResponseBodyTransitRouterMulticastAssociations extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource associated with the multicast domain.
   * 
   * @example
   * vpc-p0w9b7g9l90yofr0n****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource associated with the multicast domain belongs.
   * 
   * @example
   * 1210123456123456
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of resource associated with the multicast domain.
   * 
   * Valid value: **VPC**.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The association status. Valid values:
   * 
   * *   **Associated**: The resource is associated with the multicast domain.
   * *   **Associating**: The resource is being associated with the multicast domain.
   * *   **Dissociating**: The resource is being disassociated from the multicast domain.
   * 
   * @example
   * Dissociating
   */
  status?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-p90y3ymbbwuvy5****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the multicast domain.
   * 
   * @example
   * tr-mcast-domain-91wpg6wbhchjeq****
   */
  transitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-p0wxk12u6okfkr8xy****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      status: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterMulticastDomainId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

