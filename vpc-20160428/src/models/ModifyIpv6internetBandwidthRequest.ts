// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpv6InternetBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * The Internet bandwidth value of the IPv6 address. Unit: Mbit/s.
   * 
   * *   If the billing method is pay-by-data-transfer, valid values are **1** to **1000**.
   * *   If the billing method is pay-by-bandwidth, valid values are **1** to **2000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without sending the actual request. Valid values:
   * 
   * *   **true**: pre-checks the request but does not create the IPv4 gateway. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the API request. After the request passes the check, an HTTP 2xx status code is returned and the IPv4 gateway is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the IPv6 address.
   * 
   * >  You must specify one of **Ipv6AddressId** and **Ipv6InternetBandwidthId**.
   * 
   * @example
   * ipv6-2zen5j4axcp5l5qyy****
   */
  ipv6AddressId?: string;
  /**
   * @remarks
   * The instance ID of the Internet bandwidth of the IPv6 address.
   * 
   * @example
   * ipv6bw-uf6hcyzu65v98v3du****
   */
  ipv6InternetBandwidthId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the IPv6 gateway is deployed. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
      bandwidth: 'Bandwidth',
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
      bandwidth: 'number',
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

