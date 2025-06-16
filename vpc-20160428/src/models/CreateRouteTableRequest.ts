// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRouteTableRequestTag } from "./CreateRouteTableRequestTag";


export class CreateRouteTableRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * *   **VSwitch** (default): vSwitch route table
   * *   **Gateway**: gateway route table
   * 
   * @example
   * VSwitch
   */
  associateType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** in each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the route table.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the virtual private cloud (VPC) to which the custom route table belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the route table.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * myRouteTable
   */
  routeTableName?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateRouteTableRequestTag[];
  /**
   * @remarks
   * The ID of the VPC to which the custom route table belongs.
   * 
   * If a VPC contains an Elastic Compute Service (ECS) instance that belongs to one of the following instance families, you cannot create a custom route table for the VPC:
   * 
   * ecs.c1, ecs.c2, ecs.c4, ecs.ce4, ecs.cm4, ecs.d1, ecs.e3, ecs.e4, ecs.ga1, ecs.gn4, ecs.gn5, ecs.i1, ecs.m1, ecs.m2, ecs.mn4, ecs.n1, ecs.n2, ecs.n4, ecs.s1, ecs.s2, ecs.s3, ecs.se1, ecs.sn1, ecs.sn2, ecs.t1, and ecs.xn4
   * 
   * You must upgrade or release the ECS instance before you can create a custom route table for the VPC.
   * 
   * *   For more information about how to upgrade an ECS instance, see [Upgrade subscription instances](https://help.aliyun.com/document_detail/25438.html) and [Change specifications of pay-as-you-go instances](https://help.aliyun.com/document_detail/60051.html).
   * *   For more information about how to release an ECS instance, see [Release an ECS instance](https://help.aliyun.com/document_detail/25442.html).
   * 
   * >  If a custom route table is created for a VPC that contains an ECS instance from one of the preceding instance families, you must upgrade or release the ECS instance. Otherwise, the custom route table cannot work as expected.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1qpo0kug3a20qqe****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      clientToken: 'ClientToken',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableName: 'RouteTableName',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      clientToken: 'string',
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableName: 'string',
      tag: { 'type': 'array', 'itemType': CreateRouteTableRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

