// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTransitRouterMulticastDomainRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Internet Group Management Protocol (IGMP) feature for the multicast domain. When this feature is enabled, hosts can use IGMP to dynamically join or leave multicast groups. Set the value to **enable**.
   * 
   * > - The IGMP feature is in public preview. To use this feature, contact your account manager.
   * >
   * > - You cannot disable the IGMP feature after it is enabled.
   * 
   * @example
   * enable
   */
  igmpv2Support?: string;
  /**
   * @example
   * enable
   */
  strictSourceControl?: string;
  static names(): { [key: string]: string } {
    return {
      igmpv2Support: 'Igmpv2Support',
      strictSourceControl: 'StrictSourceControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      igmpv2Support: 'string',
      strictSourceControl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransitRouterMulticastDomainRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that ensures the idempotence of the request.
   * 
   * Generate a unique token on your client for each request. The token can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run. The system checks the required parameters, request format, and service limits. If the check fails, an error message is returned. If the check passes, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): Sends the request. If the request passes the check, the name and description of the multicast domain are modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The feature options of the multicast domain.
   */
  options?: ModifyTransitRouterMulticastDomainRequestOptions;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The new description of the multicast domain.
   * 
   * The description can be empty or 1 to 256 characters long. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * desctest
   */
  transitRouterMulticastDomainDescription?: string;
  /**
   * @remarks
   * The ID of the multicast domain.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-mcast-domain-40cwj0rgzgdtam****
   */
  transitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * The new name of the multicast domain.
   * 
   * The name can be empty or 1 to 128 characters long. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * nametest
   */
  transitRouterMulticastDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      options: 'Options',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterMulticastDomainDescription: 'TransitRouterMulticastDomainDescription',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      transitRouterMulticastDomainName: 'TransitRouterMulticastDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      options: ModifyTransitRouterMulticastDomainRequestOptions,
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterMulticastDomainDescription: 'string',
      transitRouterMulticastDomainId: 'string',
      transitRouterMulticastDomainName: 'string',
    };
  }

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

