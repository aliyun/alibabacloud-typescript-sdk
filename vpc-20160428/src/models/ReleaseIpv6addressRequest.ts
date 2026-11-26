// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseIpv6AddressRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must ensure that it is unique among different requests. The token can contain a maximum of 64 ASCII characters. If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is unique.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: sends a check request and does not create the IP address pool. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the check, the corresponding error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a regular request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the IPv6 address.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6-2zen5j4axcp5l5qyy****
   */
  ipv6AddressId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipv6AddressId: 'Ipv6AddressId',
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

