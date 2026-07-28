// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIPv6TranslatorEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated access control policy group.
   * 
   * @example
   * ipv6transacl-bp1de27sou71g0lf****
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * - **on**: enabled.
   * - **off**: disabled.
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the access control policy. Valid values:
   * 
   * - **white**: allows the IPv6 addresses in the access control policy group to access backend services.
   * 
   * - **black**: denies the IPv6 addresses in the access control policy group from accessing backend services.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The port used by the IPv6 address allocated by the IPv6 Translation Service instance.
   * 
   * @example
   * 80
   */
  allocateIpv6Port?: number;
  /**
   * @remarks
   * The public IPv4 address that needs to provide IPv6 services. This is the IPv4 address of the IPv4-only server.
   * 
   * @example
   * 47.11.XX.XX
   */
  backendIpv4Addr?: string;
  /**
   * @remarks
   * The port of the public IPv4 address that needs to provide IPv6 services.
   * 
   * @example
   * 80
   */
  backendIpv4Port?: number;
  /**
   * @remarks
   * The maximum bandwidth of the IPv6 Translation Service mapping entry. Unit: Mbit/s. Valid values: 
   * 
   * - **-1** (default): does not limit the maximum bandwidth of the mapping entry.  
   * 
   * - **1** to **200**: the bandwidth value of the mapping entry.
   * 
   * > The sum of the maximum bandwidth values of all IPv6 Translation Service mapping entries cannot exceed the maximum bandwidth of the instance.
   * 
   * @example
   * 10
   */
  entryBandwidth?: number;
  /**
   * @remarks
   * The description of the IPv6 Translation Service mapping entry. The description must be 2 to 100 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with http:// or https://.
   * 
   * @example
   * entrydescription
   */
  entryDescription?: string;
  /**
   * @remarks
   * The name of the IPv6 Translation Service mapping entry. The name must be 2 to 100 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with http:// or https://.
   * 
   * @example
   * entry1
   */
  entryName?: string;
  /**
   * @remarks
   * The ID of the IPv6 Translation Service mapping entry.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6trans-bp1858ys****
   */
  ipv6TranslatorEntryId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the IPv6 Translation Service instance. You can call the DescribeRegions operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **tcp**: forwards TCP packets.  
   * - **udp**: forwards UDP packets.
   * 
   * @example
   * tcp
   */
  transProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      allocateIpv6Port: 'AllocateIpv6Port',
      backendIpv4Addr: 'BackendIpv4Addr',
      backendIpv4Port: 'BackendIpv4Port',
      entryBandwidth: 'EntryBandwidth',
      entryDescription: 'EntryDescription',
      entryName: 'EntryName',
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transProtocol: 'TransProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      allocateIpv6Port: 'number',
      backendIpv4Addr: 'string',
      backendIpv4Port: 'number',
      entryBandwidth: 'number',
      entryDescription: 'string',
      entryName: 'string',
      ipv6TranslatorEntryId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

