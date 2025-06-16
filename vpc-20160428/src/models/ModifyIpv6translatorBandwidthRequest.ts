// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIPv6TranslatorBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-payment for the instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the IPv6 Translation Service instance. Valid values: **1** to **200**. Unit: Mbit/s.
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
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the IPv6 Translation Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6trans-bp1858ys****
   */
  ipv6TranslatorId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the IPv6 Translation Service instance. You can call the **DescribeRegions** operation to query the most recent region list.
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
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandwidth: 'number',
      clientToken: 'string',
      ipv6TranslatorId: 'string',
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

