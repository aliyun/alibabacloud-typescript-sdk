// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatIpRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without deleting the NAT IP address. The system checks the AccessKey pair, the authorization of the Resource Access Management (RAM) user, and the required parameters. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a Normal request. After the request passes the check, a 2xx HTTP status code is returned and the NAT IP address is deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IP prefix to delete.
   * 
   * @example
   * 192.168.0.0/28
   */
  ipv4Prefix?: string;
  /**
   * @remarks
   * The instance ID of the NAT gateway to which the IP prefix belongs. This parameter is required when you delete an IP prefix.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The instance ID of the NAT IP address that you want to delete.
   * 
   * @example
   * vpcnatip-gw8y7q3cpk3fggs87****
   */
  natIpId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway to which the NAT IP address belongs.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipv4Prefix: 'Ipv4Prefix',
      natGatewayId: 'NatGatewayId',
      natIpId: 'NatIpId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipv4Prefix: 'string',
      natGatewayId: 'string',
      natIpId: 'string',
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

