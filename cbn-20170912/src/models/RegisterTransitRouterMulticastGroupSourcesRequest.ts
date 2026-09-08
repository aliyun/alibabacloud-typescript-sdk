// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterTransitRouterMulticastGroupSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the multicast source is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IP address of the multicast group to which the multicast source belongs. Valid values: **224.0.1.0** to **239.255.255.254**.
   * >Notice: 224.0.0.0 to 224.0.0.127 are system reserved IP addresses and cannot be used as multicast group IP addresses.
   * If the multicast group that you specify does not exist in the current multicast domain, the system automatically creates a multicast group.
   * 
   * This parameter is required.
   * 
   * @example
   * 239.XX.XX.2
   */
  groupIpAddress?: string;
  /**
   * @remarks
   * The list of network interface controller (NIC) IDs of the elastic network interfaces (ENIs).
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
   * The ID of the VPC-connected instance to which the network interface controller (NIC) of the elastic network interfaces (ENIs) belongs.
   * 
   * - If the ENI belongs to the same Alibaba Cloud account as the account that you use to logon, you do not need to set this parameter.
   * - If the ENI belongs to a different Alibaba Cloud account from the account that you use to logon, this parameter is required.
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

