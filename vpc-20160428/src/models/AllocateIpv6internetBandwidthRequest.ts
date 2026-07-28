// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateIpv6InternetBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * The Internet bandwidth of the IPv6 address. Unit: Mbit/s.
   * 
   * <props="china">
   * 
   * - If **InternetChargeType** is set to **PayByTraffic**, the valid values are **1** to **1000**.
   * - If **InternetChargeType** is set to **PayByBandwidth**, the valid values are **1** to **2000**.
   * - If **InternetChargeType** is set to **PayByOld95**, the valid values are **1** to **2000**.
   * 
   * 
   * <props="intl">
   *  
   * - If **InternetChargeType** is set to **PayByTraffic**, the valid values are **1** to **1000**.
   * - If **InternetChargeType** is set to **PayByBandwidth**, the valid values are **1** to **2000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned. The system does not associate a prefix list with a route table.
   * 
   * - **false** (default): sends a normal request. After the request passes the check, a 2xx HTTP status code is returned and the system associates the prefix list with a route table. The system checks whether the AccessKey pair is valid, whether the Resource Access Management (RAM) user has the required authorization, and whether the required parameters are specified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The billable methods of the IPv6 Internet bandwidth. Valid values:
   * 
   * <props="china">
   * 
   * - **PayByTraffic**: pay-by-data-transfer.
   * - **PayByBandwidth** (default): pay-by-bandwidth.
   * - **PayByOld95**: traditional 95th percentile billing. IPv6 Internet bandwidth does not support traditional 95th percentile billing by default. To use this billing method, contact your account manager.
   * 
   * 
   * <props="intl">
   * 
   * - **PayByTraffic**: pay-by-data-transfer.
   * - **PayByBandwidth** (default): pay-by-bandwidth.
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
   * @example
   * ipv6gw-uf6hcyzu65v98v3du****
   */
  ipv6GatewayId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the IPv6 gateway. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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

