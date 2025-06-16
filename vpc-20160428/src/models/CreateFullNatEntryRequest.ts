// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFullNatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The backend IP address to be modified in FULLNAT address translation.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX
   */
  accessIp?: string;
  /**
   * @remarks
   * The backend port to be modified in the mapping of FULLNAT port. Valid values: **1** to **65535**.
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
   * You can use the client to generate a value, and you must make sure that each request has a unique token value. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck this request. Valid values:
   * 
   * *   **true**: prechecks the request without adding the FULLNAT entry. The system checks whether your AccessKey pair is valid, whether RAM users are granted required permissions, and whether the required parameters are set. If the request fails to pass the precheck, an error code is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false**: sends the API request. This is the default value. After the request passes the precheck, a 2XX HTTP status code is returned and the FULLNAT entry is added.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the FULLNAT entry.
   * 
   * This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  fullNatEntryDescription?: string;
  /**
   * @remarks
   * The FULLNAT entry name. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://.
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
   * The protocol of the packets that are forwarded by the port. Valid values:
   * 
   * *   **TCP**
   * *   **UDP**
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
   * The frontend port to be modified in the mapping of FULLNAT port. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  natIpPort?: string;
  /**
   * @remarks
   * The elastic network interface (ENI) ID.
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
   * The region ID of the Virtual Private Cloud (VPC) NAT gateway to which the FULLNAT entry to be added belongs.
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

