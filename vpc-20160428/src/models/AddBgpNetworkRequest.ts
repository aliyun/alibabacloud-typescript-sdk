// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBgpNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The CIDR block of the VPC or vSwitch that needs to be interconnected with the on-premises data center.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.10.XX.XX/32
   */
  dstCidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the VBR group resides.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vRouter associated with the router interface.
   * 
   * This parameter is required.
   * 
   * @example
   * vrt-2zeo3xzyf38r4u******
   */
  routerId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1qpo0kug3a2*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dstCidrBlock: 'DstCidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerId: 'RouterId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dstCidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

