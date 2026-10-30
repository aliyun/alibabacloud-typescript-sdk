// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterMulticastDomainRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Internet Group Management Protocol (IGMP) feature for the multicast domain. After this feature is enabled, hosts can dynamically join or leave multicast groups by using IGMP. Valid values:
   * 
   * - **enable**: enables the IGMP feature.
   * - **disable** (default): disables the IGMP feature.
   * 
   * > - The IGMP feature is in public preview. To use this feature, contact your account manager to apply for permissions.
   * > - After the IGMP feature is enabled, it cannot be disabled.
   * 
   * @example
   * enable
   */
  igmpv2Support?: string;
  /**
   * @remarks
   * Specifies whether to enable the strict multicast source control feature. If this feature is disabled, all Elastic Compute Service (ECS) instances associated with the vSwitch can act as multicast sources. If this feature is enabled, only statically configured elastic network interfaces (ENIs) or ENIs that have sent IGMP Join messages can act as multicast sources. Valid values:
   * 
   * - ``enable``: enables the strict multicast source control feature.
   * - ``disable``: disables the strict multicast source control feature.
   * 
   * > - The strict multicast source control feature takes effect only for multicast domains that have the IGMP feature enabled.
   * > - You can create only one multicast domain with the strict multicast source control feature disabled under a transit router.
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

export class CreateTransitRouterMulticastDomainRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * The tag key cannot be an empty string. It can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * The tag value cannot be empty. It can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to a tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * TagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterMulticastDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * @example
   * cen-a7syd349kne38g****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run and does not create the multicast domain. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request and creates the multicast domain if the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The feature options for the multicast domain.
   */
  options?: CreateTransitRouterMulticastDomainRequestOptions;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: CreateTransitRouterMulticastDomainRequestTag[];
  /**
   * @remarks
   * The ID of the transit router instance, which is used to forward traffic and manage routing.
   * 
   * @example
   * tr-p0wr9p28r92d598y6****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The description of the multicast domain.
   * 
   * The description can be left empty or be 1 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * desctest
   */
  transitRouterMulticastDomainDescription?: string;
  /**
   * @remarks
   * The name of the multicast domain.
   * 
   * The name can be left empty or be 1 to 128 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * nametest
   */
  transitRouterMulticastDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      options: 'Options',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterMulticastDomainDescription: 'TransitRouterMulticastDomainDescription',
      transitRouterMulticastDomainName: 'TransitRouterMulticastDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      options: CreateTransitRouterMulticastDomainRequestOptions,
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterMulticastDomainRequestTag },
      transitRouterId: 'string',
      transitRouterMulticastDomainDescription: 'string',
      transitRouterMulticastDomainName: 'string',
    };
  }

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

