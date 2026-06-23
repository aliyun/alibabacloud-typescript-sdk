// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomerGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * The client generates this parameter value, which must be unique among different requests. The maximum length is 64 ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the customer gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cgw-bp1pvpl9r9adju6l5****
   */
  customerGatewayId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the customer gateway. You can obtain the region ID by calling the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation.
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
      clientToken: 'ClientToken',
      customerGatewayId: 'CustomerGatewayId',
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
      customerGatewayId: 'string',
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

