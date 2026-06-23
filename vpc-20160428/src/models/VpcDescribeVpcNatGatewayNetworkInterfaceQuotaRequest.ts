// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VpcDescribeVpcNatGatewayNetworkInterfaceQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the VPC NAT gateway to query.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC NAT gateway to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource.
   * 
   * @example
   * 132193271328****
   */
  resourceUid?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      natGatewayId: 'NatGatewayId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceUid: 'ResourceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      natGatewayId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

