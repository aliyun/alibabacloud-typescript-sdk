// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouteTableAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the route table.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
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
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Indicates whether to enable route propagation to receive dynamic routes. Valid values:
   * 
   * - **true** (default): enables route propagation.
   * 
   * - **false**: disables route propagation.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  routePropagationEnable?: boolean;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The name of the route table.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * doctest
   */
  routeTableName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routePropagationEnable: 'RoutePropagationEnable',
      routeTableId: 'RouteTableId',
      routeTableName: 'RouteTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routePropagationEnable: 'boolean',
      routeTableId: 'string',
      routeTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

