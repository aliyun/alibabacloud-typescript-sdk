// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterTransitRouterMulticastGroupSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request.
   * 
   * Generate a unique value from your client. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the request ID as the client token. The request ID is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends the request. If the request passes the check, a multicast source is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IP address of the multicast group to which the multicast source belongs. Valid values range from **224.0.1.0** to **239.255.255.254**.
   * 
   * >Notice: 
   * 
   * The IP addresses from 224.0.0.0 to 224.0.0.127 are system reserved IP addresses. They cannot be used as multicast group IP addresses.
   * 
   * 
   * 
   * If the specified multicast group does not exist in the multicast domain, the system automatically creates the multicast group.
   * 
   * This parameter is required.
   * 
   * @example
   * 239.XX.XX.2
   */
  groupIpAddress?: string;
  /**
   * @remarks
   * A list of ENI IDs.
   */
  networkInterfaceIds?: string[];
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the multicast domain to which the multicast source belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-mcast-domain-5mjb5gjb6dgu98****
   */
  transitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the ENI belongs.
   * 
   * - If the ENI belongs to your Alibaba Cloud account, this parameter is optional.
   * 
   * - If the ENI belongs to a different Alibaba Cloud account, this parameter is required.
   * 
   * @example
   * vpc-wz9fusm6zq8uy7cfa****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      groupIpAddress: 'GroupIpAddress',
      networkInterfaceIds: 'NetworkInterfaceIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      groupIpAddress: 'string',
      networkInterfaceIds: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterMulticastDomainId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceIds)) {
      $dara.Model.validateArray(this.networkInterfaceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

