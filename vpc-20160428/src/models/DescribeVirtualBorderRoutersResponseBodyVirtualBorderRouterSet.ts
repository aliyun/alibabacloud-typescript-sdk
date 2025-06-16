// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType } from "./DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType";


export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet extends $dara.Model {
  virtualBorderRouterType?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType[];
  static names(): { [key: string]: string } {
    return {
      virtualBorderRouterType: 'VirtualBorderRouterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualBorderRouterType: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterType },
    };
  }

  validate() {
    if(Array.isArray(this.virtualBorderRouterType)) {
      $dara.Model.validateArray(this.virtualBorderRouterType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

