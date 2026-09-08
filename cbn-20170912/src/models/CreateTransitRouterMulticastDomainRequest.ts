// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterMulticastDomainRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Internet Group Management Protocol (IGMP) feature for the multicast domain. After this feature is enabled, hosts can dynamically join or leave multicast groups by using the IGMP protocol. Valid values:
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
   * Specifies whether to enable the strict multicast source control feature. If this feature is disabled, all ECS instances in the associated vSwitch can serve as multicast sources. If this feature is enabled, only ENIs that are statically configured or that have sent IGMP Join messages can serve as multicast sources. Valid values:
   * 
   * - ``enable``: enables the strict multicast source control feature.
   * - ``disable``: disables the strict multicast source control feature.
   * 
   * > - The strict multicast source control feature takes effect only for multicast domains with the IGMP feature enabled.
   * > - Currently, only one multicast domain with the strict multicast source control feature disabled can be created under a transit router.
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
   * Once you specify this parameter, it cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * Once you specify this parameter, it cannot be empty. The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
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
   * The instance ID of the Cloud Enterprise Network (CEN).
   * 
   * @example
   * cen-a7syd349kne38g****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
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
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the multicast domain is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The multicast domain feature options.
   */
  options?: CreateTransitRouterMulticastDomainRequestOptions;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the transit router instance.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the region ID.
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
   * The instance ID of the transit router.
   * 
   * @example
   * tr-p0wr9p28r92d598y6****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The description of the multicast domain.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  transitRouterMulticastDomainDescription?: string;
  /**
   * @remarks
   * The name of the multicast domain.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
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

