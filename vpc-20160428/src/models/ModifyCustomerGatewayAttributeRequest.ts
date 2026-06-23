// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomerGatewayAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication key of the BGP route routing protocol for the on-premises data center gateway device.
   * 
   * The key must be 1 to 64 characters in length and can contain only ASCII characters. It cannot contain spaces, Chinese characters, or half-width question marks (?).
   * 
   * @example
   * AuthKey****
   */
  authKey?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID of the customer gateway.
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
   * The description must be 1 to 100 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The name of the customer gateway.  
   * 
   * The name must be 1 to 100 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the customer gateway. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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

