// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIPv6TranslatorEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated access control policy group.
   * 
   * @example
   * ipv6transacl-bp1g8bhrdexnrxxxx
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of access control:
   * 
   * - **white**: Allows the IPv6 addresses in the access control policy group to access backend services.
   * 
   * - **black**: Denies the IPv6 addresses in the access control policy group from accessing backend services.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The port used by the IPv6 address allocated by the IPv6 Translation Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  allocateIpv6Port?: number;
  /**
   * @remarks
   * The public IPv4 address that requires IPv6 services (the IPv4 address of the IPv4-only server).
   * 
   * This parameter is required.
   * 
   * @example
   * 46.22.xx.xx
   */
  backendIpv4Addr?: string;
  /**
   * @remarks
   * The port of the public IPv4 address that requires IPv6 services.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  backendIpv4Port?: number;
  /**
   * @remarks
   * The peak bandwidth of the IPv6 translation mapping entry. Valid values: 
   *         
   * - -1 (default): No bandwidth limit is imposed on the IPv6 translation mapping entry.  
   * - 1-200Mbps: The bandwidth value of the mapping entry.            
   * 
   * > The sum of peak bandwidth values of all IPv6 translation mapping entries cannot exceed the peak bandwidth of the instance.
   * 
   * @example
   * 2
   */
  entryBandwidth?: number;
  /**
   * @remarks
   * The description of the IPv6 translation mapping entry.
   * 
   * @example
   * description
   */
  entryDescription?: string;
  /**
   * @remarks
   * The name of the IPv6 translation mapping entry. The name must be 2 to 100 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `http://` or `https://`.
   * 
   * @example
   * name1
   */
  entryName?: string;
  /**
   * @remarks
   * The instance ID of the IPv6 Translation Service.
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
   * The region of the IPv6 Translation Service instance. You can call the **DescribeRegions** operation to query region IDs.
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
   * - **tcp**: Forwards TCP packets.  
   * - **udp**: Forwards UDP packets.
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

