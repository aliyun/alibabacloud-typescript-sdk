// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpv6InternetBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * > If you do not specify this parameter, the system uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * > -.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without actually deleting the IPsec server. The system checks the required parameters, request syntax, and business restrictions. If the check fails, the corresponding error message is returned. If the check passes, `DryRunOperation` is returned.
   * 
   * - **false** (default): performs a dry run and then sends the request. If the check passes, the IPsec server is deleted.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the IPv6 address.
   * 
   * > You must specify either **Ipv6AddressId** or **Ipv6InternetBandwidthId**.
   * 
   * @example
   * ipv6-2zen5j4axcp5l5qyy****
   */
  ipv6AddressId?: string;
  /**
   * @remarks
   * The Internet bandwidth instance ID of the IPv6 address.
   * 
   * @example
   * ipv6bw-uf6hcyzu65v98v3du****
   */
  ipv6InternetBandwidthId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the IPv6 gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipv6AddressId: 'Ipv6AddressId',
      ipv6InternetBandwidthId: 'Ipv6InternetBandwidthId',
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
      ipv6AddressId: 'string',
      ipv6InternetBandwidthId: 'string',
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

