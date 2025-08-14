// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterMulticastDomainRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IGMP feature is enabled for the multicast domain. Once enabled, hosts can dynamically join or leave multicast groups by using IGMP protocol. Valid values:
   * 
   * *   **enable**: enables IGMP.
   * *   **disable**(default): disables IGMP.
   * 
   * > *   The IGMP feature is in beta testing. To use it, contact your account manager.
   * > *   If you select this option, you cannot disable IPv6 after the VBR is created.
   * 
   * @example
   * enable
   */
  igmpv2Support?: string;
  static names(): { [key: string]: string } {
    return {
      igmpv2Support: 'Igmpv2Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      igmpv2Support: 'string',
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
   * The tag key.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.
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
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-a7syd349kne38g****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request format, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Multicast domain feature.
   */
  options?: CreateTransitRouterMulticastDomainRequestOptions;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The information about the tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: CreateTransitRouterMulticastDomainRequestTag[];
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-p0wr9p28r92d598y6****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The description of the multicast domain.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
   * 
   * @example
   * desctest
   */
  transitRouterMulticastDomainDescription?: string;
  /**
   * @remarks
   * The name of the multicast domain.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
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

