// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIPv6TranslatorEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated ACL.
   * 
   * @example
   * ipv6transacl-bp1g8bhrdexnrxxxx
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control lists (ACLs). Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  aclStatus?: string;
  /**
   * @remarks
   * Specifies whether to enable ACLs. Valid values:
   * 
   * *   **white**: a whitelist. IPv6 addresses in the ACL are allowed to access backend services.
   * *   **black**: a blacklist. IPv6 addresses in the ACL are not allowed to access backend services.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The port that is used by the IPv6 address allocated to the IPv6 Translation Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  allocateIpv6Port?: number;
  /**
   * @remarks
   * The public IPv4 address that needs to provide IPv6 services.
   * 
   * This parameter is required.
   * 
   * @example
   * 46.22.xx.xx
   */
  backendIpv4Addr?: string;
  /**
   * @remarks
   * The port of the public IPv4 address that needs to provide IPv6 services.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  backendIpv4Port?: number;
  /**
   * @remarks
   * The maximum bandwidth specified in the IPv6 mapping entry. Valid values:
   * 
   * *   \\-1 (default): does not limit the maximum bandwidth specified in the IPv6 mapping entry.
   * *   1 to 200: the bandwidth value specified in the IPv6 mapping entry. Unit: Mbit/s.
   * 
   * > The sum of the maximum bandwidth values specified in all IPv6 entries cannot exceed the maximum bandwidth supported by the instance.
   * 
   * @example
   * 2
   */
  entryBandwidth?: number;
  /**
   * @remarks
   * The description of the IPv6 mapping entry.
   * 
   * @example
   * description
   */
  entryDescription?: string;
  /**
   * @remarks
   * The name of the IPv6 mapping entry. It must be 2 to 100 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start with `http://` or `https://`.
   * 
   * @example
   * name1
   */
  entryName?: string;
  /**
   * @remarks
   * The ID of the IPv6 Translation Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6trans-bp1858ys57xxxxxx
   */
  ipv6TranslatorId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the IPv6 Translation Service instance. You can call the **DescribeRegions** operation to query the most recent region list.
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
   * The protocol. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * This parameter is required.
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
      ipv6TranslatorId: 'Ipv6TranslatorId',
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
      ipv6TranslatorId: 'string',
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

