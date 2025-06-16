// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateIpv6InternetBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * The Internet bandwidth of the IPv6 address. Unit: Mbit/s.
   * 
   * *   If you set **InternetChargeType** to **PayByTraffic**, valid values are **1** to **1000**.
   * *   If you set **InternetChargeType** to **PayByBandwidth**, valid values are **1** to **2000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
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
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: sends the API request. After the request passes the check, a 2XX HTTP status code is returned and the route table is associated. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The metering method of the Internet bandwidth for the IPv6 address. Valid values:
   * 
   * *   **PayByTraffic**: pay-by-data-transfer
   * *   **PayByBandwidth** (default): pay-by-bandwidth
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The ID of the IPv6 address.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6-2zen5j4axcp5l5qyy****
   */
  ipv6AddressId?: string;
  /**
   * @remarks
   * The ID of the IPv6 gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6gw-uf6hcyzu65v98v3du****
   */
  ipv6GatewayId?: string;
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
      internetChargeType: 'InternetChargeType',
      ipv6AddressId: 'Ipv6AddressId',
      ipv6GatewayId: 'Ipv6GatewayId',
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
      internetChargeType: 'string',
      ipv6AddressId: 'string',
      ipv6GatewayId: 'string',
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

