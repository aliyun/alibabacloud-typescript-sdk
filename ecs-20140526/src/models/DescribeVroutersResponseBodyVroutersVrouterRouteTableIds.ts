// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVRoutersResponseBodyVRoutersVRouterRouteTableIds extends $dara.Model {
  routeTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routeTableId)) {
      $dara.Model.validateArray(this.routeTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

