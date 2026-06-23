// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpv6GatewayAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the IPv6 gateway.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * ipv6description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a precheck for the request. Valid values:
   * 
   * - **true**: sends a precheck request without associating the route table. The check items include whether the AccessKey is valid, whether the RAM user is authorized, and whether the required parameters are specified. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * 
   * - **false** (default): sends a normal request. After the request passes the precheck, a 2xx HTTP status code is returned and the route table is associated.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the IPv6 gateway to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6gw-hp39kh1ya51yzp2lu****
   */
  ipv6GatewayId?: string;
  /**
   * @remarks
   * The name of the IPv6 gateway.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * ipv6name
   */
  name?: string;
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
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      ipv6GatewayId: 'Ipv6GatewayId',
      name: 'Name',
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
      description: 'string',
      dryRun: 'boolean',
      ipv6GatewayId: 'string',
      name: 'string',
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

