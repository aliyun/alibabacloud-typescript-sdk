// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomerGatewayAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication key of the BGP routing protocol for the gateway device in the data center.
   * 
   * The key must be 1 to 64 characters in length. It can contain only ASCII characters and cannot contain spaces or question marks (?).
   * 
   * @example
   * AuthKey****
   */
  authKey?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the customer gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * cgw-bp1pvpl9r9adju6l5****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * The description of the customer gateway.
   * 
   * The description must be 1 to 100 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The name of the customer gateway.
   * 
   * The name must be 1 to 100 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the customer gateway is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      clientToken: 'ClientToken',
      customerGatewayId: 'CustomerGatewayId',
      description: 'Description',
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
      authKey: 'string',
      clientToken: 'string',
      customerGatewayId: 'string',
      description: 'string',
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

