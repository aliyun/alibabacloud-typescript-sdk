// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPv6TranslatorEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * ipv6transacl-bp1de2****
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
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The ACL type. Valid values:
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
   * The IPv6 address allocated to the IPv6 Translation Service instance.
   * 
   * @example
   * 2400:3200:1600::XX
   */
  allocateIpv6Addr?: string;
  /**
   * @remarks
   * The port used by the IPv6 address allocated to the IPv6 Translation Service instance.
   * 
   * @example
   * 80
   */
  allocateIpv6Port?: number;
  /**
   * @remarks
   * The public IPv4 address that needs to provide IPv6 services.
   * 
   * @example
   * 47.99.XX.XX
   */
  backendIpv4Addr?: string;
  /**
   * @remarks
   * The port used by the public IPv4 address that needs to provide IPv6 services.
   * 
   * @example
   * 80
   */
  backendIpv4Port?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the IPv6 mapping entry.
   * 
   * @example
   * entryname
   */
  entryName?: string;
  /**
   * @remarks
   * The ID of the IPv6 mapping entry.
   * 
   * > If **Ipv6TranslatorId** and **Ipv6TranslatorEntryId** are empty, information about all IPv6 mapping entries is returned. If only **Ipv6TranslatorEntryId** is empty, information about the IPv6 mapping entries of the current IPv6 Translation Service instance is returned.
   * 
   * @example
   * ipv6transentry-bp1g8bhrde****
   */
  ipv6TranslatorEntryId?: string;
  /**
   * @remarks
   * The ID of the IPv6 Translation Service instance.
   * 
   * @example
   * ipv6trans-bp1858ysxx****
   */
  ipv6TranslatorId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The protocol used by the data to be forwarded.
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
      allocateIpv6Addr: 'AllocateIpv6Addr',
      allocateIpv6Port: 'AllocateIpv6Port',
      backendIpv4Addr: 'BackendIpv4Addr',
      backendIpv4Port: 'BackendIpv4Port',
      clientToken: 'ClientToken',
      entryName: 'EntryName',
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      allocateIpv6Addr: 'string',
      allocateIpv6Port: 'number',
      backendIpv4Addr: 'string',
      backendIpv4Port: 'number',
      clientToken: 'string',
      entryName: 'string',
      ipv6TranslatorEntryId: 'string',
      ipv6TranslatorId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

