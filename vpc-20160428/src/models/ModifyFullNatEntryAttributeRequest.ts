// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFullNatEntryAttributeRequest extends $dara.Model {
  accessDomain?: string;
  /**
   * @remarks
   * The backend IP address to be modified in FULLNAT address translation.
   * 
   * @example
   * 192.168.XX.XX
   */
  accessIp?: string;
  /**
   * @remarks
   * The backend port to be modified in FULLNAT port mapping. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  accessPort?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The new description of the FULLNAT entry.
   * 
   * You can leave this parameter empty or enter a description. If you enter a description, the description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abcd
   */
  fullNatEntryDescription?: string;
  /**
   * @remarks
   * The ID of the FULLNAT entry to be modified.
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
   * The name must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * modify
   */
  fullNatEntryName?: string;
  /**
   * @remarks
   * The ID of the FULLNAT table to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * fulltb-gw88z7hhlv43rmb26****
   */
  fullNatTableId?: string;
  /**
   * @remarks
   * The protocol of the packets that are forwarded by the port. Valid values:
   * 
   * *   **TCP**: TCP
   * *   **UDP**
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The NAT IP address to be modified.
   * 
   * @example
   * 192.168.XX.XX
   */
  natIp?: string;
  /**
   * @remarks
   * The frontend port to be modified in FULLNAT port mapping. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  natIpPort?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI) to be modified.
   * 
   * @example
   * eni-gw8g131ef2dnbu3k****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Virtual Private Cloud (VPC) NAT gateway to which the FULLNAT entry to be modified belongs.
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

