// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFullNatEntryRequest extends $dara.Model {
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
   * The backend port for FULLNAT port mapping. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  accessPort?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: sends a dry run request. The system checks the request for potential issues, including missing required parameters, invalid parameter values, and whether the Resource Access Management (RAM) user is granted the required authorization. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. If the request passes the check, a 2xx HTTP status code is returned and the FULLNAT entry is added.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the FULLNAT entry.
   * 
   * The description can be empty or 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  fullNatEntryDescription?: string;
  /**
   * @remarks
   * The name of the FULLNAT entry. The name must be 2 to 128 characters in length and must start with a letter or Chinese character. It cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  fullNatEntryName?: string;
  /**
   * @remarks
   * The ID of the FULLNAT table to which the FULLNAT entry belongs.
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
   * -  **TCP**: forwards TCP packets. 
   * -  **UDP**: forwards UDP packets.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The NAT IP address that provides address translation.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  natIp?: string;
  /**
   * @remarks
   * The frontend port for FULLNAT port mapping. Valid values: **1** to **65535**.
   * 
   * > If you do not specify this parameter, the system randomly assigns an available port.
   * 
   * @example
   * 80
   */
  natIpPort?: string;
  /**
   * @remarks
   * The ID of the network interface controller (NIC).
   * 
   * This parameter is required.
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

