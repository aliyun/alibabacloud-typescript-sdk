// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds } from "./DescribeVroutersResponseBodyVroutersVrouterRouteTableIds";


export class DescribeVRoutersResponseBodyVRoutersVRouter extends $dara.Model {
  creationTime?: string;
  description?: string;
  regionId?: string;
  routeTableIds?: DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds;
  VRouterId?: string;
  VRouterName?: string;
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

