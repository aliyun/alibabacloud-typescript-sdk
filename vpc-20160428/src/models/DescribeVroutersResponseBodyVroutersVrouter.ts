// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds } from "./DescribeVroutersResponseBodyVroutersVrouterRouteTableIds";


export class DescribeVRoutersResponseBodyVRoutersVRouter extends $dara.Model {
  /**
   * @remarks
   * The time when the vRouter was created.
   * 
   * @example
   * 2018-03-22T07:46:20Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the vRouter.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The region to which the vRouter belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the route table in the vRouter.
   */
  routeTableIds?: DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds;
  /**
   * @remarks
   * The ID of the vRouter.
   * 
   * @example
   * vrt-rj98khsezfqpjrxmv****
   */
  VRouterId?: string;
  /**
   * @remarks
   * The name of the vRouter.
   * 
   * @example
   * doctest
   */
  VRouterName?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the vRouter belongs.
   * 
   * @example
   * vpc-rj905wotv6y030t1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      regionId: 'RegionId',
      routeTableIds: 'RouteTableIds',
      VRouterId: 'VRouterId',
      VRouterName: 'VRouterName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      regionId: 'string',
      routeTableIds: DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds,
      VRouterId: 'string',
      VRouterName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.routeTableIds && typeof (this.routeTableIds as any).validate === 'function') {
      (this.routeTableIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

