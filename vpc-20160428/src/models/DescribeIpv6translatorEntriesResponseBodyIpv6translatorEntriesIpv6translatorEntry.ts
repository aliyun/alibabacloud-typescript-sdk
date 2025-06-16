// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPv6TranslatorEntriesResponseBodyIpv6TranslatorEntriesIpv6TranslatorEntry extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated ACL.
   * 
   * @example
   * ipv6transacl-bp1de2****
   */
  aclId?: string;
  /**
   * @remarks
   * Indicates whether ACLs are enabled.
   * 
   * @example
   * on
   */
  aclStatus?: string;
  /**
   * @remarks
   * The ACL type.
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
   * The public IP address of the backend IPv4 server.
   * 
   * @example
   * 47.99.XX.XX
   */
  backendIpv4Addr?: string;
  /**
   * @remarks
   * The public IPv4 port used by the IPv4 server that needs to provide IPv6 access.
   * 
   * @example
   * 80
   */
  backendIpv4Port?: string;
  /**
   * @remarks
   * The bandwidth specified in the IPv6 mapping entry.
   * 
   * @example
   * 1
   */
  entryBandwidth?: string;
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
   * The name of the IPv6 mapping entry.
   * 
   * @example
   * name
   */
  entryName?: string;
  /**
   * @remarks
   * The status of the IPv6 mapping entry.
   * 
   * @example
   * active
   */
  entryStatus?: string;
  /**
   * @remarks
   * The ID of the IPv6 mapping entry.
   * 
   * @example
   * ipv6transentry-bp1g8bhrde****
   */
  ipv6TranslatorEntryId?: string;
  /**
   * @remarks
   * The ID of the IPv6 Translation Service instance to which the IPv6 mapping entry belongs.
   * 
   * @example
   * ipv6trans-bp1858ys****
   */
  ipv6TranslatorId?: string;
  /**
   * @remarks
   * The region of the IPv6 Translation Service instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protocol.
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
      entryBandwidth: 'EntryBandwidth',
      entryDescription: 'EntryDescription',
      entryName: 'EntryName',
      entryStatus: 'EntryStatus',
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      regionId: 'RegionId',
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
      backendIpv4Port: 'string',
      entryBandwidth: 'string',
      entryDescription: 'string',
      entryName: 'string',
      entryStatus: 'string',
      ipv6TranslatorEntryId: 'string',
      ipv6TranslatorId: 'string',
      regionId: 'string',
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

