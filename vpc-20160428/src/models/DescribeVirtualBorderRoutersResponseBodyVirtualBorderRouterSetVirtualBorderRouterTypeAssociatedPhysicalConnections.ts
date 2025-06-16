// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection } from "./DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection";


export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnections extends $dara.Model {
  associatedPhysicalConnection?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection[];
  static names(): { [key: string]: string } {
    return {
      associatedPhysicalConnection: 'AssociatedPhysicalConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPhysicalConnection: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection },
    };
  }

  validate() {
    if(Array.isArray(this.associatedPhysicalConnection)) {
      $dara.Model.validateArray(this.associatedPhysicalConnection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

