// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTransitRouterMulticastDomainRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the IGMP feature for the multicast domain. After this feature is enabled, hosts can dynamically join or leave multicast groups by using Internet Group Management Protocol (IGMP). Valid values: **enable**.
   * 
   * > - The IGMP feature is in public preview. To use this feature, contact your account manager to request access.
   * > - The IGMP feature cannot be disabled after it is enabled.
   * 
   * @example
   * enable
   */
  igmpv2Support?: string;
  /**
   * @remarks
   * Specifies whether to enable the strict multicast source control feature. If this feature is disabled, all ECS instances in the associated vSwitch can serve as multicast sources. If this feature is enabled, only ENIs that are statically configured or have sent IGMP Join messages can serve as multicast sources. Valid values:
   * 
   * - ``enable``: enables the strict multicast source control feature.
   * - ``disable``: disables the strict multicast source control feature.
   * 
   * > - The strict multicast source control feature takes effect only for multicast domains with the IGMP feature enabled.
   * > - Only one multicast domain with the strict multicast source control feature disabled can be created under a transit router.
   * 
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and business restrictions. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. After the request passes the dry run, the name and description of the multicast domain are modified.
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
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
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
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
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

