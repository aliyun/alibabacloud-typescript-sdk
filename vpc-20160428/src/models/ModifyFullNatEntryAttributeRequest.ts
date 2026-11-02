// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFullNatEntryAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The backend domain name for FULLNAT address translation.
   * 
   * @example
   * xxx.com
   */
  accessDomain?: string;
  /**
   * @remarks
   * The backend IP address for FULLNAT address translation.
   * 
   * @example
   * 192.168.XX.XX
   */
  accessIp?: string;
  /**
   * @remarks
   * The backend port of the FULLNAT port mapping. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  accessPort?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, and you must ensure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for this request. Valid values:
   * 
   * - **true**: performs a dry run without modifying the FULLNAT entry. The system checks whether your AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a Normal request. If the request passes the dry run, a 2xx HTTP status code is returned and the FULLNAT entry is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The new description of the FULLNAT entry.
   * 
   * The description can be left empty, or must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * abcd
   */
  fullNatEntryDescription?: string;
  /**
   * @remarks
   * The ID of the FULLNAT entry that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * fullnat-gw8fz23jezpbblf1j****
   */
  fullNatEntryId?: string;
  /**
   * @remarks
   * The new name of the FULLNAT entry.
   * 
   * The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * modify
   */
  fullNatEntryName?: string;
  /**
   * @remarks
   * The ID of the FULLNAT table.
   * 
   * This parameter is required.
   * 
   * @example
   * fulltb-gw88z7hhlv43rmb26****
   */
  fullNatTableId?: string;
  /**
   * @remarks
   * The protocol type of the Redirection Port. Valid values:
   * 
   * - **TCP**: forwards TCP packets. 
   * - **UDP**: forwards UDP packets.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The NAT IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  natIp?: string;
  /**
   * @remarks
   * The frontend port of the FULLNAT port mapping. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  natIpPort?: string;
  /**
   * @remarks
   * The ID of the network interface controller (NIC) that you want to modify.
   * 
   * @example
   * eni-gw8g131ef2dnbu3k****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC NAT gateway to which the FULLNAT entry belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-central-1
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessDomain: 'AccessDomain',
      accessIp: 'AccessIp',
      accessPort: 'AccessPort',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fullNatEntryDescription: 'FullNatEntryDescription',
      fullNatEntryId: 'FullNatEntryId',
      fullNatEntryName: 'FullNatEntryName',
      fullNatTableId: 'FullNatTableId',
      ipProtocol: 'IpProtocol',
      natIp: 'NatIp',
      natIpPort: 'NatIpPort',
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDomain: 'string',
      accessIp: 'string',
      accessPort: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      fullNatEntryDescription: 'string',
      fullNatEntryId: 'string',
      fullNatEntryName: 'string',
      fullNatTableId: 'string',
      ipProtocol: 'string',
      natIp: 'string',
      natIpPort: 'string',
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

