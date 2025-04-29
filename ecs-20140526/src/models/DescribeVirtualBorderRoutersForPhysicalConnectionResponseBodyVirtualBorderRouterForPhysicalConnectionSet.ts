// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType } from "./DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType";


export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet extends $dara.Model {
  virtualBorderRouterForPhysicalConnectionType?: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType[];
  static names(): { [key: string]: string } {
    return {
      virtualBorderRouterForPhysicalConnectionType: 'VirtualBorderRouterForPhysicalConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualBorderRouterForPhysicalConnectionType: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType },
    };
  }

  validate() {
    if(Array.isArray(this.virtualBorderRouterForPhysicalConnectionType)) {
      $dara.Model.validateArray(this.virtualBorderRouterForPhysicalConnectionType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

